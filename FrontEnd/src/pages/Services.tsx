
import { Search, Filter, Star, MapPin, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const categories = [
    'Tous les services',
    'Menuiserie',
    'Plomberie',
    'Électricité',
    'Peinture',
    'Jardinage',
    'Ménage'
  ];

  const professionals = [
    {
      name: 'Marc Dubois',
      profession: 'Menuisier',
      rating: 4.9,
      reviews: 47,
      location: 'Paris 15e',
      price: '45€/h',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200',
      specialties: ['Meubles sur mesure', 'Rénovation', 'Parquet'],
      availability: 'Disponible cette semaine'
    },
    {
      name: 'Sophie Martin',
      profession: 'Plombier',
      rating: 4.8,
      reviews: 32,
      location: 'Lyon 3e',
      price: '50€/h',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9d39387?auto=format&fit=crop&w=200&h=200',
      specialties: ['Dépannage urgent', 'Installation', 'Rénovation salle de bain'],
      availability: 'Disponible aujourd\'hui'
    },
    {
      name: 'Jean-Pierre Laurent',
      profession: 'Électricien',
      rating: 4.7,
      reviews: 58,
      location: 'Marseille 8e',
      price: '48€/h',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200',
      specialties: ['Installation électrique', 'Domotique', 'Mise aux normes'],
      availability: 'Disponible demain'
    },
    {
      name: 'Claire Rousseau',
      profession: 'Peintre',
      rating: 4.9,
      reviews: 28,
      location: 'Toulouse 1er',
      price: '35€/h',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200',
      specialties: ['Décoration intérieure', 'Peinture extérieure', 'Enduits'],
      availability: 'Disponible cette semaine'
    },
    {
      name: 'Paul Leroy',
      profession: 'Jardinier',
      rating: 4.6,
      reviews: 41,
      location: 'Nice 6e',
      price: '30€/h',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200',
      specialties: ['Entretien jardin', 'Élagage', 'Aménagement paysager'],
      availability: 'Disponible cette semaine'
    },
    {
      name: 'Amélie Petit',
      profession: 'Femme de ménage',
      rating: 4.8,
      reviews: 73,
      location: 'Bordeaux 1er',
      price: '25€/h',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200',
      specialties: ['Ménage régulier', 'Grand nettoyage', 'Repassage'],
      availability: 'Disponible aujourd\'hui'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Trouvez le bon artisan
            </h1>
            <p className="text-xl text-gray-600">
              Plus de 500 professionnels qualifiés à votre service
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Que recherchez-vous ?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Où ?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                Rechercher
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  index === 0
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {professionals.length} artisans trouvés
            </h2>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
              <Filter className="h-5 w-5" />
              <span>Filtrer</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((pro, index) => (
              <div
                key={pro.name}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={pro.image}
                      alt={pro.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{pro.name}</h3>
                      <p className="text-orange-600 font-medium">{pro.profession}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {pro.rating} ({pro.reviews} avis)
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-900">{pro.price}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {pro.location}
                    </div>
                    <div className="flex items-center text-sm text-green-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {pro.availability}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {pro.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                      Contacter
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-colors">
                      Profil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-orange-500 border-2 border-orange-500 px-8 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors font-medium">
              Voir plus d'artisans
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
