// src/components/PieDePagina.jsx
import React from 'react';

function PieDePagina() {
  return (
    <footer className="mt-16 border-t border-cyan-500/40">
      <div
        className="h-1 w-full"
        style={{ backgroundColor: '#0049FF' }}
      />

      <div className="p-8 bg-cyan-500 text-gray-900">
        <div className="container mx-auto text-center text-sm md:text-base">
          <p className="font-bold text-lg md:text-xl">
            CodeFlix – Proyecto de Ingeniería de Software
          </p>
          <p>Género: Ciencia Ficción</p>
          <p>Este sitio forma parte del universo ficticio de CodeFlix.</p>

          <div className="mt-6">
            <p className="font-semibold">Equipo Desarrollo:</p>
            <ul className="mt-2 space-y-1">
              <li>Carlos Yañez Díaz</li>
              <li>Reyes Medina Santiago Iván</li>
              <li>Alfredo Barke Gómez</li>
              <li>Julio César Islas Espino</li>
              <li>Ashley Yael López Espinoza</li>
            </ul>
          </div>

          <p className="mt-4 text-xs opacity-80">
            Facultad de Ciencias – UNAM
          </p>
        </div>
      </div>
    </footer>
  );
}

export default PieDePagina;
