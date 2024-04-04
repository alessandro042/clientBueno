import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import Imagen from '../../assets/logo.png';
import './estilos/style.css';
import { Link } from 'react-router-dom';



const ModificaUsuario = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [usuarios, setUsuarios] = useState([
    { correo: 'asasa@sas', nombre: 'hjhjjhj', rol: 'gestion' }
  ]);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  //cambios en el campo de nombre
  const handleNombreChange = (index, value) => {
    const updatedUsuarios = [...usuarios];
    updatedUsuarios[index].nombre = value;
    setUsuarios(updatedUsuarios);
  };

  //cambios en el campo de correo
  const handleCorreoChange = (index, value) => {
    const updatedUsuarios = [...usuarios];
    updatedUsuarios[index].correo = value;
    setUsuarios(updatedUsuarios);
  };

  // cambios en el campo de rol
  const handleRolChange = (index, value) => {
    const updatedUsuarios = [...usuarios];
    updatedUsuarios[index].rol = value;
    setUsuarios(updatedUsuarios);
  };

  return (
    <div>
      {/* Navbar SIMNA cpr*/}
      <nav className="bg-blue-900 w-full p-4 flex justify-between items-center" style={{ background: "#072D44" }}>
        <div className="flex items-center">
          <img src={Imagen} alt="Logo" className="h-12 w-auto mr-4" /> 
          <h1 className="text-white font-bold text-lg">SIMNA</h1>
        </div>
        
        <div className="flex items-center"> 
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
              <th className="nombre">Nombre(s)</th>
              <th className="rol">Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={usuario.correo}
                    onChange={(e) => handleCorreoChange(index, e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={usuario.nombre}
                    onChange={(e) => handleNombreChange(index, e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <select
                    value={usuario.rol}
                    onChange={(e) => handleRolChange(index, e.target.value)}
                  >
                    <option value="gestion">Gestión</option>
                    <option value="administrador">Administrador</option>
                    <option value="informativo">Informativo</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <Button className="bg-blue-600 text-white px-4 py-2" style={{ backgroundColor: '#5790AB' }}>
              <Link to="Usuarios">Modificar datos</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModificaUsuario;
