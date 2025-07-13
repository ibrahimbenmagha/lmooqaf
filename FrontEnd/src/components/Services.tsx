
import { Hammer, Wrench, Brush, Zap, Droplets, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: 'Menuiserie',
      description: 'Fabrication sur mesure, réparation et installation de meubles et structures en bois.',
      projects: '150+ projets'
    },
    {
      icon: Wrench,
      title: 'Plomberie',
      description: 'Installation, réparation et maintenance de systèmes de plomberie et sanitaires.',
      projects: '200+ interventions'
    },
    {
      icon: Brush,
      title: 'Peinture',
      description: 'Travaux de peinture intérieure et extérieure, décoration et finitions.',
      projects: '180+ réalisations'
    },
    {
      icon: Zap,
      title: 'Électricité',
      description: 'Installation électrique, dépannage et mise aux normes de votre installation.',
      projects: '120+ installations'
    },
    {
      icon: Home,
      title: 'Ménage',
      description: 'Services de nettoyage professionnel pour particuliers et entreprises.',
      projects: '300+ clients'
    },
    {
      icon: Droplets,
      title: 'Jardinage',
      description: 'Entretien d\'espaces verts, aménagement paysager et jardinage.',
      projects: '90+ jardins'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez la diversité des métiers manuels disponibles sur notre plateforme. 
            Des artisans qualifiés pour tous vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-600 font-medium">{service.projects}</span>
                  <button className="text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline">
                    Voir les artisans →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold hover:scale-105 transform duration-200">
            Voir tous les services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
