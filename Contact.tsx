import { MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const whatsappNumber = "212772227361"; // Remplace par ton numéro
  const message = encodeURIComponent("Bonjour, j'aimerais avoir quelques infos.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
              Nous<br/>Trouver
            </h2>
            
            <div className="space-y-8 font-sans text-lg text-gray-600 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-red-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-black font-display uppercase tracking-wider">Adresse</p>
                  <p>Marrakech, Maroc</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-red-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-black font-display uppercase tracking-wider mb-2">Horaires</p>
                  <div className="space-y-1">
                    <p className="flex justify-between gap-4"><span>Samedi - Jeudi</span> <span>11:00 – 23:00</span></p>
                    <p className="flex justify-between gap-4"><span>Vendredi</span> <span>11:00 – 13:00<br/>14:30 – 23:00</span></p>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-black text-white font-display font-bold uppercase tracking-wider px-6 py-4 text-sm md:text-base hover:bg-red-600 transition-colors duration-300 w-full sm:w-auto"
            >
              <MessageCircle size={24} />
              Discuter avec l'équipe sur WhatsApp
            </a>
          </motion.div>

          <motion.a 
            href="https://maps.app.goo.gl/WnUJ4V2nuWq61Cy88"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-gray-200 h-[400px] lg:h-auto flex items-center justify-center relative overflow-hidden block cursor-pointer"
          >
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop")' }}
             ></div>
             <div className="relative z-10 text-center p-6 bg-white shadow-xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
               <p className="font-display font-bold uppercase tracking-widest text-sm mb-2">Google Maps</p>
               <p className="font-sans text-gray-600 group-hover:text-gray-300 text-sm transition-colors duration-300">Voir l'itinéraire</p>
             </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
