import { type PortfolioItem } from "@/data/portfolioItems";
import PortfolioCard from "./PortfolioCard";

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const PortfolioGrid = ({ items }: PortfolioGridProps) => {
  return (
    <div className="overflow-x-auto scrollbar-hide pb-4">
      <div className="flex gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex-none w-80">
            <PortfolioCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;