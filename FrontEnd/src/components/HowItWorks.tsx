
import React from 'react';
import { Search, UserCheck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "1. Décrivez votre besoin",
    description: "Publiez votre demande en détaillant vos besoins et votre budget"
  },
  {
    icon: UserCheck,
    title: "2. Recevez des devis",
    description: "Les artisans qualifiés vous contactent avec leurs propositions"
  },
  {
    icon: CheckCircle,
    title: "3. Choisissez et réalisez",
    description: "Sélectionnez le meilleur professionnel et suivez l'avancement"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600">
            Simple, rapide et efficace en 3 étapes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white mb-6 relative z-10">
                <step.icon className="h-10 w-10" />
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-blue-200 transform translate-x-1/2 z-0"></div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
