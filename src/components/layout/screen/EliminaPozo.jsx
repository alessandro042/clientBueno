import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import Imagen from '../../../assets/logo.png';
import './estilos/style.css';
import { Link } from 'react-router-dom';

const EliminaPozo = () => {
    const [pozo, setPozo] = useState(null);

    // Obtenemos token y ID de pozo
    const getToken = () => localStorage.getItem("token");
    const getIdPozo = () => localStorage.getItem("id");
    console.log("id pozo", getIdPozo());
    console.log("token", getToken());

    // Obtener datos del pozo
    const getPozo = async () => {
        const token = getToken();
        const id = getIdPozo();
        const response = await fetch(`http://localhost:8080/api/pozos/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        console.log(data);
        setPozo(data);
    };

    // Funcion para eliminar pozo
    const deletePozo = async () => {
        const token = getToken();
        const id = getIdPozo();
        const response = await fetch(`http://localhost:8080/api/pozos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        getPozo();
    }, []);

    return (
        <div>
            <div className="p-4 mx-auto mt-8 max-w-4xl">
                <table className="w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                        <tr>
                            <tr>
                                <th className="nombre">Nombre Pozo</th>
                                <th className="capacidadLitros">Capacidad</th>
                                <th className="profundidad">Profundidad</th>
                                <th className="porcentajeAgua">Porcentaje Agua</th>
                                <th className="ubicacionPozo">Ubicacion</th>
                                <th className="comunidades">Comunidades</th>
                                <th className="estatus">Estatus</th>
                            </tr>
                        </tr>
                    </thead>
                    <tbody>
                    {pozo && (
                            <tr key={pozo.id}>
                                <td>{pozo && pozo.nombre}</td>
                                <td>{pozo && pozo.capacidadLitros}</td>
                                <td>{pozo && pozo.profundidad}</td>
                                <td>{pozo && pozo.porcentajeAgua}</td>
                                <td>{pozo && pozo.ubicacionPozo}</td>
                                <td>{pozo && pozo.comunidades}</td>
                                <td>{pozo && pozo.estatus}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    <Button className="bg-blue-600 text-white px-4 py-2" style={{ backgroundColor: '#5790AB' }} onClick={deletePozo}>
                        <Link to="/pozos">Eliminar pozo</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default EliminaPozo;