// src/utils/filtrarPeliculas.test.js
import { filtrarPeliculas } from './filtrarPeliculas';

const mockPeliculas = [
  { id: 1, title: 'Dune: Parte Dos', genre: 'Space Opera' },
  { id: 2, title: 'Blade Runner 2049', genre: 'Cyberpunk' },
  { id: 3, title: 'The Matrix', genre: 'Cyberpunk' },
];

describe('filtrarPeliculas', () => {
  it('filtra por título sin importar mayúsculas/minúsculas', () => {
    const resultado = filtrarPeliculas(mockPeliculas, 'dune', 'all');
    expect(resultado).toHaveLength(1);
    expect(resultado[0].title).toBe('Dune: Parte Dos');
  });

  it('filtra por género cuando no es "all"', () => {
    const resultado = filtrarPeliculas(mockPeliculas, '', 'Cyberpunk');
    expect(resultado).toHaveLength(2);
    const titulos = resultado.map((p) => p.title);
    expect(titulos).toContain('Blade Runner 2049');
    expect(titulos).toContain('The Matrix');
  });

  it('aplica búsqueda y género al mismo tiempo', () => {
    const resultado = filtrarPeliculas(
      mockPeliculas,
      'matrix',
      'Cyberpunk'
    );
    expect(resultado).toHaveLength(1);
    expect(resultado[0].title).toBe('The Matrix');
  });

  it('devuelve arreglo vacío cuando no hay coincidencias (caso límite)', () => {
    const resultado = filtrarPeliculas(
      mockPeliculas,
      'no existe',
      'Space Opera'
    );
    expect(resultado).toHaveLength(0);
  });
});
