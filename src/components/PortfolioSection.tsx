
import { useState } from "react";
import { getItemsByClientInCategory, categoryLabels, type PortfolioItem } from "@/data/portfolioItems";
import PortfolioGrid from "./portfolio/PortfolioGrid";
import SkillsSection from "./SkillsSection";
import PortfolioCard from "./portfolio/PortfolioCard";

const PortfolioSection = () => {
  const categories: PortfolioItem['category'][] = ['work', 'english'];
  const [activeCategory, setActiveCategory] = useState<PortfolioItem['category']>('work');
  
  const scrollToCategory = (category: PortfolioItem['category']) => {
    setActiveCategory(category);
    const element = document.getElementById(`category-${category}`);
    if (element) {
      const offset = 80; // Offset for sticky category nav
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="portfolio" className="pb-8 md:pb-12 bg-[#F5EFE7]">
      <div className="w-full">
        {/* Category Navigation */}
        <div className="sticky top-0 z-40 bg-[#E8DCC4]/95 backdrop-blur-sm border-b border-[#D4C4A8] mb-4">
          <div className="container-custom py-4">
            <nav className="flex gap-4 md:gap-8 justify-center flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToCategory(category)}
                  className={`text-lg md:text-xl font-heading font-bold transition-all hover:text-[#6B4423] ${
                    activeCategory === category ? 'text-[#6B4423]' : 'text-[#8B6F47]'
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Category Sections */}
        <div className="animate-fade-in space-y-8">
          {categories.map((category) => {
            const itemsByClient = getItemsByClientInCategory(category);
            
            return (
              <div key={category} id={`category-${category}`} className="space-y-6">
                <div className="container-custom">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
                    {categoryLabels[category]}
                  </h2>
                </div>
                
                {/* Show Skills Section for English category */}
                {category === 'english' && <SkillsSection />}
                
                {Object.entries(itemsByClient).map(([client, items]) => (
                  <div key={client} className="space-y-4">
                    <div className="container-custom">
                      <h3 className="text-2xl md:text-3xl font-heading font-bold">{client}</h3>
                      {items.map((item) => {
                        if (item.showText) {
                          return (
                            <div key={item.id} className="mt-4 mb-6 max-w-md ml-auto">
                              <PortfolioCard 
                                item={{
                                  ...item,
                                  videoSrc: "https://www.youtube.com/shorts/ce6hXWFzmC8",
                                  thumbnailUrl: "https://i.ytimg.com/vi/ce6hXWFzmC8/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYfyBCKCowDw==&rs=AOn4CLA8n032xn8PIMDSwR2TAZu9jE6-sQ",
                                  description: "ההשראה: פרסומות temu שהיו\n הדבר הכי ויראלי באותה תקופה."
                                }} 
                              />
                            </div>
                          );
                        }
                        return null;
                      })}
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
