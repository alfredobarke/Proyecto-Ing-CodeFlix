import React from 'react';

function PaginaDetalle({ movie, goToCatalog }) { 
  if (!movie) {
    return <p className="text-center text-red-500">Error: Película no encontrada.</p>;
  }

  return (
    <div className="animate-fadeIn">
      <button
        onClick={goToCatalog}
        className="mb-8 text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        &larr; Volver al catálogo
      </button>
      <div className="relative h-[50vh] -mt-8 mb-8 rounded-lg overflow-hidden">
        <img
          src={movie.backdropUrl}
          alt={`Fondo de ${movie.title}`}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src={movie.posterUrl}
            alt={`Póster de ${movie.title}`}
            className="w-full h-auto rounded-lg shadow-2xl aspect-[2/3] -mt-24 relative z-10"
            onError={(e) => { e.target.src = 'https://placehold.co/400x600/1a202c/718096?text=Error'; }}
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-5xl font-extrabold text-white">{movie.title}</h2>
          <div className="flex items-center gap-4 text-gray-400 mt-2 mb-4">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.director}</span>
            <span>•</span>
            <span className="text-yellow-400 font-bold">{movie.rating} / 10</span>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            {movie.description}
          </p>
          <div className="mt-6">
            <span className="px-4 py-2 bg-cyan-800 text-cyan-200 rounded-full text-sm font-semibold">
              {movie.genre}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaDetalle;