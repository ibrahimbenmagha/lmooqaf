
import { Wrench, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">LMOOQAF</span>
            </div>
            <p className="text-gray-300">
              La plateforme qui connecte les clients aux meilleurs artisans pour tous vos projets de métiers manuels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Menuiserie</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Plomberie</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Électricité</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Peinture</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Jardinage</a></li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens utiles</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">À propos</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Comment ça marche</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Devenir artisan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Conditions d'utilisation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">contact@lmooqaf.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LMOOQAF. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
