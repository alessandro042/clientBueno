import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import Imagen from '../../../assets/logo.png';
import './estilos/style.css';
import { Link } from 'react-router-dom';

const Usuarios = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [usuarios, setUsuarios] = useState([
    { correo: 'asasa@sas', nombreUsuario: 'hjhjjhj', area: 'ddsdsdsd' },
    { correo: 'dsdss@ass', nombreUsuario: 'sasassa', area: 'asawqssa'}
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsuarios = usuarios.filter(usuario =>
    usuario.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.nombreUsuario.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Navbar SIMNA cpr*/}
      <nav className="bg-white w-full p-4 flex justify-between items-center">
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
      </nav>
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
                  <Button style={{ background: "#5790AB" }} className='shadow btn-sm' type="submit">
                    <Link to="/modificacionusuario">Modificar</Link>
                  </Button>
                  <Button style={{ background: "#5790AB" }} className='shadow btn-sm' type="submit">
                    <Link to="/eliminausuario">Eliminar</Link>
                  </Button>
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
