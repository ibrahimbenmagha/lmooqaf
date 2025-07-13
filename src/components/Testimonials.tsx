
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Marie L.",
    service: "Plomberie",
    rating: 5,
    comment: "Service rapide et efficace ! Mon problème de fuite a été résolu en moins de 2h. Je recommande vivement cette plateforme.",
    avatar: "ML"
  },
  {
    name: "Pierre D.",
    service: "Menuiserie",
    rating: 5,
    comment: "Excellent travail sur ma cuisine sur mesure. L'artisan était professionnel et le résultat dépasse mes attentes.",
    avatar: "PD"
  },
  {
    name: "Sophie M.",
    service: "Ménage",
    rating: 5,
    comment: "Service de ménage impeccable ! Ponctuel, soigneux et tarif très correct. Je vais renouveler régulièrement.",
    avatar: "SM"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600">
            Des milliers de clients satisfaits nous font confiance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.service}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
