// src/components/PieDePagina.jsx
import React from 'react';

function PieDePagina() {
  return (
    <footer className="mt-16 border-t bg-[#002366]/40">

      <div className="p-8 bg-[#002366] text-gray-300">
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
