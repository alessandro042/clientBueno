import React from 'react';
import { Button } from 'flowbite-react';
import Imagen from '../../../assets/logo.png';
import './estilos/style.css';

const ConsultaPozo = () => {
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
        <div className="flex justify-center flex-1"> 
          <div className="flex items-center"> 
            <input
              type="text"
              placeholder="Buscar Usuario"
              className="bg-white px-4 py-2 rounded-md mr-4"
            />
          </div>
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
          <Button className="bg-blue-600 text-white px-4 py-2" style={{ backgroundColor: '#5790AB' }}>Eliminar Usuario</Button>
        </div>
      </div>
    </div>
  );
}

export default ConsultaPozo;
