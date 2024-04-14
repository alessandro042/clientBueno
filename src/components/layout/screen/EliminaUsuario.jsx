import React from 'react';
import { Button } from 'flowbite-react';
import Imagen from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import './estilos/style.css';

const EliminaUsuario = () => {
  const usuarios = [
    { correo: 'asasa@sas', nombre: 'hjhjjhj', rol:'admin'}
  ];

  return (
    <div>
      {/* Tabla de Usuarios */}
      <div className="p-4 mx-auto mt-8 max-w-4xl">
        <table className="w-full border-collapse border border-gray-300 bg-white">
          <thead>
            <tr>
              <th className="correo">Correo</th>
              <th className="nombre">Nombre(s)</th>
              <th className="rol">Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border border-gray-300 px-4 py-2">{usuario.correo}</td>
                <td className="border border-gray-300 px-4 py-2">{usuario.nombre}</td>
                <td className="border border-gray-300 px-4 py-2">{usuario.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <Button className="bg-blue-600 text-white px-4 py-2" style={{ backgroundColor: '#5790AB' }}>
          <Link to="/usuarios">Eliminar usuario</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EliminaUsuario;
