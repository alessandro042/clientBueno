import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import Imagen from "../../../assets/logo.png";
import "./estilos/style.css";
import { Link } from "react-router-dom";

const ModificaUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);

  //Obtenemos token:
  const getToken = () => {
    console.log(localStorage.getItem("token"));
    return localStorage.getItem("token");
  };

  //Obtenemos usuarios:
  const getUsuarios = async () => {
    const token = getToken();
    const response = await fetch("http://localhost:8080/api/person/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data.data);
    setUsuarios(data.data);
  };

  //Obtener id de usuario:
  const getIdUsuario = () => {
    return localStorage.getItem("id");
  };

  const cambiarRol = async (id, rol) => {
    const token = getToken();
    const response = await fetch(`http://localhost:8080/api/person/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ rol: rol }),
    });
    const data = await response.json();
    console.log(data);
  }

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

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <div>
      <div className="p-4 mx-auto mt-8 max-w-4xl">
        <table className="w-full border-collapse border border-gray-300 bg-white">
          <thead>
            <tr>
              <th className="nombre">Nombre(s)</th>
              <th className="apellido">Apellido(s)</th>
              <th className="rol">Rol</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <Button
            className="bg-blue-600 text-white px-4 py-2"
            style={{ backgroundColor: "#5790AB" }}
          >
            <Link to="/usuarios">Modificar datos</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModificaUsuario;
