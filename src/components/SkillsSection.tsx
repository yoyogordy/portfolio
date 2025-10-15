import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Skill {
  title: string;
  items: string[];
}

export const copywritingSkills: Skill[] = [
  {
    title: "Core Creative Skills",
    items: [
      "Creative Strategy",
      "Digital Copywriting",
      "Comedic Writing",
      "Strategic Storytelling",
      "Brand Voice Development",
      "Concept Creation"
    ]
  },
  {
    title: "Digital & Social Media",
    items: [
      "Social Media Marketing",
      "Social Media Content Creation",
      "Digital Campaigns",
      "Content Strategy",
      "Brand Narratives"
    ]
  },
  {
    title: "Design & Multimedia Tools",
    items: [
      "Adobe Creative Suite",
      "Adobe Premiere Pro",
      "AI Design Tools (Midjourney, Krea, Runway)",
      "AI Music Generation (Suno, Kits)",
      "Video Editing",
      "Music Production (Ableton Live)"
    ]
  },
  {
    title: "Leadership & Professional Skills",
    items: [
      "Team Leadership",
      "Problem Solving",
      "Multitasking",
      "Public Speaking",
      "Project Management",
      "Creative Direction"
    ]
  },
  {
    title: "Languages",
    items: [
      "Hebrew (Native)",
      "English (Native)"
    ]
  }
];

const SkillsSection = () => {
  return (
    <div className="container-custom py-8" dir="ltr">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {copywritingSkills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-heading">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <Badge 
                      key={itemIndex} 
                      variant="secondary" 
                      className="text-sm px-3 py-1"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

