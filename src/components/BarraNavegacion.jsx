// src/components/BarraNavegacion.jsx
import React from 'react';

function BarraNavegacion({ navigateTo, currentPage }) {
  const baseLink =
    'px-3 py-1 rounded-full text-sm font-medium transition-colors';

  const linkClass = (pageKey) =>
    currentPage === pageKey
      ? `${baseLink} bg-cyan-500 text-gray-900`
      : `${baseLink} text-gray-300 hover:text-cyan-400 hover:bg-gray-800/60`;

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 w-full shadow-lg border-b border-gray-800/80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={() => navigateTo('home')}
        >
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            CODEFLIX<span className="text-cyan-400">: Sci-Fi</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-400">
            Solo ciencia ficción, todo el tiempo.
          </p>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => navigateTo('home')}
            className={linkClass('home')}
          >
            Inicio
          </button>
          <button
            onClick={() => navigateTo('catalog')}
            className={linkClass('catalog')}
          >
            Catálogo
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className={linkClass('contact')}
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
}

export default BarraNavegacion;
