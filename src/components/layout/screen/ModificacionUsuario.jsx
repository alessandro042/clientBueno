import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import Imagen from "../../../assets/logo.png";
import "./estilos/style.css";
import { Link } from "react-router-dom";

const ModificaUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [roles, setRoles] = useState([]);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoApellidoM, setNuevoApellidoM] = useState("");
  const [nuevoApellidoP, setNuevoApellidoP] = useState("");
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

  const getRoles = async () => {
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
    console.log(data.data.user.roles[0].name);
    setRoles(data.data.user.roles[0].name);
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
        curp: usuario.curp,
        surname: usuario.surname,
        lastname: usuario.lastname,
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
  const cambiarApellidoM = async () => {
    const token = getToken();
    const id = getIdUsuario();
    const response = await fetch(`http://localhost:8080/api/person/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        surname: nuevoApellidoM,
        birthdate: usuario.birthdate, // Incluir la fecha de nacimiento actual
        curp: usuario.curp,
        name: usuario.name,
        lastname: usuario.lastname,
      }),
    });
    const data = await response.json();
    console.log(data);
    // Actualizar el estado del usuario con el nuevo apellido
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      surname: nuevoApellidoM,
    }));
    setNuevoApellidoM(""); // Limpiar el campo de nuevo apellido después de la actualización
  };

  const cambiarApellidoP = async () => {
    const token = getToken();
    const id = getIdUsuario();
    const response = await fetch(`http://localhost:8080/api/person/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        lastname: nuevoApellidoP,
        birthdate: usuario.birthdate, // Incluir la fecha de nacimiento actual
        curp: usuario.curp,
        name: usuario.name,
        surname: usuario.surname,
      }),
    });
    const data = await response.json();
    console.log(data);
    // Actualizar el estado del usuario con el nuevo apellido
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      lastname: nuevoApellidoP,
    }));
    setNuevoApellidoP(""); // Limpiar el campo de nuevo apellido después de la actualización
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
      body: JSON.stringify({
        birthdate: usuario.birthdate, // Incluir la fecha de nacimiento actual
        curp: usuario.curp,
        name: usuario.name,
        surname: usuario.surname,
        roles: nuevoRol,
      }),
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
    getRoles();
  }, []);

  if (!usuario) {
    return <div>Cargando usuario...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <nav className="flex absolute top-8 justify-center">
          <div className="flex items-center justify-center absolute top-16">
           <h2 className="font-bold" style={{ fontSize: '28px', color: '#072D44', padding:'10px' }}> Actualizar </h2>
           <h2 className="font-bold" style={{ fontSize: '28px', color: 'blue' }}> </h2>
           <h2 className="font-bold" style={{ fontSize: '28px', color: 'blue' }}> Usuario</h2>
        </div>
      </nav>
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg overflow-hidden bg-white border border-gray-300 shadow-md">
          <div className="p-4 border-b border-gray-300">
            <h3 className="text-lg font-bold" style={{ color: '#06427C' }}>Información del Usuario</h3>
          </div>
          <div className="p-4">
            {/* Información del user */}
            <p className="mb-4"><span className="font-bold" style={{ color: '#1269BB' }}>Nombre(s):</span> {usuario.name}</p>
            <p className="mb-4"><span className="font-bold" style={{ color: '#1269BB' }}>Apellido Paterno:</span> {usuario.lastname}</p>
            <p className="mb-4"><span className="font-bold" style={{ color: '#1269BB' }}>Apellido Materno:</span> {usuario.surname}</p>
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
            <Button color="blue" size="sm" onClick={cambiarNombre}>
              Cambiar Nombre
            </Button>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Nuevo apellido P"
              value={nuevoApellidoP}
              onChange={(e) => setNuevoApellidoP(e.target.value)}
              className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
            <Button color="blue" size="sm" onClick={cambiarApellidoP}>
              Cambiar Apellido Paterno
            </Button>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Nuevo apellido M"
              value={nuevoApellidoM}
              onChange={(e) => setNuevoApellidoP(e.target.value)}
              className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
            <Button color="blue" size="sm" onClick={cambiarApellidoM}>
              Cambiar Apellido Materno
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Link to="/usuarios" className="text-cyan-700 py-2 font-semibold text-sm px-4 border-none absolute top-4">
                    Regresar
                </Link>
  </div>











    /*
    <div>
      <div className="p-4 mx-auto mt-8 max-w-4xl">
        <table className="w-full border-collapse border border-gray-300 bg-white">
          <thead>
            <tr>
              <th className="nombre">Nombre(s)</th>
              <th className="apellido">Apellido Paterno:</th>
              <th className="apellidoM">Apellido Materno:</th>
              <th className="rol">Rol</th>
            </tr>
          </thead>
          <tbody>
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
              <td>{usuario.lastname}</td>
              <td>{usuario.surname}</td>
              <td>{usuario.user.roles[0].name}</td>
            </tr>
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
              type="text"
              placeholder="Nuevo apellido P"
              value={nuevoApellidoP}
              onChange={(e) => setNuevoApellidoP(e.target.value)}
              className="mr-2"
            />
          </div>
          <div className="flex items-center mr-4">
            <input
              type="text"
              placeholder="Nuevo apellido M"
              value={nuevoApellidoM}
              onChange={(e) => setNuevoApellidoM(e.target.value)}
              className="mr-2"
            />
          </div>
          <div className="flex items-center">
            <select
              value={nuevoRol}
              onChange={(e) => setNuevoRol(e.target.value)}
              className="mr-2"
            >
              <option value="">Selecciona un rol</option>
              <option value="ADMIN_ROLE">Admin</option>
              <option value="USER_ROLE">User</option>
              <option value="CLIENT_ROLE">Supervisor</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="flex items-center mr-4">
            <Button color="blue" size="sm" onClick={cambiarNombre}>
              Cambiar Nombre
            </Button>
          </div>
          <div className="flex items-center mr-4">
            <Button color="blue" size="sm" onClick={cambiarApellidoP}>
              Cambiar Apellido Paterno
            </Button>
          </div>
          <div className="flex items-center mr-4">
            <Button color="blue" size="sm" onClick={cambiarApellidoM}>
              Cambiar Apellido Materno
            </Button>
          </div>
          <div className="flex items-center">
            <Button color="blue" size="sm" onClick={cambiarRol}>
              Cambiar Rol
            </Button>
          </div>
        </div>
      </div>
    </div>

    
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
      type="text"
      placeholder="Nuevo apellido"
      value={nuevoApellidoP}
      onChange={(e) => setNuevoApellidoP(e.target.value)}
      className="mr-2"
    />
  </div>
  <div className="flex items-center mr-4">
    <input
      type="text"
      placeholder="Nuevo apellido"
      value={nuevoApellidoM}
      onChange={(e) => setNuevoApellidoM(e.target.value)}
      className="mr-2"
    />
  </div>
  <div className="flex items-center">
    <select
      value={nuevoRol}
      onChange={(e) => setNuevoRol(e.target.value)}
      className="mr-2"
    >
      <option value="">Selecciona un rol</option>
      <option value="ADMIN_ROLE">Admin</option>
      <option value="USER_ROLE">User</option>
      <option value="CLIENT_ROLE">Supervisor</option>
    </select>
  </div>
</div>

<div className="flex justify-center mt-4">
  <div className="flex items-center mr-4">
    <Button color="blue" size="sm" onClick={cambiarNombre}>
      Cambiar Nombre
    </Button>
  </div>
  <div className="flex items-center mr-4">
    <Button color="blue" size="sm" onClick={cambiarApellidoP}>
      Cambiar Apellido Paterno
    </Button>
  </div>
  <div className="flex items-center mr-4">
    <Button color="blue" size="sm" onClick={cambiarApellidoM}>
      Cambiar Apellido Materno
    </Button>
  </div>
  <div className="flex items-center">
    <Button color="blue" size="sm" onClick={cambiarRol}>
      Cambiar Rol
    </Button>
  </div>
</div>
*/
  );
};

export default ModificaUsuario;
