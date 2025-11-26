import React, { useState } from 'react';

function PaginaContacto() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="animate-fadeIn text-center max-w-lg mx-auto p-8 bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">¡Gracias!</h2>
        <p className="text-gray-300">
          Tu recomendación ha sido enviada. ¡Pronto la revisaremos!
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-5 py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
        >
          Enviar otra
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn max-w-lg mx-auto">
      <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
        Recomienda una Película
      </h2>
      <p className="text-gray-400 text-center mb-8">
        ¿Crees que falta una joya del Sci-Fi en nuestro catálogo? ¡Dinos cuál!
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-8 bg-gray-800 rounded-lg shadow-xl"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Tu Nombre
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label htmlFor="movieTitle" className="block text-sm font-medium text-gray-300">
            Título de la Película
          </label>
          <input
            type="text"
            id="movieTitle"
            required
            className="mt-1 w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-300">
            ¿Por qué deberíamos añadirla?
          </label>
          <textarea
            id="reason"
            rows="4"
            className="mt-1 w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-cyan-600 text-white font-bold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Enviar Recomendación
        </button>
      </form>
    </div>
  );
}

export default PaginaContacto;
