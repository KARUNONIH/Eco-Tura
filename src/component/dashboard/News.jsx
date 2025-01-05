import React, { useState, useEffect } from 'react';

const News = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const newsItems = [
    { id: 1, label: "Breaking News", content: "News 1" },
    { id: 2, label: "Breaking News", content: "News 2" },
    { id: 3, label: "Breaking News", content: "News 3" },
    { id: 4, label: "Breaking News", content: "News 4" },
    { id: 5, label: "Breaking News", content: "News 5" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === newsItems.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-max">
      {newsItems.map((item, index) => (
        <section 
          key={item.id}
          className={`relative aspect-video h-36 bg-white/80 transition-opacity duration-500 shadow-md shadow-gray-800 ${
            index === activeIndex ? 'block' : 'hidden'
          }`}
        >
          <div className="absolute -top-2 w-max bg-blue-700 px-1 text-xs text-white">
            {item.label}
          </div>
          <div className="p-4 text-sm">
            {item.content}
          </div>
        </section>
      ))}

      <section className="mt-2 flex w-full gap-2">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 flex-1 transition-colors duration-300 ${
              index === activeIndex ? 'bg-blue-600' : 'bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </section>
    </div>
  );
};

export default News;