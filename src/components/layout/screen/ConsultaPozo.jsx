import React from 'react';
import { Button } from 'flowbite-react';
import Imagen from '../../../assets/logo.png';
import './estilos/style.css';
import Image from '../../../assets/contenedor.png';
import { Link } from 'react-router-dom';

const ConsultaPozos = () => {
  const usuarios = [
    { correo: 'asasa@sas', nombre: 'hjhjjhj', rol:'admin'}
  ];

  return (
    <div>
      {/* Navbar SIMNA cpr*/}
      <nav className="bg-blue-900 w-full p-4 flex justify-between items-center" style={{ background: "#072D44" }}>
        <div className="flex items-center">
          <img src={Imagen} alt="Logo" className="h-12 w-auto mr-4" /> 
          <h1 className="text-white font-bold text-lg">SIMNA</h1>
        </div>
        
        <div className="flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
      
      <h2 className="text-center text-2xl font-bold mt-4">Pozo: 1</h2>

      <div className="text-center mt-4">
      <img src={Image}  alt="Imagen" className="mx-auto" style={{ width: '200px' }} />
      </div>
      
      <div className="mx-auto mt-8 max-w-md">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="font-bold">Capacidad</td>
              <td>1100 L</td>
            </tr>
            <tr>
              <td className="font-bold">Ubicación</td>
              <td>calle gardenias Col. Azteca Temixco Mor</td>
            </tr>
            <tr>
              <td className="font-bold">Nivel</td>
              <td>70%</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-center mt-4">
        <Button style={{ background: "#5790AB" }} className='shadow btn-sm mr-2'>Activar Llenado</Button>
        <Button style={{ background: "#5790AB" }} className='shadow btn-sm'>
          <Link to="/histograma">
            Mostrar Histograma
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default ConsultaPozos;