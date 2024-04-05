import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import Imagen from '../../../assets/logo.png';
import './estilos/style.css';

const Usuarios = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [usuarios, setUsuarios] = useState([
    { correo: 'asasa@sas', nombreUsuario: 'hjhjjhj', area: 'ddsdsdsd' },
    { correo: 'dsdss@ass', nombreUsuario: 'sasassa', area: 'asawqssa'}
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const filteredUsuarios = usuarios.filter(usuario =>
    usuario.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.nombreUsuario.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="flex items-center"> {/* Contenedor botón de menú hamburguesa */}
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
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
      
      {/* Menú desplegable */}
      {menuAbierto && (
        <div className="absolute right-0 mt-12 mr-4 bg-white border border-gray-300 rounded shadow-md">
          <ul className="list-none">
            <li>
              <button className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>Registrar Nuevo Pozo</button>
            </li>
            <li>
              <button className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>Regresar al Menú</button>
            </li>
            <li>
              <button className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>Ir a Gestión de Pozos</button>
            </li>
            <li>
              <button className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>Cerrar Sesión</button>
            </li>
          </ul>
        </div>
      )}
      {/* Tabla de Usuarios */}
      <div className="p-4 mx-auto mt-8 max-w-4xl">
        <table className="w-full border-collapse border border-gray-300 bg-white">
          <thead>
            <tr>
              <th className="correo">Correo</th>
              <th className="nombreUsuario">Nombre de Usuario</th>
              <th className="area">Área</th>
              <th className="acciones">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsuarios.map((usuario, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border border-gray-300 px-4 py-2">{usuario.correo}</td>
                <td className="border border-gray-300 px-4 py-2">{usuario.nombreUsuario}</td>
                <td className="border border-gray-300 px-4 py-2">{usuario.area}</td>
                <td className="border border-gray-300 px-4 py-1 flex justify-between items-center">
                  <Button style={{ background: "#5790AB" }} className='shadow btn-sm' type="submit">Modificar</Button>
                  <Button style={{ background: "#5790AB" }} className='shadow btn-sm' type="submit">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Usuarios;
