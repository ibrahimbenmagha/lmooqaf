
import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Trouvez le bon artisan pour 
            <span className="text-blue-600 block">chaque besoin</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            LMOOQAF connecte particuliers et professionnels qualifiés : menuisiers, plombiers, serruriers, femmes de ménage et bien plus encore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Quel service recherchez-vous ?" 
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
              Rechercher
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>Populaire :</span>
            <button className="text-blue-600 hover:underline">Plomberie</button>
            <button className="text-blue-600 hover:underline">Ménage</button>
            <button className="text-blue-600 hover:underline">Serrurerie</button>
            <button className="text-blue-600 hover:underline">Menuiserie</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
