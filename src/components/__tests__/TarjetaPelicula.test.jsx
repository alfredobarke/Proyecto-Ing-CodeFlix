// src/components/__tests__/TarjetaPelicula.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import TarjetaPelicula from '../TarjetaPelicula';

describe('TarjetaPelicula', () => {
  it('muestra título, año, género y rating de la película', () => {
    const fakeMovie = {
      id: 999,
      title: 'Prueba Sci-Fi',
      year: 2099,
      director: 'Directora X',
      description: 'Descripción de prueba.',
      posterUrl: 'https://example.com/poster.jpg',
      backdropUrl: 'https://example.com/backdrop.jpg',
      rating: 8.9,
      genre: 'Test-Genre',
    };

    render(<TarjetaPelicula movie={fakeMovie} onViewMovie={() => {}} />);

    // Título visible
    expect(screen.getByText(/Prueba Sci-Fi/i)).toBeInTheDocument();
    // Año visible
    expect(screen.getByText(/2099/)).toBeInTheDocument();
    // Rating visible con el símbolo de estrella que usamos 
    expect(screen.getByText(/★ 8.9/)).toBeInTheDocument();
    // Género
    expect(screen.getByText(/Test-Genre/i)).toBeInTheDocument();
  });
});
