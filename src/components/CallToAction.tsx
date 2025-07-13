
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Star } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à trouver le bon artisan ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez les milliers de clients satisfaits qui font confiance à LMOOQAF
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 h-14 px-8">
              Publier un projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 h-14 px-8">
              Devenir prestataire
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Projets réalisés</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">Artisans qualifiés</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-blue-100">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
