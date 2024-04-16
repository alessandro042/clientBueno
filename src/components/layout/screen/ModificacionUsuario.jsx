import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import Imagen from "../../../assets/logo.png";
import "./estilos/style.css";
import { Link } from "react-router-dom";

const ModificaUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoApellido, setNuevoApellido] = useState("");
  const [nuevoRol, setNuevoRol] = useState("");

  // Obtenemos token y ID de usuario
  const getToken = () => localStorage.getItem("token");
  const getIdUsuario = () => localStorage.getItem("id");

  // Obtener datos del usuario
  const getUsuario = async () => {
    const token = getToken();
    const id = getIdUsuario();
    const response = await fetch(`http://localhost:8080/api/person/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data.data);
    setUsuario(data.data);
  };

  // Función para modificar el nombre
  const cambiarNombre = async () => {
    console.log("Cambiando nombre id: ", getIdUsuario());
    const token = getToken();
    const id = getIdUsuario();
    const response = await fetch(`http://localhost:8080/api/person/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: nuevoNombre,
        birthdate: usuario.birthdate, // Incluir la fecha de nacimiento actual
        curp : usuario.curp,
        surname: usuario.surname,
      }),
    });
    const data = await response.json();
    console.log("Respuesta: ", data);
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      name: nuevoNombre,
    }));
    setNuevoNombre(""); // Limpiar el campo de nuevo nombre después de la actualización
  };

  // Función para modificar el apellido
  const cambiarApellido = async () => {
    const token = getToken();
    const id = getIdUsuario();
    const response = await fetch(`http://localhost:8080/api/person/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        apellido: nuevoApellido,
        birth_date: usuario.birthdate, // Incluir la fecha de nacimiento actual
      }),
    });
    const data = await response.json();
    console.log(data);
    // Actualizar el estado del usuario con el nuevo apellido
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      surname: nuevoApellido,
    }));
    setNuevoApellido(""); // Limpiar el campo de nuevo apellido después de la actualización
  };

  // Función para modificar el rol
  const cambiarRol = async () => {
    const token = getToken();
    const id = getIdUsuario();
    const response = await fetch(`http://localhost:8080/api/person/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ rol: nuevoRol }),
    });
    const data = await response.json();
    console.log(data);
    // Actualizar el estado del usuario con el nuevo rol
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      user: {
        ...prevUsuario.user,
        roles: [{ name: nuevoRol }],
      },
    }));
    setNuevoRol(""); // Limpiar el campo de nuevo rol después de la actualización
  };

  useEffect(() => {
    getUsuario();
  }, []);

  if (!usuario) {
    return <div>Cargando usuario...</div>;
  }

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
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
              <td>{usuario.surname}</td>
              <td>{usuario.user.roles[0].name}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <div>
            <input
              type="text"
              placeholder="Nuevo nombre"
              value={nuevoNombre}
              onChange={(e) => setNuevoNombre(e.target.value)}
            />
            <Button
              className="bg-blue-600 text-white px-4 py-2 ml-2"
              style={{ backgroundColor: "#5790AB" }}
              onClick={cambiarNombre}
            >
              Cambiar Nombre
            </Button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Nuevo apellido"
              value={nuevoApellido}
              onChange={(e) => setNuevoApellido(e.target.value)}
            />
            <Button
              className="bg-blue-600 text-white px-4 py-2 ml-2"
              style={{ backgroundColor: "#5790AB" }}
              onClick={cambiarApellido}
            >
              Cambiar Apellido
            </Button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Nuevo rol"
              value={nuevoRol}
              onChange={(e) => setNuevoRol(e.target.value)}
            />
            <Button
              className="bg-blue-600 text-white px-4 py-2 ml-2"
              style={{ backgroundColor: "#5790AB" }}
              onClick={cambiarRol}
            >
              Cambiar Rol
            </Button>
          </div>
          <Button
            className="bg-blue-600 text-white px-4 py-2 ml-2"
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
