import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Service } from '../types';
import { X } from 'lucide-react';

const services: Service[] = [
  {
    id: "la-barbe",
    name: "Barbe",
    price: "30-100 MAD",
    description: "Contour, Rasage à l'ancienne, Rasage vapeur, Soin, Moustache/Bouc, Taille entretien, Taille sculpter."
  },
  {
    id: "la-coiffure",
    name: "Coiffure",
    price: "50-180 MAD",
    description: "Brushing (court/long/mi-long), Coiffage, Contours, Coupes (simple/sculpter/enfant), Rasage crâne."
  },
  {
    id: "soins-cheveux",
    name: "Soins Cheveux",
    price: "30-1000 MAD",
    description: "Shampoing (nutrifier/silver), Soin du cheveux, Lissage protéine."
  },
  {
    id: "soins-visage",
    name: "Soin Visage",
    price: "100-350 MAD",
    description: "Black mask, Relaxation visage, Soin complet."
  }
];

export default function Services() {
  const whatsappNumber = "212772227361";
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingName, setBookingName] = useState('');

  const handleBookClick = (e: React.MouseEvent, service: Service) => {
    e.preventDefault();
    setSelectedService(service);
    setBookingDate('');
    setBookingName('');
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !bookingDate || !bookingName) return;
    
    const message = encodeURIComponent(`Bonjour, je souhaite réserver un RDV.\n\nService : ${selectedService.name}\nDate/Jour : ${bookingDate}\nNom : ${bookingName}`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappLink, '_blank');
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-4">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Services</span>
            </h2>
            <p className="text-gray-400 font-sans text-lg max-w-md">
              Des prestations sur-mesure pour un style impeccable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isSelected = selectedService?.id === service.id;
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border border-gray-800 p-6 md:p-8 hover:border-red-600 transition-colors duration-300 relative overflow-hidden bg-zinc-950 flex flex-col h-full"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-red-600 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out -z-10"></div>
                
                <div className="flex justify-between items-start mb-6 z-10 relative">
                  <div>
                    <h3 className="text-2xl font-display font-bold uppercase transition-colors">{service.name}</h3>
                    {service.duration && <p className="text-sm font-sans text-gray-300 transition-colors mt-1">{service.duration}</p>}
                  </div>
                  {service.price && <span className="text-2xl font-display font-bold transition-colors">{service.price}</span>}
                </div>
                
                <p className="text-gray-300 font-sans mb-8 transition-colors z-10 relative flex-grow">
                  {service.description}
                </p>

                <AnimatePresence mode="wait">
                  {!isSelected ? (
                    <motion.button 
                      key="book-btn"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      onClick={(e) => handleBookClick(e, service)}
                      className="inline-flex self-start items-center font-display font-bold uppercase tracking-wider text-sm border-b border-white pb-1 transition-colors z-10 relative cursor-pointer"
                    >
                      Réserver ce service
                    </motion.button>
                  ) : (
                    <motion.div
                      key="book-form"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="z-10 relative mt-4 overflow-hidden"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-xl font-display font-bold uppercase">Complétez</h4>
                        <button 
                          onClick={() => setSelectedService(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      
                      <form onSubmit={handleConfirmBooking} className="space-y-4">
                        <div>
                          <label htmlFor={`name-${service.id}`} className="block font-sans text-sm text-gray-300 mb-1">Votre Nom</label>
                          <input 
                            type={`text`} 
                            id={`name-${service.id}`}
                            required
                            value={bookingName}
                            onChange={(e) => setBookingName(e.target.value)}
                            className="w-full bg-black/50 border border-gray-700 px-3 py-2 font-sans text-white focus:outline-none focus:border-white transition-colors text-sm"
                            placeholder="Ex: Youssef..."
                          />
                        </div>
                        
                        <div>
                          <label htmlFor={`date-${service.id}`} className="block font-sans text-sm text-gray-300 mb-1">Date ou Jour souhaité</label>
                          <input 
                            type="text" 
                            id={`date-${service.id}`}
                            required
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            className="w-full bg-black/50 border border-gray-700 px-3 py-2 font-sans text-white focus:outline-none focus:border-white transition-colors text-sm"
                            placeholder="Ex: Samedi matin, le 15..."
                          />
                        </div>
                        
                        <button 
                          type="submit"
                          className="w-full bg-white text-black font-display font-bold uppercase tracking-wider py-3 text-sm hover:bg-gray-200 transition-colors duration-300 mt-2"
                        >
                          Envoyer sur WhatsApp
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
