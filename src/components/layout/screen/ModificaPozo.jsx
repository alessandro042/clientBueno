import React, { useState } from "react";
import { Button } from "flowbite-react";
import Imagen from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const ModificaPozo = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [usuarios, setUsuarios] = useState([
        {
            Ubicacion: "calle gardenias Col. Azteca Temixco Mor",
            nombre: "70%",
            rol: "1100 L",
            municipio: "Temixco",
            comunidad: "lomas de guadalupe",
        },
    ]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSaveChanges = () => {
        console.log("Cambios guardados");
    };

    const handleUbicacionChange = (index, event) => {
        const newUsuarios = [...usuarios];
        newUsuarios[index].Ubicacion = event.target.value;
        setUsuarios(newUsuarios);
    };

    const handleNivelChange = (index, event) => {
        const newUsuarios = [...usuarios];
        newUsuarios[index].nombre = event.target.value;
        setUsuarios(newUsuarios);
    };

    const handleCapacidadChange = (index, event) => {
        const newUsuarios = [...usuarios];
        newUsuarios[index].rol = event.target.value;
        setUsuarios(newUsuarios);
    };

    const handleMunicipioChange = (index, event) => {
        const newUsuarios = [...usuarios];
        newUsuarios[index].municipio = event.target.value;
        setUsuarios(newUsuarios);
    };

    const handleComunidadChange = (index, event) => {
        const newUsuarios = [...usuarios];
        newUsuarios[index].comunidad = event.target.value;
        setUsuarios(newUsuarios);
    };

    return (
        <div>
            {/* Navbar SIMNA cpr*/}
            <nav
                className="bg-blue-900 w-full p-4 flex justify-between items-center"
                style={{ background: "#072D44" }}
            >
                <div className="flex items-center">
                    <img src={Imagen} alt="Logo" className="h-12 w-auto mr-4" />
                    <h1 className="text-white font-bold text-lg">SIMNA</h1>
                </div>

                <div className="flex items-center">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
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
                            <button
                                className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200"
                                onClick={toggleMenu}
                            >
                                Registrar Nuevo Pozo
                            </button>
                        </li>
                        <li>
                            <button
                                className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200"
                                onClick={toggleMenu}
                            >
                                Regresar al Menú
                            </button>
                        </li>
                        <li>
                            <button
                                className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200"
                                onClick={toggleMenu}
                            >
                                Ir a Gestión de Pozos
                            </button>
                        </li>
                        <li>
                            <button
                                className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200"
                                onClick={toggleMenu}
                            >
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            <div className="flex justify-center mt-4">
                <div className="max-w-4xl w-full">
                    <table style={{ margin: "auto" }}>
                        <thead style={{ background: "#072D44" }}>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-white">
                                    Ubicación
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-white">
                                    Nivel
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-white">
                                    Capacidad
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-white">
                                    Municipio
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-white">
                                    Comunidades
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {usuarios.map((usuario, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                                >
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="text"
                                            value={usuario.Ubicacion}
                                            onChange={(event) => handleUbicacionChange(index, event)}
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="text"
                                            value={usuario.nombre}
                                            onChange={(event) => handleNivelChange(index, event)}
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="text"
                                            value={usuario.rol}
                                            onChange={(event) => handleCapacidadChange(index, event)}
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="text"
                                            value={usuario.municipio}
                                            onChange={(event) => handleMunicipioChange(index, event)}
                                        />
                                    </td>
                                    <td
                                        className="border border-gray-300 px-4 py-2"
                                        style={{ textAlign: "center" }}
                                    >
                                        <select
                                            className="bg-white px-2 py-1 rounded-md"
                                            value={usuario.comunidad}
                                            onChange={(event) => handleComunidadChange(index, event)}
                                        >
                                            <option value="lomas de guadalupe">
                                                Lomas de Guadalupe
                                            </option>
                                            <option value="lomas del carril">Lomas del Carril</option>
                                            <option value="pueblo viejo">Pueblo Viejo</option>
                                            <option value="temixco centro">Temixco Centro</option>
                                            <option value="Acatlipa">Acatlipa</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex justify-center mt-4">
                <Button
                    style={{ background: "#5790AB" }}
                    className="shadow btn-sm"
                    onClick={handleSaveChanges}
                >
                    <Link to="/pozos">Guardar Cambios</Link>
                </Button>
            </div>
        </div>
    );
};

export default ModificaPozo;