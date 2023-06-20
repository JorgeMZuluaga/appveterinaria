import Header from "../../componentes/header/Header";
import React, { useState, useEffect } from "react";
import './ListarClientes.css';
import Footer from "../../componentes/footer/Footer";
const UersList = () => {
  const [clientes,setClientes] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState('');
  useEffect(() => {
    const localCliente = localStorage.getItem('localcliente');
    if (localCliente) {
      const clientesParsed = JSON.parse(localCliente);
      setClientes(clientesParsed);
    }
  }, []);
  const handleDelete = (id) => {
    const updatedclientes = clientes.filter((cliente) => cliente.Identificacion !== id);
    setClientes(updatedclientes);
    localStorage.setItem("localcliente", JSON.stringify(updatedclientes));
  };

  const handleClienteSeleccionado = (event) => {
    setClienteSeleccionado(event.target.value);
  };
  
  return (
    <div>
      <Header />
      <div className="grid-container">
      {clientes.map(cliente => (
        <div className="grid-item">
          <p>
            <strong>Identificación:</strong> {cliente.Identificacion}
          </p>
          <p>
            <strong>Nombre:</strong> {cliente.Nombre}
          </p>
          <p>
            <strong>Apellido:</strong> {cliente.Apellido}
          </p>
          <p>
            <strong>Teléfono:</strong> {cliente.Telefono}
          </p>
          <p>
            <strong>Email:</strong> {cliente.Email}
          </p>
          <button onClick={() => handleDelete(cliente.Identificacion)} className="delete-button">Eliminar</button>
        </div>
      ))}
         <Footer/>
    </div>
 
    </div>
  );
};

export default UersList;
