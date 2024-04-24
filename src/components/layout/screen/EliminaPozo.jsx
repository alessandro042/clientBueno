import React, { useEffect, useState } from "react";
import { Button } from 'flowbite-react';
import Imagen from '../../../assets/logo.png';
import './estilos/style.css';
import { Link } from 'react-router-dom';
import { confirmAlert, customAlert } from '../../../config/alerts/alert';

const EliminaPozo = () => {
    const [pozo, setPozo] = useState({});

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
    
    const deletePozo = async () => {
        confirmAlert(async () => {
            const token = getToken();
            const id = getIdPozo();
            try {
                const response = await fetch(`http://localhost:8080/api/pozos/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                console.log(data);
                setPozo(data);
                customAlert("Error", "Error al eliminar Pozo", "error");
            } catch (error) {
                customAlert("Éxito", "Pozo eliminado exitosamente", "success");
                setError("Pozo eliminado con éxito");
            }
        });
    }

    useEffect(() => {
        getPozo();
    }, []);

    return (
        <div>
            <div className="p-4 mx-auto mt-8 max-w-4xl">
                <table className="w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                        <tr>
                            <th className="correo">Nombre</th>
                            <th className="correo">Capacidad</th>
                            <th className="nombre">Ubicación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pozo && (
                            <tr key={pozo.id}>
                                <td className="border border-gray-300 px-4 py-2">{pozo.nombre}</td>
                                <td className="border border-gray-300 px-4 py-2">{pozo.capacidadLitros}</td>
                                <td className="border border-gray-300 px-4 py-2">{pozo.ubicacionPozo}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    <Button className="bg-blue-600 text-white px-4 py-2" style={{ backgroundColor: '#5790AB' }} onClick={deletePozo}>
                        Eliminar
                    </Button>
                    <Button className="bg-blue-600 text-white px-4 py-2 mx-2" style={{ backgroundColor: '#5790AB' }}>
                        <Link to="/pozos">Volver</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default EliminaPozo;