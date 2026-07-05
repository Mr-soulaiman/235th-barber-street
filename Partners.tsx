import { motion } from 'motion/react';

const partners = [
  {
    name: "L'Oréal Professionnel",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl md:text-3xl font-sans font-black tracking-widest uppercase text-black leading-none mb-1">
          L'ORÉAL
        </span>
        <span className="text-[0.55rem] md:text-[0.65rem] font-sans tracking-[0.3em] text-black uppercase font-medium">
          Professionnel Paris
        </span>
      </div>
    )
  },
  {
    name: "Natus Marrakech",
    logo: (
      <div className="flex flex-col items-center justify-center mt-1">
        <span className="text-2xl md:text-3xl font-serif tracking-[0.25em] uppercase text-black leading-none mb-2">
          Natus
        </span>
        <span className="text-[0.5rem] md:text-[0.6rem] font-sans tracking-[0.4em] text-black uppercase font-light">
          Marrakech
        </span>
      </div>
    )
  },
  {
    name: "American Crew",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl md:text-3xl font-display font-bold tracking-tighter uppercase text-black leading-none mb-1">
          AMERICAN CREW
        </span>
        <span className="text-[0.45rem] md:text-[0.55rem] font-sans tracking-[0.2em] text-black uppercase font-bold">
          Official Supplier to Men
        </span>
      </div>
    )
  }
];

export default function Partners() {
  return (
    <section className="py-16 bg-white text-black border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-center mb-12">
          Nos Partenaires Officiels
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 lg:gap-32">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 w-full md:w-auto"
              title={partner.name}
            >
              {partner.logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
