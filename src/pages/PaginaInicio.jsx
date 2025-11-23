import React from 'react';
import TarjetaPelicula from '../componentes/TarjetaPelicula';
import peliculasSciFi from '../datos/peliculasSciFi';

function PaginaInicio({ navigateTo, viewMovie }) {
  const featuredMovies = peliculasSciFi.slice(0, 3); 

  return (
    <div>
      {/* Sección Héroe */}
      <div className="relative h-[60vh] md:h-[70vh] -mt-8 mb-16 flex items-center justify-center text-center rounded-lg overflow-hidden">
        <img
          src={peliculasSciFi[0].backdropUrl}
          alt="Backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="relative z-10 p-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white shadow-lg">
            Tu Portal al Universo Sci-Fi
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">
            Explora las galaxias, futuros distópicos y las maravillas de la
            tecnología.
          </p>
          <button
            onClick={() => navigateTo('catalog')}
            className="mt-8 px-6 py-3 bg-cyan-500 text-gray-900 font-bold rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
          >
            Explorar Catálogo
          </button>
        </div>
      </div>

      {/* Películas Destacadas */}
      <h3 className="text-3xl font-bold text-cyan-400 mb-8">
        Destacadas de la Semana
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuredMovies.map((movie) => (
          <TarjetaPelicula key={movie.id} movie={movie} onViewMovie={viewMovie} />
        ))}
      </div>
    </div>
  );
}

export default PaginaInicio;