import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import Imagen from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const ModificaPozo = () => {
    const [selectedEstatus, setSelectedEstatus] = useState([]);
    if (selectedEstatus.value === "true") {
        selectedEstatus.value = true;
    } else if (selectedEstatus.value === "false") {
        selectedEstatus.value = false;
    }

    const [pozo, setPozo] = useState(null);
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevoProfundidad, setNuevoProfundidad] = useState("");
    const [nuevoCapacidadLitros, setNuevoCapacidadLitros] = useState("");
    const [nuevoPorcentajeAgua, setNuevoPorcentajeAgua] = useState("");
    const [nuevaUbicacionPozo, setNuevaUbicacionPozo] = useState("");
    const [nuevaComunidades, setNuevaComunidades] = useState("");
    const [nuevoEstatus, setNuevoEstatus] = useState("");

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

    //funcion para cambiar el nombre del pozo
    const updateNombre = async () => {
        try {
            console.log("put del pozo", getIdPozo());
            const token = getToken();
            const id = getIdPozo();
            const response = await fetch(`http://localhost:8080/api/pozos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    nombre: nuevoNombre,
                    capacidadLitros: pozo.capacidadLitros,
                    comunidades: pozo.comunidades,
                    profundidad: pozo.profundidad,
                    ubicacionPozo: pozo.ubicacionPozo,
                }),
            });
            const data = await response.json();
            console.log("Respuesta: ", data);
            setPozo((prevPozo) => ({
                ...prevPozo,
                nombre: nuevoNombre,
            }));
            setNuevoNombre(""); // Limpiar el campo de nuevo nombre después de la actualización  
        } catch (error) {
            console.error("Error al actualizar el nombre del pozo: ", error);
        };
    };

    //funcion para cambiar la profundidad del pozo
    const updateProfundidad = async () => {
        console.log("put del pozo", getIdPozo());
        const token = getToken();
        const id = getIdPozo();
        const response = await fetch(`http://localhost:8080/api/pozos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                profundidad: nuevoProfundidad,
                capacidadLitros: pozo.capacidadLitros,
                comunidades: pozo.comunidades,
                profundidad: pozo.profundidad,
                ubicacionPozo: pozo.ubicacionPozo,
                nombre: pozo.nombre,
            }),
        });
        const data = await response.json();
        console.log("Respuesta: ", data);
        setPozo((prevPozo) => ({
            ...prevPozo,
            profundidad: nuevoProfundidad,
        }));
        setNuevoProfundidad(""); // Limpiar el campo de nuevo nombre después de la actualización
    };

    //funcion para cambiar la capacidad de litros del pozo
    const updateCapacidadLitros = async () => {
        console.log("put del pozo", getIdPozo());
        const token = getToken();
        const id = getIdPozo();
        const response = await fetch(`http://localhost:8080/api/pozos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                capacidadLitros: nuevoCapacidadLitros,
                profundidad: pozo.profundidad,
                porcentajeAgua: pozo.porcentajeAgua,
                ubicacionPozo: pozo.ubicacionPozo,
                comunidades: pozo.comunidades,
                estatus: pozo.estatus,
                nombre: pozo.nombre,
            }),
        });
        const data = await response.json();
        console.log("Respuesta: ", data);
        setPozo((prevPozo) => ({
            ...prevPozo,
            capacidadLitros: nuevoCapacidadLitros,
        }));
        setNuevoCapacidadLitros(""); // Limpiar el campo de nuevo nombre después de la actualización
    };

    //funcion para cambiar el porcentaje de agua del pozo
    const updatePorcentajeAgua = async () => {
        console.log("put del pozo", getIdPozo());
        const token = getToken();
        const id = getIdPozo();
        const response = await fetch(`http://localhost:8080/api/pozos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                porcentajeAgua: nuevoPorcentajeAgua,
                profundidad: pozo.profundidad,
                capacidadLitros: pozo.capacidadLitros,
                ubicacionPozo: pozo.ubicacionPozo,
                comunidades: pozo.comunidades,
                estatus: pozo.estatus,
                nombre: pozo.nombre,


            }),
        });
        const data = await response.json();
        console.log("Respuesta: ", data);
        setPozo((prevPozo) => ({
            ...prevPozo,
            porcentajeAgua: nuevoPorcentajeAgua,
        }));
        setNuevoPorcentajeAgua(""); // Limpiar el campo de nuevo nombre después de la actualización
    };

    //funcion para cambiar la ubicacion del pozo
    const updateUbicacionPozo = async () => {
        console.log("put del pozo", getIdPozo());
        const token = getToken();
        const id = getIdPozo();
        const response = await fetch(`http://localhost:8080/api/pozos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                ubicacionPozo: nuevaUbicacionPozo,
                profundidad: pozo.profundidad,
                capacidadLitros: pozo.capacidadLitros,
                porcentajeAgua: pozo.porcentajeAgua,
                comunidades: pozo.comunidades,
                estatus: pozo.estatus,
                nombre: pozo.nombre,
            }),
        });
        const data = await response.json();
        console.log("Respuesta: ", data);
        setPozo((prevPozo) => ({
            ...prevPozo,
            ubicacionPozo: nuevaUbicacionPozo,
        }));
        setNuevaUbicacionPozo(""); // Limpiar el campo de nuevo nombre después de la actualización
    };

    //funcion para cambiar las comunidades del pozo
    const updateComunidades = async () => {
        console.log("put del pozo", getIdPozo());
        const token = getToken();
        const id = getIdPozo();
        const response = await fetch(`http://localhost:8080/api/pozos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                comunidades: nuevaComunidades,
                profundidad: pozo.profundidad,
                capacidadLitros: pozo.capacidadLitros,
                porcentajeAgua: pozo.porcentajeAgua,
                ubicacionPozo: pozo.ubicacionPozo,
                estatus: pozo.estatus,
                nombre: pozo.nombre,

            }),
        });
        const data = await response.json();
        console.log("Respuesta: ", data);
        setPozo((prevPozo) => ({
            ...prevPozo,
            comunidades: nuevaComunidades,
        }));
        setNuevaComunidades(""); // Limpiar el campo de nuevo nombre después de la actualización
    };

    //funcion para cambiar el estatus del pozo 
    const updateEstatus = async () => {
        console.log("put del pozo", getIdPozo());
        const token = getToken();
        const id = getIdPozo();
        const response = await fetch(`http://localhost:8080/api/pozos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                estatus: nuevoEstatus,
                profundidad: pozo.profundidad,
                capacidadLitros: pozo.capacidadLitros,
                porcentajeAgua: pozo.porcentajeAgua,
                ubicacionPozo: pozo.ubicacionPozo,
                comunidades: pozo.comunidades,
                nombre: pozo.nombre,

            }),
        });
        const data = await response.json();
        console.log("Respuesta: ", data);
        setPozo((prevPozo) => ({
            ...prevPozo,
            estatus: nuevoEstatus,
        }));
        setNuevoEstatus(""); // Limpiar el campo de nuevo nombre después de la actualización
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
                            <th className="nombre">Nombre Pozo</th>
                            <th className="capacidadLitros">Capacidad</th>
                            <th className="profundidad">Profundidad</th>
                            <th className="porcentajeAgua">Porcentaje Agua</th>
                            <th className="ubicacionPozo">Ubicacion</th>
                            <th className="comunidades">Comunidades</th>
                            <th className="estatus">Estatus</th>
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
                    <div className="flex items-center mr-4">
                        <input
                            type="text"
                            placeholder="Nuevo nombre"
                            value={nuevoNombre}
                            onChange={(e) => setNuevoNombre(e.target.value)}
                            className="mr-1"
                        />
                    </div>
                    <div className="flex items-center mr-4">
                        <input
                            type="number"
                            placeholder="Nueva Capacidad Litros"
                            value={nuevoCapacidadLitros}
                            onChange={(e) => setNuevoCapacidadLitros(e.target.value)}
                            className="mr-2"
                        />
                    </div>
                    <div className="flex items-center mr-4">
                        <input
                            type="number"
                            placeholder="Nueva Profundidad"
                            value={nuevoProfundidad}
                            onChange={(e) => setNuevoProfundidad(e.target.value)}
                            className="mr-2"
                        />
                    </div>
                    <div className="flex items-center mr-4">
                        <input
                            type="number"
                            placeholder="Nuevo Porcentaje Agua"
                            value={nuevoPorcentajeAgua}
                            onChange={(e) => setNuevoPorcentajeAgua(e.target.value)}
                            className="mr-2"
                        />
                    </div>
                    <div className="flex items-center mr-4">
                        <input
                            type="text"
                            placeholder="Nueva Ubicacion"
                            value={nuevaUbicacionPozo}
                            onChange={(e) => setNuevaUbicacionPozo(e.target.value)}
                            className="mr-2"
                        />
                    </div>
                    <div className="flex items-center mr-4">
                        <input
                            type="text"
                            placeholder="Nueva Comunidad"
                            value={nuevaComunidades}
                            onChange={(e) => setNuevaComunidades(e.target.value)}
                            className="mr-2"
                        />
                    </div>
                    <div className="flex items-center">
                        <select
                            value={nuevoEstatus}
                            onChange={(e) => setNuevoEstatus(e.target.value)}
                            className="mr-2"
                        >
                            <option value="">Selecciona un estatus</option>
                            <option value="true">Activo</option>
                            <option value="false">Inactivo</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <div className="flex items-center mr-4">
                        <Button color="blue" size="sm" onClick={updateNombre}>
                            Cambiar Nombre
                        </Button>
                    </div>
                    <div className="flex items-center mr-4">
                        <Button color="blue" size="sm" onClick={updateCapacidadLitros}>
                            Cambiar Capacidad Litros
                        </Button>
                    </div>
                    <div className="flex items-center mr-4">
                        <Button color="blue" size="sm" onClick={updateProfundidad}>
                            Cambiar profundidad
                        </Button>
                    </div>
                    <div className="flex items-center mr-4">
                        <Button color="blue" size="sm" onClick={updatePorcentajeAgua}>
                            Cambiar Porcentaje Agua
                        </Button>
                    </div>
                    <div className="flex items-center mr-4">
                        <Button color="blue" size="sm" onClick={updateUbicacionPozo}>
                            Cambiar Ubicacion
                        </Button>
                    </div>
                    <div className="flex items-center mr-4">
                        <Button color="blue" size="sm" onClick={updateComunidades}>
                            Cambiar Comunidades
                        </Button>
                    </div>
                    <div className="flex items-center">
                        <Button color="blue" size="sm" onClick={updateEstatus}>
                            Cambiar Estatus
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ModificaPozo;