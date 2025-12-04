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
        <h2 className="text-3xl font-bold text-scifiBlue-light mb-4">¡Gracias por tu retroalimentación! 🚀</h2>
        <p className="text-gray-300">
          Tu comentario ha sido enviado correctamente. ¡Nos ayudas a mejorar CodeFlix!
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-5 py-2 bg-scifiBlue-dark text-white font-semibold rounded-lg hover:bg-scifiBlue transition-colors"
        >
          Enviar otro comentario
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn max-w-lg mx-auto">
      <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
        ¿Qué te parece CodeFlix?
      </h2>
      <p className="text-gray-400 text-center mb-8">
        Comparte tu experiencia, ideas o errores que hayas encontrado 👇
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
            className="mt-1 w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-scifiBlue-light"
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-300">
            Tu comentario
          </label>
          <textarea
            id="reason"
            rows="4"
            required
            placeholder="¿Qué mejorarías? ¿Qué te gustó? 🛸"
            className="mt-1 w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-scifiBlue-light"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-[#002366] text-white font-bold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Enviar Retroalimentación
        </button>
      </form>
    </div>
  );
}

export default PaginaContacto;
