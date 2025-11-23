import React from 'react';

function PieDePagina() {
  const teamColorClass = 'bg-cyan-500';

  return (
    <footer className={`mt-16 p-8 ${teamColorClass} text-gray-900`}>
      <div className="container mx-auto text-center">
        <p className="font-bold">CodeFlix - Proyecto de Ingeniería de Software</p>
        <p>Género: Ciencia Ficción</p>
        <p>Este sitio es parte del universo CodeFlix.</p>
        {/* nombres */}
        <p className="mt-4 text-sm opacity-70">Miembros del Equipo: ...</p>
      </div>
    </footer>
  );
}

export default PieDePagina;