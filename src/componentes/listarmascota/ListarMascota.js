import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
import React, { useState, useEffect } from "react";
import './ListarMascota.css';
const MascotaList = () => {
  const [mascotas,setMascotas] = useState([]);
  const [mascotaSeleccionado, setmascotaSeleccionado] = useState('');
  useEffect(() => {
    const localMascota = localStorage.getItem('localmascota');
    if (localMascota) {
      const mascotasParsed = JSON.parse(localMascota);
      setMascotas(mascotasParsed);
    }
  }, []);
  const handleDelete = (id) => {
    const updatedmascotas = mascotas.filter((mascota) => mascota.Identificacion !== id);
    setMascotas(updatedmascotas);
    localStorage.setItem("localmascota", JSON.stringify(updatedmascotas));
  };

  const handleClienteSeleccionado = (event) => {
    setmascotaSeleccionado(event.target.value);
  };
  
  return (
    <div>
      <Header />
      <div className="grid-container">
      {mascotas.map(mascota => (
        <div className="grid-item">
          <p>
            <strong>Identificación:</strong> {mascota.Identificacion}
          </p>
          <p>
            <strong>Nombre:</strong> {mascota.Nombre}
          </p>
          <p>
            <strong>Especie:</strong> {mascota.Especie}
          </p>
          <p>
            <strong>Raza:</strong> {mascota.Raza}
          </p>
          <p>
            <strong>Propietario:</strong> {mascota.Propietario}
          </p>
          <button onClick={() => handleDelete(mascota.Identificacion)} className="delete-button">Eliminar</button>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default MascotaList;