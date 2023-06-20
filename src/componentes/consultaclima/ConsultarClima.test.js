import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import WeatherApp from "./WeatherApp";

describe("WeatherApp", () => {
  test("renders WeatherApp component", () => {
    render(<WeatherApp />);

    // Verificar que el componente se renderiza correctamente
    expect(screen.getByText("Buscar Clima")).toBeInTheDocument();
  });

  test("fetches weather data on search", async () => {
    render(<WeatherApp />);

    // Simular la entrada de datos en el campo de búsqueda
    fireEvent.change(screen.getByPlaceholderText("Ingrese Ciudad"), {
      target: { value: "London" },
    });

    // Simular el clic en el botón de búsqueda
    fireEvent.click(screen.getByText("Buscar"));

    // Esperar a que se realice la llamada a la API y se muestren los datos del clima
    await waitFor(() => {
      expect(screen.getByText("London")).toBeInTheDocument();
      expect(screen.getByText(/Temperatura:/)).toBeInTheDocument();
      expect(screen.getByText(/Humedad:/)).toBeInTheDocument();
      expect(screen.getByText(/Velocidad del viento:/)).toBeInTheDocument();
      expect(screen.getByText(/Descripcion:/)).toBeInTheDocument();
    });
  });
});