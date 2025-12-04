// src/pages/PaginaInicio.jsx
import React from 'react';
import TarjetaPelicula from '../components/TarjetaPelicula';
import peliculasSciFi from '../data/peliculasSciFi';

function PaginaInicio({ navigateTo, viewMovie }) {
  const featuredMovies = peliculasSciFi.slice(0, 3);

  return (
    <div>
      {/* Sección Héroe */}
      <div className="relative h-[60vh] md:h-[70vh] -mt-8 mb-16 flex items-center justify-center text-center rounded-2xl overflow-hidden border border-gray-800/70">
        <img
          src={peliculasSciFi[0].backdropUrl}
          alt="Backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="relative z-10 p-4">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            Catálogo exclusivo de Ciencia Ficción
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl">
            Tu Portal al Universo Sci-Fi
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Explora galaxias lejanas, futuros distópicos y las maravillas (y
            peligros) de la tecnología, todo en un solo lugar.
          </p>
          <button
            onClick={() => navigateTo('catalog')}
            className="mt-8 px-7 py-3 bg-[#002366] text-gray-300 font-bold rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-cyan-400"
          >
            Explorar Catálogo
          </button>
        </div>
      </div>

      {/* Películas Destacadas */}
      <section>
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
            Destacadas de la semana
          </h3>
          <button
            onClick={() => navigateTo('catalog')}
            className="text-sm text-gray-400 hover:text-cyan-300 transition-colors"
          >
            Ver todo el catálogo →
          </button>
        </div>
        <p className="text-sm text-gray-400 mb-6">
          Una pequeña selección para empezar tu maratón de ciencia ficción.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {featuredMovies.map((movie) => (
            <TarjetaPelicula
              key={movie.id}
              movie={movie}
              onViewMovie={viewMovie}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default PaginaInicio;
