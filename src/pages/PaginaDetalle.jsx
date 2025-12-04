// src/pages/PaginaDetalle.jsx
import React from "react";

function PaginaDetalle({ movie, goToCatalog }) {
  if (!movie) {
    return (
      <p className="text-center text-red-500">
        Error: Película no encontrada.
      </p>
    );
  }

  return (
    <div className="animate-fadeIn max-w-5xl mx-auto">
      <button
        onClick={goToCatalog}
        className="mb-6 text-scifiBlue hover:text-scifiBlue-light transition-colors text-sm"
      >
        &larr; Volver al catálogo
      </button>

      <div className="relative h-[45vh] -mt-4 mb-8 rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-br from-scifiBlue/25 via-black to-slate-950">
        {movie.backdropUrl ? (
          <img
            src={movie.backdropUrl}
            alt={`Fondo de ${movie.title}`}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : (
          <div className="absolute inset-0 flex justify-center items-center opacity-30">
            <span className="text-scifiBlue-light text-sm md:text-lg">
              SIN IMAGEN DISPONIBLE
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src={movie.posterUrl}
            alt={`Póster de ${movie.title}`}
            className="w-full h-auto rounded-xl shadow-2xl aspect-[2/3] -mt-24 relative z-10 border border-gray-800"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/400x600/020617/64748b?text=Sin+imagen";
            }}
          />
        </div>

        <div className="md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            {movie.title}
          </h2>

          <div className="flex flex-wrap items-center gap-3 text-gray-400 mb-4 text-sm md:text-base">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.director}</span>
            <span>•</span>
            <span className="text-yellow-400 font-bold">
              {movie.rating} / 10
            </span>
          </div>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            {movie.description}
          </p>

          <div className="mt-3">
            <span className="px-4 py-2 bg-scifiBlue-dark text-white rounded-full text-xs font-semibold uppercase tracking-wide">
              {movie.genre}
            </span>
          </div>
        </div>
      </div>

      {movie.trailerUrl && (
        <section className="mt-10">
          <h3 className="text-2xl font-bold text-white mb-3">
            Tráiler
          </h3>
          <div className="aspect-video w-full max-w-4xl mx-auto">
            <iframe
              className="w-full h-full rounded-xl border border-gray-800 shadow-xl"
              src={movie.trailerUrl}
              title={`Tráiler de ${movie.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}
    </div>
  );
}

export default PaginaDetalle;
