import { useState, useEffect, useCallback } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { logout, savePendingDeploy, getPendingDeploy, clearPendingDeploy } from '@/lib/adminAuth';
import { fetchPortfolioData, commitPortfolioData } from '@/lib/github';
import type { ClientGroup, PortfolioData } from '@/data/portfolioItems';
import ItemForm, { type ItemData } from './ItemForm';
import { getVideoThumbnail } from './YouTubePreview';
import DeployProgress from './DeployProgress';

// Sortable group row
function SortableGroupRow({
  group,
  index,
  isExpanded,
  onToggle,
  onDelete,
  onNameChange,
  onQuickAdd,
  onAddItem,
  onDeleteItem,
  onEditItem,
  onMoveItem,
}: {
  group: ClientGroup;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onNameChange: (name: string) => void;
  onQuickAdd: (url: string) => void;
  onAddItem: () => void;
  onDeleteItem: (itemIndex: number) => void;
  onEditItem: (itemIndex: number) => void;
  onMoveItem: (itemIndex: number, direction: 'up' | 'down') => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: `group-${index}`,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="border rounded-lg bg-card">
      <div className="flex items-center gap-3 p-3">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab text-muted-foreground hover:text-foreground touch-none"
          title="גרור לשינוי סדר"
        >
          ⠿
        </button>
        <button onClick={onToggle} className="text-lg shrink-0">
          {isExpanded ? '▾' : '▸'}
        </button>
        <Input
          value={group.name}
          onChange={(e) => onNameChange(e.target.value)}
          className="font-medium flex-1"
        />
        <span className="text-sm text-muted-foreground shrink-0">
          {group.items.length} פריטים
        </span>
        <Button variant="ghost" size="sm" onClick={onDelete} className="text-destructive shrink-0">
          מחיקה
        </Button>
      </div>

      {isExpanded && (
        <div className="border-t p-3 space-y-3">
          {/* Quick add YouTube */}
          <QuickAddYouTube onAdd={onQuickAdd} />

          {/* Items list */}
          <div className="space-y-2">
            {group.items.map((item, itemIdx) => {
              const thumb = getVideoThumbnail(item.videoSrc, item.thumbnailUrl);
              const label = item.videoSrc || item.imageSrc || 'פריט';
              return (
                <div key={itemIdx} className="flex items-center gap-2 bg-muted/50 rounded p-2">
                  {thumb ? (
                    <img src={thumb} alt="" className="w-16 h-10 object-cover rounded shrink-0" />
                  ) : (
                    <div className="w-16 h-10 bg-muted rounded shrink-0" />
                  )}
                  <span className="text-xs truncate flex-1 dir-ltr text-left" dir="ltr">{label}</span>
                  <div className="flex gap-1 shrink-0">
                    <button
                      onClick={() => onMoveItem(itemIdx, 'up')}
                      disabled={itemIdx === 0}
                      className="text-xs px-1 disabled:opacity-30"
                      title="הזז למעלה"
                    >
                      ▲
                    </button>
                    <button
                      onClick={() => onMoveItem(itemIdx, 'down')}
                      disabled={itemIdx === group.items.length - 1}
                      className="text-xs px-1 disabled:opacity-30"
                      title="הזז למטה"
                    >
                      ▼
                    </button>
                    <Button variant="ghost" size="sm" onClick={() => onEditItem(itemIdx)} className="text-xs h-7 px-2">
                      עריכה
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => onDeleteItem(itemIdx)} className="text-destructive text-xs h-7 px-2">
                      ✕
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <Button variant="outline" size="sm" onClick={onAddItem}>
            + הוסף פריט
          </Button>
        </div>
      )}
    </div>
  );
}

// Quick YouTube URL add
function QuickAddYouTube({ onAdd }: { onAdd: (url: string) => void }) {
  const [url, setUrl] = useState('');

  return (
    <div className="flex gap-2">
      <Input
        dir="ltr"
        placeholder="הדבק קישור YouTube..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1 text-sm"
      />
      <Button
        size="sm"
        disabled={!url.trim()}
        onClick={() => {
          onAdd(url.trim());
          setUrl('');
        }}
      >
        הוסף
      </Button>
    </div>
  );
}

export default function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [sha, setSha] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deployCommit, setDeployCommit] = useState<string | null>(() => {
    const pending = getPendingDeploy();
    return pending?.commitSha ?? null;
  });
  const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set());
  const [editingItem, setEditingItem] = useState<{ groupIndex: number; itemIndex: number } | null>(null);
  const [addingToGroup, setAddingToGroup] = useState<number | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const { toast } = useToast();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const result = await fetchPortfolioData();
      setData(result.data);
      setSha(result.sha);
    } catch (err) {
      toast({ title: 'שגיאה בטעינת נתונים', variant: 'destructive' });
    }
    setLoading(false);
  };

  const updateData = useCallback((updater: (d: PortfolioData) => PortfolioData) => {
    setData((prev) => {
      if (!prev) return prev;
      const updated = updater(JSON.parse(JSON.stringify(prev)));
      setHasChanges(true);
      return updated;
    });
  }, []);

  const handleSave = async () => {
    if (!data) return;

    setSaving(true);
    try {
      const result = await commitPortfolioData(data, sha);
      savePendingDeploy(result.commitSha);
      setDeployCommit(result.commitSha);
      setHasChanges(false);
      // Re-fetch to get new SHA
      const fresh = await fetchPortfolioData();
      setSha(fresh.sha);
      toast({ title: 'השינויים נשמרו בהצלחה' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'שגיאה לא ידועה';
      toast({ title: 'שגיאה בשמירה', description: message, variant: 'destructive' });
    }
    setSaving(false);
  };

  const handleGroupDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = parseInt(String(active.id).replace('group-', ''));
    const newIndex = parseInt(String(over.id).replace('group-', ''));

    updateData((d) => {
      d.clientGroups = arrayMove(d.clientGroups, oldIndex, newIndex);
      return d;
    });
    // Update expanded groups set
    setExpandedGroups(new Set());
  };

  const toggleGroup = (index: number) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleLogout = () => {
    logout();
    onLogout();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">טוען...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-destructive">שגיאה בטעינת נתונים</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <div className="border-b sticky top-0 bg-background z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold">ניהול תיק עבודות</h1>
          <div className="flex gap-2">
            <Button
              onClick={handleSave}
              disabled={saving || !hasChanges}
              size="sm"
            >
              {saving ? 'שומר...' : 'שמור ופרסם'}
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              יציאה
            </Button>
          </div>
        </div>
      </div>

      {/* Deploy progress */}
      {deployCommit && (
        <div className="max-w-3xl mx-auto px-4 pt-4">
          <DeployProgress
            commitSha={deployCommit}
            onDone={() => { clearPendingDeploy(); setDeployCommit(null); }}
          />
        </div>
      )}

      {/* Groups list */}
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-3">
        {hasChanges && (
          <p className="text-sm text-amber-600 bg-amber-50 rounded p-2">
            יש שינויים שלא נשמרו
          </p>
        )}

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleGroupDragEnd}
        >
          <SortableContext
            items={data.clientGroups.map((_, i) => `group-${i}`)}
            strategy={verticalListSortingStrategy}
          >
            {data.clientGroups.map((group, groupIdx) => (
              <SortableGroupRow
                key={`group-${groupIdx}`}
                group={group}
                index={groupIdx}
                isExpanded={expandedGroups.has(groupIdx)}
                onToggle={() => toggleGroup(groupIdx)}
                onDelete={() => {
                  if (confirm(`למחוק את "${group.name}" וכל הפריטים שלו?`)) {
                    updateData((d) => {
                      d.clientGroups.splice(groupIdx, 1);
                      return d;
                    });
                  }
                }}
                onNameChange={(name) => {
                  updateData((d) => {
                    d.clientGroups[groupIdx].name = name;
                    return d;
                  });
                }}
                onQuickAdd={(url) => {
                  updateData((d) => {
                    d.clientGroups[groupIdx].items.push({ videoSrc: url });
                    return d;
                  });
                }}
                onAddItem={() => setAddingToGroup(groupIdx)}
                onDeleteItem={(itemIdx) => {
                  if (confirm('למחוק פריט זה?')) {
                    updateData((d) => {
                      d.clientGroups[groupIdx].items.splice(itemIdx, 1);
                      return d;
                    });
                  }
                }}
                onEditItem={(itemIdx) => {
                  setEditingItem({ groupIndex: groupIdx, itemIndex: itemIdx });
                }}
                onMoveItem={(itemIdx, direction) => {
                  updateData((d) => {
                    const items = d.clientGroups[groupIdx].items;
                    const newIdx = direction === 'up' ? itemIdx - 1 : itemIdx + 1;
                    if (newIdx < 0 || newIdx >= items.length) return d;
                    [items[itemIdx], items[newIdx]] = [items[newIdx], items[itemIdx]];
                    return d;
                  });
                }}
              />
            ))}
          </SortableContext>
        </DndContext>

        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            updateData((d) => {
              d.clientGroups.push({ name: 'קטגוריה חדשה', category: 'work', items: [] });
              return d;
            });
            setExpandedGroups((prev) => new Set([...prev, data.clientGroups.length - 1]));
          }}
        >
          + הוסף קטגוריה
        </Button>
      </div>

      {/* Item form modal - add */}
      {addingToGroup !== null && (
        <ItemForm
          open
          onClose={() => setAddingToGroup(null)}
          onSave={(item) => {
            updateData((d) => {
              d.clientGroups[addingToGroup].items.push(item);
              return d;
            });
          }}
        />
      )}

      {/* Item form modal - edit */}
      {editingItem && (
        <ItemForm
          open
          onClose={() => setEditingItem(null)}
          initial={data.clientGroups[editingItem.groupIndex].items[editingItem.itemIndex]}
          onSave={(item) => {
            updateData((d) => {
              d.clientGroups[editingItem.groupIndex].items[editingItem.itemIndex] = item;
              return d;
            });
          }}
        />
      )}
    </div>
  );
}
