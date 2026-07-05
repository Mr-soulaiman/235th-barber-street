import { Instagram } from 'lucide-react';

// Icône TikTok personnalisée
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display font-bold text-2xl tracking-tighter uppercase">
          235<span className="text-red-600">TH</span> Barber
        </div>
        <div className="text-gray-500 text-sm font-sans">
          &copy; {new Date().getFullYear()} 235TH Barber Street. Tous droits réservés.
        </div>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/235th_barber_street_marrakech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="https://www.tiktok.com/@235th.barber.street?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
            <TikTokIcon size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
