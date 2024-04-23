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
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="p-6 bg-white rounded-lg shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden bg-white border border-gray-300 shadow-md">
                <div className="p-4 border-b border-gray-300">
                  {/* Título estilizado "Información del Pozo" */}
                  <h3 className="text-lg font-bold" style={{ color: '#06427C' }}>Información del Pozo</h3>
                </div>
                <div className="p-4">
                  {/* Información del pozo */}
                  <p className="mb-4"><span className="font-bold" style={{ color: '#1269BB' }}>Nombre Pozo:</span> {pozo && pozo.nombre}</p>
                  <p className="mb-4"><span className="font-bold" style={{ color: '#1269BB' }}>Capacidad:</span> {pozo && pozo.capacidadLitros}</p>
                  <p className="mb-4"><span className="font-bold" style={{ color: '#1269BB' }}>Porcentaje Agua:</span> {pozo && pozo.porcentajeAgua}</p>
                  <p className="mb-4"><span className="font-bold" style={{ color: '#1269BB' }}>Ubicación:</span> {pozo && pozo.ubicacionPozo}</p>
                  <p className="mb-4"><span className="font-bold" style={{ color: '#1269BB' }}>Comunidades:</span> {pozo && pozo.comunidades}</p>
                  <p><span className="font-bold" style={{ color: '#1269BB' }}>Estatus:</span> {pozo && pozo.estatus}</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                {/* Campos de actualización */}
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Nuevo nombre"
                    value={nuevoNombre}
                    onChange={(e) => setNuevoNombre(e.target.value)}
                    className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                  />
                  <Button color="blue" size="sm" onClick={updateNombre}>
                    Cambiar Nombre
                  </Button>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    placeholder="Nueva Capacidad Litros"
                    value={nuevoCapacidadLitros}
                    onChange={(e) => setNuevoCapacidadLitros(e.target.value)}
                    className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                  />
                  <Button color="blue" size="sm" onClick={updateCapacidadLitros}>
                    Cambiar Capacidad Litros
                  </Button>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    placeholder="Nuevo Porcentaje Agua"
                    value={nuevoPorcentajeAgua}
                    onChange={(e) => setNuevoPorcentajeAgua(e.target.value)}
                    className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                  />
                  <Button color="blue" size="sm" onClick={updatePorcentajeAgua}>
                    Cambiar Porcentaje Agua
                  </Button>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Nueva Ubicacion"
                    value={nuevaUbicacionPozo}
                    onChange={(e) => setNuevaUbicacionPozo(e.target.value)}
                    className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                  />
                  <Button color="blue" size="sm" onClick={updateUbicacionPozo}>
                    Cambiar Ubicacion
                  </Button>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Nueva Comunidad"
                    value={nuevaComunidades}
                    onChange={(e) => setNuevaComunidades(e.target.value)}
                    className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                  />
                  <Button color="blue" size="sm" onClick={updateComunidades}>
                    Cambiar Comunidades
                  </Button>
                </div>
                <div className="flex items-center">
                  <select
                    value={nuevoEstatus}
                    onChange={(e) => setNuevoEstatus(e.target.value)}
                    className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                  >
                    <option value="">Selecciona un estatus</option>
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
                  </select>
                  <Button color="blue" size="sm" onClick={updateEstatus}>
                    Cambiar Estatus
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      





};

export default ModificaPozo;