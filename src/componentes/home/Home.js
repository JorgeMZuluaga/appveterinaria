// import { FaAlignCenter } from "react-icons/fa";
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
import './Home.css';
const Home = () => {
    return (
        <>
        <Header />
      <div className="home">
             <h1 className="centered-title">Bienvenido a CocoSoft</h1>
        <img
          src="https://pixabay.com/es/vectors/perro-animales-cachorro-terrier-47957/"
          alt="Imagen de inicio"
          className="centered-image"
        />
   
      </div>
      <Footer/>
      </>
    );
  };
  export default Home;