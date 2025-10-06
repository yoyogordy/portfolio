
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PortfolioFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const PortfolioFilters = ({ selectedCategory, onCategoryChange }: PortfolioFiltersProps) => {
  return (
    <Tabs defaultValue={selectedCategory} className="mb-10">
      <div className="flex justify-center mb-8">
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger 
            value="all" 
            onClick={() => onCategoryChange("all")}
          >
            [All]
          </TabsTrigger>
          <TabsTrigger 
            value="tv" 
            onClick={() => onCategoryChange("tv")}
          >
            [TV]
          </TabsTrigger>
          <TabsTrigger 
            value="digital" 
            onClick={() => onCategoryChange("digital")}
          >
            [Digital]
          </TabsTrigger>
          <TabsTrigger 
            value="music" 
            onClick={() => onCategoryChange("music")}
          >
            [Music]
          </TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  );
};

export default PortfolioFilters;
