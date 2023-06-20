import React, { useState } from "react";
// import { FaAlignCenter } from "react-icons/fa";
import Header from "../../componentes/header/Header";
import './CrearCliente.css';
import Footer from "../../componentes/footer/Footer";
const HomePage = () => {
  

  const[identificacion,setidentificacion] = useState("");
  const[nombre,setnombre] = useState("");
  const[apellido,setapellido] = useState("");
  const[telefono,settelefono] = useState("");
  const[email,setmail] = useState("");
  const[cliente,setcliente] = useState([]);
 


  const handleSubmit = (e) => {

 const nuevocliente = { Identificacion: identificacion, 
  Nombre: nombre, Apellido: apellido , Telefono : telefono, Email: email }
  const localcliente = localStorage.getItem('localcliente');
  const clientes = localcliente ? JSON.parse(localcliente) : [];
  const nuevoListadocliente = [...clientes, nuevocliente];
  setcliente(nuevoListadocliente);
  localStorage.setItem('localcliente', JSON.stringify(nuevoListadocliente));

  };

  return (
    <>
      <Header />
 
      <div className="formDiv">    
      
      </div>
  <form>
  <h1>Registro Cliente</h1>
<div>

 <input
                type="text"
            
                id="exampleIdentificacion"
                value={identificacion}
                onChange={e=> setidentificacion(e.target.value)}
                aria-describedby="emailHelp"
                placeholder="Identificacion"
              />
</div>

<div>

 <input
                type="text"
                  id="exampleInputNombre"
                aria-describedby="emailHelp"
                value={nombre}
                  onChange={e=> setnombre(e.target.value)}
                placeholder="Nombre"
              />
</div>
<div>

 <input
                type="text"
            
                id="exampleInputApellido"
                aria-describedby="emailHelp"
                   value={apellido}
                  onChange={e=> setapellido(e.target.value)}
                placeholder="Apellido"
              />
</div>
<div>

 <input
                type="text"
            
                id="exampleInputTelefono"
                aria-describedby="emailHelp"
                   value={telefono}
                  onChange={e=> settelefono(e.target.value)}
                placeholder="Telefono"
              />
</div>
<div>
<input

                type="text"
            
                id="exampleInputemail"
                aria-describedby="emailHelp"
                       value={email}
                  onChange={e=> setmail(e.target.value)}
                placeholder="Email"
              />
</div>
<button
              type="submit"
              className="button"
              onClick={handleSubmit}
            >
              Agregar
            </button>
 

  </form>
  <Footer/>
    </>

  );
};

export default HomePage;
