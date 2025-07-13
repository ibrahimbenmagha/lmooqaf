
import React from 'react';
import { Wrench, Home, Lock, Hammer, Paintbrush, Zap, Car, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Wrench,
    title: "Plomberie",
    description: "Réparations, installations, dépannages urgents",
    color: "text-blue-600"
  },
  {
    icon: Home,
    title: "Ménage",
    description: "Nettoyage domicile, bureaux, fin de chantier",
    color: "text-green-600"
  },
  {
    icon: Lock,
    title: "Serrurerie",
    description: "Ouverture de porte, changement de serrures",
    color: "text-red-600"
  },
  {
    icon: Hammer,
    title: "Menuiserie",
    description: "Meubles sur mesure, réparations, installations",
    color: "text-amber-600"
  },
  {
    icon: Paintbrush,
    title: "Peinture",
    description: "Peinture intérieure et extérieure, décoration",
    color: "text-purple-600"
  },
  {
    icon: Zap,
    title: "Électricité",
    description: "Installation électrique, dépannage, mise aux normes",
    color: "text-yellow-600"
  },
  {
    icon: Car,
    title: "Déménagement",
    description: "Transport, emballage, montage/démontage",
    color: "text-indigo-600"
  },
  {
    icon: Leaf,
    title: "Jardinage",
    description: "Entretien espaces verts, taille, plantation",
    color: "text-emerald-600"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une large gamme de services professionnels à votre disposition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-blue-200">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
