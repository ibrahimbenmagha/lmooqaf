
import { ArrowRight, Users, CheckCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-orange-50 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Connectez-vous aux
                <span className="text-orange-500"> meilleurs artisans</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6">
                LMOOQAF facilite la rencontre entre clients et professionnels qualifiés 
                dans les métiers manuels. Trouvez le bon artisan pour vos projets.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center hover:scale-105 transform duration-200">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-colors font-semibold">
                Devenir artisan
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-orange-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-gray-600">Artisans actifs</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">1200+</span>
                </div>
                <p className="text-gray-600">Projets réalisés</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">4.8/5</span>
                </div>
                <p className="text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092335878-0d0558e79982?auto=format&fit=crop&w=800&h=600"
                alt="Artisan au travail"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Qualité garantie</p>
                    <p className="text-sm text-gray-600">Artisans certifiés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
