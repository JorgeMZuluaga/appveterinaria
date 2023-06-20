import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrearCliente from "./componentes/crearcliente/CrearCliente";
import ListarClientes from "./componentes/listarclientes/ListarClientes";
import CrearMascota from "./componentes/crearmascota/CrearMascota";
import ListarMascota from "./componentes/listarmascota/ListarMascota";
import ConsultaClima from "./componentes/consultaclima/ConsultaClima";
import Home from "./componentes/home/Home";

import React, { useState, useEffect } from "react";
function App() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Obtener los datos de clientes desde el local storage u otra fuente de datos
    const localClientes = localStorage.getItem("localcliente");
    if (localClientes) {
      const clientesParsed = JSON.parse(localClientes);
      setClientes(clientesParsed);
    }
  }, []);
  return (
    <>
     <Router>
      <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/ListarClientes" element={<ListarClientes clientes={clientes}/>} />
    <Route path="/CrearCliente" element={<CrearCliente />} />
    <Route path="/CrearMascota" element={<CrearMascota clientes={clientes}/>} />
    <Route path="/ListarMascota" element={<ListarMascota />} />
    <Route path="/ConsultaClima" element={<ConsultaClima />} />

    </Routes>
    </Router>
  
  </>
  );
 
}

export default App;
