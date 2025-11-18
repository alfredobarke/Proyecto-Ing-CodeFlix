import React, { useState } from 'react';

// Importamos los datos y los componentes
import sciFiMovies from './data/sciFiMovies';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import DetailPage from './pages/DetailPage';
import ContactPage from './pages/ContactPage';

// --- (4) COMPONENTE PRINCIPAL (APP) ---
// Este componente maneja la navegación y el estado de la página.
export default function App() {
  // Estado para manejar la página actual (nuestro "router" simple)
  const [page, setPage] = useState('home'); // 'home', 'catalog', 'detail', 'contact'
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // Funciones de navegación
  const navigateTo = (targetPage) => {
    setPage(targetPage);
    window.scrollTo(0, 0); // Sube al inicio de la página al navegar
  };

  const viewMovie = (id) => {
    setSelectedMovieId(id);
    setPage('detail');
    window.scrollTo(0, 0);
  };

  // Función para volver al catálogo
  const goToCatalog = () => {
    setSelectedMovieId(null);
    navigateTo('catalog');
  }

  // Encuentra la película seleccionada para la página de detalle
  const selectedMovie = sciFiMovies.find((m) => m.id === selectedMovieId);

  // Renderiza la página correcta según el estado
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage navigateTo={navigateTo} viewMovie={viewMovie} />;
      case 'catalog':
        return <CatalogPage viewMovie={viewMovie} />;
      case 'detail':
        return <DetailPage movie={selectedMovie} goToCatalog={goToCatalog} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} viewMovie={viewMovie} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* El Navbar recibe la función `MapsTo` para poder cambiar 
        el estado 'page' desde el componente hijo.
      */}
      <Navbar navigateTo={navigateTo} />

      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>

      {/* El Footer es estático y no necesita props */}
      <Footer />
    </div>
  );
}
