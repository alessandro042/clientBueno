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