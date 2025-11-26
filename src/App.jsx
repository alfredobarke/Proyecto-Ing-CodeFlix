// src/App.jsx
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
  // Esto lo uso como un "router" muy simple, suficiente para el proyecto sin meter más librerías.
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
  };

  // Ojo: aquí buscamos la peli seleccionada directamente en el mock de datos.
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white font-inter">
      <BarraNavegacion navigateTo={navigateTo} currentPage={page} />
      <main className="container mx-auto px-4 py-10 md:py-12">
        <div className="max-w-6xl mx-auto animate-fadeIn">
          {renderPage()}
        </div>
      </main>
      <PieDePagina />
    </div>
  );
}
