
import { Users, Target, Award, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Faciliter la rencontre entre clients et artisans qualifiés pour des projets réussis.'
    },
    {
      icon: Users,
      title: 'Notre Communauté',
      description: 'Plus de 500 artisans certifiés et des milliers de clients satisfaits.'
    },
    {
      icon: Award,
      title: 'Notre Engagement',
      description: 'Garantir la qualité et la fiabilité de tous nos services.'
    },
    {
      icon: Heart,
      title: 'Notre Passion',
      description: 'Valoriser le savoir-faire artisanal et les métiers manuels.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              À propos de <span className="text-orange-500">LMOOQAF</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Nous connectons les talents artisanaux avec ceux qui en ont besoin, 
              créant une communauté de confiance et d'excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  LMOOQAF est née d'un constat simple : il est souvent difficile de trouver 
                  des artisans qualifiés et de confiance pour nos projets personnels ou professionnels.
                </p>
                <p>
                  Notre plateforme a été créée pour valoriser les métiers manuels et faciliter 
                  la mise en relation entre clients et professionnels. Nous croyons en la beauté 
                  du travail artisanal et en l'importance de préserver ces savoir-faire.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers de compter plus de 500 artisans actifs et 
                  d'avoir facilité la réalisation de plus de 1200 projets.
                </p>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&h=600"
                alt="Équipe LMOOQAF"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Ce qui nous guide dans notre mission quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center p-6 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des passionnés au service de votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Pierre Durand',
                role: 'Fondateur & CEO',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300'
              },
              {
                name: 'Marie Lambert',
                role: 'Directrice des Opérations',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b9d39387?auto=format&fit=crop&w=300&h=300'
              },
              {
                name: 'Thomas Moreau',
                role: 'Responsable Communauté',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300'
              }
            ].map((member, index) => (
              <div
                key={member.name}
                className={`text-center animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
