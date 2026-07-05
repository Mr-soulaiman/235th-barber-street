import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stars = [
  "star 1.PNG",
  "STAR 2.PNG",
  "star 3.PNG",
  "star 4.PNG",
  "star 5.PNG",
  "star 6.PNG",
  "star 7.PNG",
  "star 8.PNG",
  "star 9.PNG",
  "star 10.PNG",
  "star 11.PNG",
  "star 12.PNG",
  "star 13.PNG",
  "star 14.PNG",
  "star 15.PNG"
];

export default function Trust() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 bg-zinc-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter">
            Ils nous ont fait confiance...
          </h2>
          <div className="flex gap-4 self-start md:self-auto">
            <button 
              onClick={() => scroll('left')}
              className="p-3 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-colors rounded-full"
              aria-label="Précédent"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-colors rounded-full"
              aria-label="Suivant"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar items-center"
        >
          {stars.map((star, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="min-w-[250px] md:min-w-[300px] h-[300px] snap-center flex-shrink-0 flex flex-col justify-center overflow-hidden border border-gray-800"
            >
               <img 
                 src={`/${star}`} 
                 alt={`Célébrité ${index + 1}`} 
                 className="w-full h-full object-cover transition-all duration-500"
                 loading="lazy"
               />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
