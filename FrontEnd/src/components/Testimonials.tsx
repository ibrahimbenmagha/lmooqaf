
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Propriétaire',
      content: 'J\'ai trouvé un excellent menuisier grâce à LMOOQAF. Le travail était impeccable et dans les temps.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9d39387?auto=format&fit=crop&w=150&h=150'
    },
    {
      name: 'Jean Martin',
      role: 'Entrepreneur',
      content: 'Service rapide et professionnel. Les artisans sur cette plateforme sont vraiment qualifiés.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150'
    },
    {
      name: 'Sophie Laurent',
      role: 'Particulier',
      content: 'Interface simple et artisans de confiance. Je recommande vivement cette plateforme.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600">
            Des milliers de clients satisfaits nous font confiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <Quote className="h-8 w-8 text-orange-500 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
