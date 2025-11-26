import React, { useState, useMemo } from 'react';
import TarjetaPelicula from '../components/TarjetaPelicula';
import peliculasSciFi from '../data/peliculasSciFi';

function PaginaCatalogo({ viewMovie }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenre, setFilterGenre] = useState('all');
  const genres = ['all', ...new Set(peliculasSciFi.map((m) => m.genre))];

  const filteredMovies = useMemo(() => {
    return peliculasSciFi
      .filter((movie) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .filter((movie) => {
        if (filterGenre === 'all') return true;
        return movie.genre === filterGenre;
      });
  }, [searchTerm, filterGenre]);

  return (
    <div className="animate-fadeIn">
      <h2 className="text-4xl font-extrabold text-white mb-8">
        Catálogo Completo
      </h2>
      <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-gray-800 rounded-lg">
        <input
          type="text"
          placeholder="Buscar por título..."
          className="flex-grow p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre === 'all' ? 'Todos los géneros' : genre}
            </option>
          ))}
        </select>
      </div>
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <TarjetaPelicula key={movie.id} movie={movie} onViewMovie={viewMovie} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-xl">
          No se encontraron películas con esos criterios.
        </p>
      )}
    </div>
  );
}

export default PaginaCatalogo;