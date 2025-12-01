// src/components/TarjetaPelicula.jsx
import React from 'react';

function TarjetaPelicula({ movie, onViewMovie }) {
  return (
    // Se nos ocurrio que toda card sea clickeable, como en las plataformas de streaming
    <div
      className="group bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-cyan-500/40 cursor-pointer"
      onClick={() => onViewMovie(movie.id)}
    >
      <div className="relative">
        <img
          src={movie.posterUrl}
          alt={`Póster de ${movie.title}`}
          className="w-full h-auto object-cover aspect-[2/3]"
          onError={(e) => {
            e.target.src =
              'https://placehold.co/400x600/020617/64748b?text=Sin+imagen';
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/80 text-yellow-300 text-xs font-semibold">
          ★ {movie.rating ?? '–'}
        </span>

        <span className="absolute bottom-3 left-3 px-2 py-1 rounded-full bg-cyan-500/90 text-gray-900 text-[0.7rem] font-semibold uppercase tracking-wide">
          {movie.genre}
        </span>
      </div>

      <div className="p-4">
        <h3
          className="font-semibold text-base text-white truncate"
          title={movie.title}
        >
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm">{movie.year}</p>
      </div>
    </div>
  );
}

export default TarjetaPelicula;
