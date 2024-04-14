import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import Imagen from '../../../assets/logo.png';
import './estilos/style.css';
import { Link } from 'react-router-dom';



const ModificaUsuario = () => {
  const [usuarios, setUsuarios] = useState([
    { correo: 'asasa@sas', nombre: 'hjhjjhj', rol: 'gestion' }
  ]);

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
              <Link to="/usuarios">Modificar datos</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModificaUsuario;
