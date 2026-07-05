import { useRef } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: "1",
    name: "Marcus Giddens",
    rating: 5,
    text: "Great haircut, detailed cut. Best in Marrakech. Ask for Ayoub!"
  },
  {
    id: "2",
    name: "Said Bensghir",
    rating: 5,
    text: "J'ai beaucoup aimé la coupe de cheveux, un salon de coiffure propre, professionnel, personnel très agréable, à recommander vivement."
  },
  {
    id: "3",
    name: "Baba Smith",
    rating: 5,
    text: "Le Staff est super agréable, et le service est magnifique."
  },
  {
    id: "4",
    name: "Mounira Amakran",
    rating: 5,
    text: "De loin le meilleur Barber de Marrakech. Equipe au top ! Tres accueillant ! Coiffeur Mehdi le meilleur !"
  },
  {
    id: "5",
    name: "Banoua Abdou",
    rating: 5,
    text: "Une expérience au top. Du professionnalisme à la propreté, tout était parfait Merci à Youssef pour sa coupe impeccable et son sens du détail, et à Hajar pour son accueil chaleureux et son beau sourire ❤️ Un endroit que je recommande vivement."
  },
  {
    id: "6",
    name: "Again ask for YOUSSEF",
    rating: 5,
    text: "I loved my haircut with Youssef such a kind and funny guy totally made me at ease while I usually stress to try new barbers especially in new countries! I told him to do what he thought would be best for my hair and I loved the result! It's more expensive than the country where I live but 120 dh doesn't break my bank"
  }
];

export default function Reviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter">
            Ils Valident.
          </h2>
          <div className="flex gap-4 self-start md:self-auto">
            <button 
              onClick={() => scroll('left')}
              className="p-3 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-colors rounded-full"
              aria-label="Avis précédent"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-colors rounded-full"
              aria-label="Avis suivant"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar items-stretch"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-[280px] md:w-[350px] h-[250px] bg-black p-6 border border-gray-800 snap-center flex-shrink-0 flex flex-col justify-between"
            >
              <div className="flex text-red-600 mb-3 flex-shrink-0">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className="overflow-y-auto hide-scrollbar flex-grow mb-4">
                <p className="text-sm font-sans text-gray-300 italic">"{review.text}"</p>
              </div>
              <p className="font-display font-bold uppercase tracking-wider text-sm flex-shrink-0">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
