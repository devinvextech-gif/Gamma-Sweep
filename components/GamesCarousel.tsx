
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const games = [
  { name: 'Video Slots', img: 'https://picsum.photos/seed/slots/400/300' },
  { name: 'Jackpots', img: 'https://picsum.photos/seed/jackpot/400/300' },
  { name: 'Table Games', img: 'https://picsum.photos/seed/table/400/300' },
  { name: 'Live Dealers', img: 'https://picsum.photos/seed/live/400/300' },
  { name: 'Instant Win', img: 'https://picsum.photos/seed/win/400/300' },
  { name: 'Virtual Sports', img: 'https://picsum.photos/seed/sports/400/300' },
];

const providers = [
  'Pragmatic Play', 'NetEnt', 'Evolution', 'Hacksaw Gaming', 'Play’n GO', 'Push Gaming'
];

const GamesCarousel: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gamma-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-gamma-aquamarine font-bold tracking-widest uppercase text-sm mb-4">Infinite Content</h2>
            <p className="text-3xl lg:text-4xl font-bold">Games & Providers</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-12 scroll-smooth"
        >
          {games.map((game, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-72 h-96 relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={game.img} 
                alt={game.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gamma-dark/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-bold">{game.name}</h4>
                <p className="text-sm text-gray-400 mt-1">200+ Titles Available</p>
              </div>
            </div>
          ))}
        </div>

        {/* Providers Ticker */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-[0.2em]">Trusted by Global Content Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 hover:opacity-100 transition-opacity">
            {providers.map((p, i) => (
              <span key={i} className="text-xl font-black italic tracking-tighter whitespace-nowrap">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesCarousel;
