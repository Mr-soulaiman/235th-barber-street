import { motion } from 'motion/react';

export default function Story() {
  return (
    <section className="py-24 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                src="/APREL 235.PNG" 
                alt="Barber working" 
                className="w-full h-[300px] md:h-[400px] object-cover grayscale"
                loading="lazy"
              />
              <motion.img 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src="/235.PNG" 
                alt="Barber shop details" 
                className="w-full h-[300px] md:h-[400px] object-cover grayscale mt-12 md:mt-24"
                loading="lazy"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-red-600 -z-10 hidden md:block"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 leading-tight">
              Notre <span className="text-red-600">Histoire</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-sans">
              <p>
                Né en France il y a plus de 15 ans et inspiré par les barbiers iconiques de New York et de Londres, 235TH Barber Street a redéfini l'expérience masculine.
              </p>
              <p>
                Après avoir coiffé des personnalités du monde artistique, sportif et musical, notre salon est aujourd'hui une adresse intimiste et exclusive à Marrakech.
              </p>
              <p>
                Notre ambition : allier expertise, créativité et sens du détail pour faire de chaque coupe une véritable signature, où luxe et authenticité se rencontrent.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
