import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter uppercase mb-4 leading-none"
        >
          235<span className="text-red-600">TH</span> Barber<br/>
          Street<br/>
          <span className="text-3xl md:text-5xl lg:text-6xl text-gray-400">Marrakech</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-xl md:text-2xl text-red-600 font-display font-bold uppercase tracking-widest mb-6"
        >
          Plus qu'un salon, une signature
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-gray-300 font-sans max-w-2xl mb-10"
        >
          Bienvenue chez votre barbier préféré ! Plongez dans un monde où chaque coupe est une aventure et votre style n'attend que d'être découvert. Laissez-nous transformer votre allure avec enthousiasme et savoir-faire.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center bg-red-600 text-white font-display font-bold uppercase tracking-wider px-8 py-4 text-lg md:text-xl hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto cursor-pointer"
          >
            Réserver maintenant
          </motion.button>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            href="https://maps.app.goo.gl/WnUJ4V2nuWq61Cy88"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-display font-bold uppercase tracking-wider px-8 py-4 text-lg md:text-xl hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto cursor-pointer"
          >
            <MapPin size={24} />
            Localisation
          </motion.a>
        </div>
      </div>
    </section>
  );
}
