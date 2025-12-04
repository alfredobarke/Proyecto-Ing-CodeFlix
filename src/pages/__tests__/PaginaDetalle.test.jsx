// src/pages/__tests__/PaginaDetalle.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import PaginaDetalle from "../PaginaDetalle";
import peliculasSciFi from "../../data/peliculasSciFi";

describe("PaginaDetalle", () => {
  it("muestra mensaje de error si no hay película seleccionada (caso límite)", () => {
    render(<PaginaDetalle movie={null} goToCatalog={() => {}} />);

    expect(
      screen.getByText(/Error: Película no encontrada/i)
    ).toBeInTheDocument();
  });

  it("muestra la información principal de la película seleccionada (requisito crítico)", () => {
    const movie = peliculasSciFi[0]; // Por ejemplo, Dune

    render(<PaginaDetalle movie={movie} goToCatalog={() => {}} />);

    // Título
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    // Año (lo convertimos a string por si acaso)
    expect(screen.getByText(String(movie.year))).toBeInTheDocument();
    // Director
    expect(screen.getByText(movie.director)).toBeInTheDocument();
    // Rating formateado (9.1 / 10)
    expect(
      screen.getByText(`${movie.rating} / 10`)
    ).toBeInTheDocument();
  });
});
