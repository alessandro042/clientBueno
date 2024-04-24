import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import "./estilos/style.css";

const Usuarios = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [rolesCount, setRolesCount] = useState({});
  const [adminId, setAdminId] = useState([]);
  const [clientId, setClientId] = useState([]);
  const [userId, setUserId] = useState([]);
  const [adminName, setAdminName] = useState([]);
  const [clientName, setClientName] = useState([]);
  const [userName, setUserName] = useState([]);

  //Obtenemos token:
  const getToken = () => {
    console.log(localStorage.getItem("token"));
    return localStorage.getItem("token");
  };

  //Obtenemos id de roles:
  const getIdRolAdmin = async () => {
    const token = getToken();
    const response = await fetch("http://localhost:8080/api/role/ADMIN_ROLE", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data.data.id);
    setAdminId(data.data.id);
  };

  const getIdRolClient = async () => {
    const token = getToken();
    const response = await fetch("http://localhost:8080/api/role/CLIENT_ROLE", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data.data.id);
    setClientId(data.data.id);
  };

  const getIdRolUser = async () => {
    const token = getToken();
    const response = await fetch("http://localhost:8080/api/role/USER_ROLE", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data.data.id);
    setUserId(data.data.id);
  };

  const getNameAdmin = async () => {
    const token = getToken();
    const response = await fetch("http://localhost:8080/api/role/ADMIN_ROLE", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setAdminName(data.data.name); // Cambia setAdminId(data.data.id); por setAdminId(data.data.name);
  };

  const getNameClient = async () => {
    const token = getToken();
    const response = await fetch("http://localhost:8080/api/role/CLIENT_ROLE", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data.data);
    setClientName(data.data.name); // Cambia setClientId(data.data.id); por setClientId(data.data.name);
  };

  const getNameUser = async () => {
    const token = getToken();
    const response = await fetch("http://localhost:8080/api/role/USER_ROLE", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data.data);
    setUserName(data.data.name); // Cambia setUserId(data.data.id); por setUserId(data.data.name);
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
    const modifiedUsuarios = data.data.map((usuario) => {
      if (
        usuario.user.roles.length > 0 &&
        usuario.user.roles[0].name === "CLIENT_ROLE"
      ) {
        usuario.user.roles[0].name = "USER_ROLE";
      }
      return usuario;
    });
    setUsuarios(modifiedUsuarios);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <div>
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
      <div className="p-4 mx-auto mt-8 max-w-4xl">
        <table className="w-full border-collapse border border-gray-300 bg-white">
          <thead>
            <tr>
              <th className="nombreUsuario">Nombre de Usuario</th>
              <th className="area">Rol</th>
              <th className="acciones">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(usuarios) && usuarios.length > 0 ? (
              usuarios
                .filter((usuario) => {
                  if (searchTerm === "") {
                    return usuario;
                  } else if (
                    usuario.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return usuario;
                  }
                })
                .map((usuario, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {usuario.name} {usuario.surname} {usuario.lastname}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {usuario.user.roles.length > 0
                        ? usuario.user.roles.map((role) => role.name).join(", ")
                        : "Sin rol"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <td className="px-4 py-1 flex justify-between items-center">
                        <Link to={`/modificacionusuario/${usuario.id}`}>
                          <Button
                            style={{ background: "#5790AB" }}
                            className="shadow btn-sm"
                            type="submit"
                            onClick={() => {
                              localStorage.setItem("id", usuario.id);
                            }}
                          >
                            Modificar
                          </Button>
                        </Link>
                        <Button
                          style={{ background: "#5790AB" }}
                          className="shadow btn-sm"
                          type="submit"
                          disabled={
                            usuario &&
                            usuario.user &&
                            usuario.user.roles &&
                            usuario.user.roles.length > 0 &&
                            rolesCount[usuario.user.roles[0].name] === 1 // Deshabilitar el botón si el count es 1
                          }
                          onClick={() => {
                            localStorage.setItem("idAeliminar", usuario.id);
                          }}
                        >
                          <Link to={`/eliminausuario/${usuario.id}`}>
                            Eliminar
                          </Link>
                        </Button>
                      </td>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="3" className="border border-gray-300 px-4 py-2">
                  No hay usuarios
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Usuarios;
