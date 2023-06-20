import React, { useState } from "react";
// import { FaAlignCenter } from "react-icons/fa";
import Header from "../../componentes/header/Header";
import './CrearMascota.css';
import Footer from "../../componentes/footer/Footer";
const NewMascota = ({ clientes }) => {
    
  const [clienteSeleccionado, setClienteSeleccionado] = useState('');
  const[identificacion,setidentificacion] = useState("");
  const[nombre,setnombre] = useState("");
  const[especie,setespecie] = useState("");
  const[raza,setraza] = useState("");
  const[sexo,setsexo] = useState("");
  const[propietario,setpropietario] = useState('');
  const[mascota,setmascota] = useState([]);

  const handleClienteSeleccionado = (event) => {
    setClienteSeleccionado(event.target.value);
  };

  const handleSubmit = (e) => {

 const nuevamascota = { Identificacion: identificacion, 
  Nombre: nombre, Especie: especie , Raza : raza, Sexo: sexo,Propietario: clienteSeleccionado }
  const localmascota = localStorage.getItem('localmascota');
  const mascotas = localmascota ? JSON.parse(localmascota) : [];
  const nuevoListadomascota = [...mascotas, nuevamascota];
  setmascota(nuevoListadomascota);
  localStorage.setItem('localmascota', JSON.stringify(nuevoListadomascota));

  };

  return (
    <>
      <Header />
 
      <div className="formDiv">    
      
      </div>
  <form>
  <h1>Registro Mascota</h1>
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
            
                id="exampleInputEspecie"
                aria-describedby="emailHelp"
                   value={especie}
                  onChange={e=> setespecie(e.target.value)}
                placeholder="Especie"
              />
</div>
<div>

 <input
                type="text"
            
                id="exampleInputraxa"
                aria-describedby="emailHelp"
                   value={raza}
                  onChange={e=> setraza(e.target.value)}
                placeholder="Raza"
              />
</div>
<div>

<select id="propietario" value={clienteSeleccionado} onChange={handleClienteSeleccionado}>
        <option value="">Seleccione un propietario</option>
        {clientes.map(cliente => (
          <option key={cliente.Identificacion} value={cliente.identificacion}>{cliente.Nombre} {cliente.Apellido}</option>
        ))}
      </select>
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

export default NewMascota;
