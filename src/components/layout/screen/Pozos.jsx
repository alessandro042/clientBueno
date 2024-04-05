import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import Imagen from '../../../assets/logo.png';
import { Chart } from 'react-google-charts';
import './estilos/style.css';

const Pozos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const pozos = [
    { grafica: 'asasa@sas', numero: 'hjhjjhj', ubicacion: 'ddsdsdsd', data: [['Task', 'Hours per Day'], ['Work', 11], ['Eat', 2], ['Commute', 2], ['Watch TV', 2], ['Sleep', 7]] },
    { grafica: 'dsdss@ass', numero: 'sasassa', ubicacion: 'asawqssa', data: [['Task', 'Hours per Day'], ['Work', 7], ['Eat', 5], ['Commute', 2], ['Watch TV', 4], ['Sleep', 6]] }
  ];

  const filteredPozos = pozos.filter(pozo =>
    pozo.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pozo.ubicacion.toLowerCase().includes(searchTerm.toLowerCase())
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
              placeholder="Buscar Pozo"
              className="bg-white px-4 py-2 rounded-md mr-4"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
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
      {menuOpen && (
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

      {/* Tabla de Pozos */}
      <div className="p-4 mx-auto mt-8 max-w-6xl">
        <table className="w-full border-collapse border border-gray-300 bg-white">
          <thead>
            <tr>
              <th className="grafica w-1/3"></th>
              <th className="numero">Número</th>
              <th className="ubicacion">Ubicación</th>
              <th className="acciones w-1/4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredPozos.map((pozo, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border border-gray-300 px-4 py-2">
                  <Chart
                    width={'100%'}
                    height={'200px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={pozo.data}
                    options={{
                      title: 'My Daily Activities',
                      // Justo aquí debajo está la modificación para quitar el fondo blanco del gráfico
                      pieSliceBorderColor: "transparent",
                    }}
                    rootProps={{ 'data-testid': '1' }}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">{pozo.numero}</td>
                <td className="border border-gray-300 px-4 py-2">{pozo.ubicacion}</td>
                <td className="border border-gray-300 px-4 py-1 flex justify-center items-center">
                  <Button style={{ background: "#5790AB" }} className='shadow btn-sm w-auto h-auto px-1 py-0.5 text-sm mr-2' type="submit">Consultar</Button>
                  <Button style={{ background: "#5790AB" }} className='shadow btn-sm w-auto h-auto px-1 py-0.5 text-sm mr-2' type="submit">Modificar</Button>
                  <Button style={{ background: "#5790AB" }} className='shadow btn-sm w-auto h-auto px-1 py-0.5 text-sm' type="submit">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pozos;
