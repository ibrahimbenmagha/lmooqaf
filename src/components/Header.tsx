
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, User, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">LMOOQAF</div>
            <nav className="hidden md:flex ml-8 space-x-6">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#comment" className="text-gray-700 hover:text-blue-600 transition-colors">Comment ça marche</a>
              <a href="#avis" className="text-gray-700 hover:text-blue-600 transition-colors">Avis clients</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex">
              Devenir prestataire
            </Button>
            <Button variant="outline">
              <User className="h-4 w-4 mr-2" />
              Connexion
            </Button>
            <Button className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
