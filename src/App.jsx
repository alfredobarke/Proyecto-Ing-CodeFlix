import React, { useState } from 'react';

// Importamos los datos y los componentes (Carpetas en Inglés, Archivos en Español)
import peliculasSciFi from './data/peliculasSciFi';
import BarraNavegacion from './components/BarraNavegacion';
import PieDePagina from './components/PieDePagina';
import PaginaInicio from './pages/PaginaInicio';
import PaginaCatalogo from './pages/PaginaCatalogo';
import PaginaDetalle from './pages/PaginaDetalle';
import PaginaContacto from './pages/PaginaContacto';

// --- (4) COMPONENTE PRINCIPAL (APP) ---
export default function App() {
  const [page, setPage] = useState('home'); // 'home', 'catalog', 'detail', 'contact'
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const navigateTo = (targetPage) => {
    setPage(targetPage);
    window.scrollTo(0, 0); 
  };

  const viewMovie = (id) => {
    setSelectedMovieId(id);
    setPage('detail');
    window.scrollTo(0, 0);
  };

  const goToCatalog = () => {
    setSelectedMovieId(null);
    navigateTo('catalog');
  }

  const selectedMovie = peliculasSciFi.find((m) => m.id === selectedMovieId);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <PaginaInicio navigateTo={navigateTo} viewMovie={viewMovie} />;
      case 'catalog':
        return <PaginaCatalogo viewMovie={viewMovie} />;
      case 'detail':
        return <PaginaDetalle movie={selectedMovie} goToCatalog={goToCatalog} />;
      case 'contact':
        return <PaginaContacto />;
      default:
        return <PaginaInicio navigateTo={navigateTo} viewMovie={viewMovie} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <BarraNavegacion navigateTo={navigateTo} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <PieDePagina />
    </div>
  );
}
