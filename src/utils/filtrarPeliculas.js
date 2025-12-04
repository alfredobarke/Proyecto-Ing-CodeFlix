// src/utils/filtrarPeliculas.js

// Función que encapsula la lógica de filtrado que usamos en el catálogo
// Esto nos ayudo a probar la lógica sin montar componentes
export function filtrarPeliculas(peliculas, searchTerm, filterGenre) {
  return peliculas
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((movie) =>
      filterGenre === 'all' ? true : movie.genre === filterGenre
    );
}
