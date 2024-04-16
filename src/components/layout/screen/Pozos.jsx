import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import './estilos/style.css';
import axios from 'axios';

const Pozos = () => {
  const [pozos, setPozos] = useState([]);

  const getToken = () => {
    console.log(localStorage.getItem("token"));
    return localStorage.getItem("token");
  };

  // Get de pozos
  const getPozos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/pozos', {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      });
      setPozos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPozos();
  }, []);
  return (
    <div className="p-4 mx-auto mt-8 max-w-4xl">
      <table className="w-full border-collapse border border-gray-300 bg-white">
        <thead>
          <tr>
            <th className='nombre'>Nombre</th>
            <th className='capacidad'>Capacidad Litros</th>
            <th className='porcentaje'>Porcentaje Agua</th>
            <th className='ubicacion'>Ubicación</th>
            <th className='comunidades'>Comunidades</th>
            <th className='acciones'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(pozos) && pozos.map((pozo, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border border-gray-300 px-4 py-2">
                {pozo.nombre}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {pozo.capacidadLitros} L
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {pozo.porcentajeAgua} %
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {pozo.ubicacionPozo}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {pozo.comunidades}
              </td>
              <td className="border border-gray-300 px-4 py-1 flex justify-center items-center">
                <Button style={{ background: "#5790AB" }} className='shadow btn-sm w-auto h-auto px-1 py-0.5 text-sm mr-2' type="submit">
                  <Link to={`/consultapozo/${pozo.id}`}>Consultar</Link>
                </Button>
                <Button style={{ background: "#5790AB" }} className='shadow btn-sm w-auto h-auto px-1 py-0.5 text-sm mr-2' type="submit">
                  <Link to={`/modificapozo/${pozo.id}`}>Modificar</Link>
                </Button>
                <Button style={{ background: "#5790AB" }} className='shadow btn-sm w-auto h-auto px-1 py-0.5 text-sm' type="submit">
                  <Link to={`/eliminapozo/${pozo.id}`}>Eliminar</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pozos;
