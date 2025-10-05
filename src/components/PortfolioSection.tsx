
import { useState } from 'react';
import { portfolioItems } from "@/data/portfolioItems";
import PortfolioFilters from "./portfolio/PortfolioFilters";
import PortfolioGrid from "./portfolio/PortfolioGrid";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 bg-slate-50/50">
      <div className="container-custom">
        <div className="animate-fade-in">
          <h2 className="section-heading text-center">My Portfolio</h2>
          <p className="section-subheading text-center mx-auto max-w-2xl mb-10">
            Below is a selection of my most successful copywriting projects across television, digital platforms, and music productions.
          </p>

          <PortfolioFilters 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="mt-0">
            <PortfolioGrid items={filteredItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
