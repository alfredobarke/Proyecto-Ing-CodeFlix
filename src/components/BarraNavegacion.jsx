import React from 'react';

function BarraNavegacion({ navigateTo }) {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 w-full shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className="text-3xl font-bold text-white cursor-pointer"
          onClick={() => navigateTo('home')}
        >
          CODEFLIX<span className="text-cyan-400">: Sci-Fi</span>
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={() => navigateTo('home')}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => navigateTo('catalog')}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Catálogo
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
}

export default BarraNavegacion;