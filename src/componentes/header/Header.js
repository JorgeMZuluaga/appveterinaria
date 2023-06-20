import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import MiImagen from "./ImgenLogo.png";
const Header = () => {
  return (
    <div>
      
          <header>

   
   
      <div class="navbar">
 
  <Link  to="/">
             Inicio
              </Link>
  <div class="subnav">
    <button class="subnavbtn">Clientes <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
    <Link to="/ListarClientes">
               Listar Clientes
              </Link>
              <Link to="/CrearCliente">
               Crear Cliente
              </Link>
     
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn">Mascotas <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
    <Link to="/CrearMascota">
               Crear Mascota
              </Link>
              <Link to="/ListarMascota">
               Listar Mascota
              </Link>
    </div>
  </div>

 
  <Link  to="/ConsultaClima">
             API
              </Link>

  <div className="logo">
          <img src={MiImagen}  alt="Logo"/>
        </div>
</div>

    
      </header>

    </div>
  );
};

export default Header;