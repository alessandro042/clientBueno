import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import Imagen from "../../../assets/logo.png";
import "./estilos/style.css";
import { Link } from "react-router-dom";

const Usuarios = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
                      {usuario.name} {usuario.surname}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {usuario.user.roles[0].name}
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
                        >
                          <Link to="/eliminausuario">Eliminar</Link>
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
