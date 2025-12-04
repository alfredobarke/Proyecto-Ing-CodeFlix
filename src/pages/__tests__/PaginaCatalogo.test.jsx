// src/pages/__tests__/PaginaCatalogo.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaginaCatalogo from "../PaginaCatalogo";
import peliculasSciFi from "../../data/peliculasSciFi";

describe("PaginaCatalogo", () => {
  it("muestra el número correcto de películas al inicio", () => {
    render(<PaginaCatalogo viewMovie={() => {}} />);

    const contador = screen.getByText(/película\(s\) de ciencia ficción\./i);
    expect(contador).toHaveTextContent("Mostrando");
    expect(contador).toHaveTextContent(String(peliculasSciFi.length));
  });

  it("actualiza el contador al filtrar por título", async () => {
    const user = userEvent.setup();
    render(<PaginaCatalogo viewMovie={() => {}} />);

    const input = screen.getByPlaceholderText(/Buscar por título/i);
    await user.type(input, "Dune");

    const contador = screen.getByText(/película\(s\) de ciencia ficción\./i);
    expect(contador).toHaveTextContent("1");
  });
});
