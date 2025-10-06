
import { useState } from "react";
import { getItemsByClientInCategory, categoryLabels, type PortfolioItem } from "@/data/portfolioItems";
import PortfolioGrid from "./portfolio/PortfolioGrid";

const PortfolioSection = () => {
  const categories: PortfolioItem['category'][] = ['work', 'music-creative', 'english'];
  const [activeCategory, setActiveCategory] = useState<PortfolioItem['category']>('work');
  
  const scrollToCategory = (category: PortfolioItem['category']) => {
    setActiveCategory(category);
    const element = document.getElementById(`category-${category}`);
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="portfolio" className="py-16 bg-slate-50/50">
      <div className="w-full">
        {/* Category Navigation */}
        <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 mb-8">
          <div className="container-custom py-4">
            <nav className="flex gap-4 md:gap-8 justify-center flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToCategory(category)}
                  className={`text-lg md:text-xl font-heading font-bold transition-all hover:text-primary ${
                    activeCategory === category ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-600'
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Category Sections */}
        <div className="animate-fade-in space-y-16">
          {categories.map((category) => {
            const itemsByClient = getItemsByClientInCategory(category);
            
            return (
              <div key={category} id={`category-${category}`} className="space-y-8">
                <div className="container-custom">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8">
                    {categoryLabels[category]}
                  </h2>
                </div>
                
                {Object.entries(itemsByClient).map(([client, items]) => (
                  <div key={client} className="space-y-4">
                    <div className="container-custom">
                      <h3 className="text-2xl md:text-3xl font-heading font-bold">{client}</h3>
                    </div>
                    <div className="container-custom">
                      <PortfolioGrid items={items} />
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
