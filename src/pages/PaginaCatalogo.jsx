// src/pages/PaginaCatalogo.jsx
import React, { useState, useMemo } from 'react';
import TarjetaPelicula from '../components/TarjetaPelicula';
import peliculasSciFi from '../data/peliculasSciFi';

function PaginaCatalogo({ viewMovie }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenre, setFilterGenre] = useState('all');
  const genres = ['all', ...new Set(peliculasSciFi.map((m) => m.genre))];

  const filteredMovies = useMemo(() => {
    return peliculasSciFi
      .filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .filter((movie) =>
        filterGenre === 'all' ? true : movie.genre === filterGenre,
      );
  }, [searchTerm, filterGenre]);

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
        Catálogo Sci-Fi
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        Explora todas las películas de ciencia ficción disponibles en CodeFlix.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-gray-900/80 rounded-xl border border-gray-800">
        <input
          type="text"
          placeholder="Buscar por título..."
          className="flex-grow p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre === 'all' ? 'Todos los subgéneros' : genre}
            </option>
          ))}
        </select>
      </div>

      <p className="text-xs text-gray-500 mb-4">
        Mostrando <span className="text-cyan-400 font-semibold">{filteredMovies.length}</span>{' '}
        película(s) de ciencia ficción.
      </p>

      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <TarjetaPelicula
              key={movie.id}
              movie={movie}
              onViewMovie={viewMovie}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg mt-10">
          No se encontraron películas con esos criterios.
        </p>
      )}
    </div>
  );
}

export default PaginaCatalogo;
