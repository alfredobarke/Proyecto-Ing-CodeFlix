import React from 'react';

function TarjetaPelicula({ movie, onViewMovie }) {
  return (
    <div
      className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/20 cursor-pointer"
      onClick={() => onViewMovie(movie.id)}
    >
      <img
        src={movie.posterUrl}
        alt={`Póster de ${movie.title}`} 
        className="w-full h-auto object-cover aspect-[2/3]"
        onError={(e) => {
          e.target.src = 'https://placehold.co/400x600/1a202c/718096?text=Error'; 
        }}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg truncate text-white">{movie.title}</h3>
        <p className="text-gray-400 text-sm">{movie.year}</p>
      </div>
    </div>
  );
}

export default TarjetaPelicula;