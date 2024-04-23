import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import Imagen from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./estilos/style.css";

const EliminaUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [rol, setRol] = useState("");

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const getIdUsuario = () => localStorage.getItem("idAeliminar");

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
    setRol(data.data.user.roles[0].name);
    setUsuario(data.data);
  };

  const getRoles = async () => {
    return localStorage.getItem("user");
  };

  const deleteUsuario = async (id) => {
    const token = getToken();

    // Check if the user's role is not "admin"
    console.log(usuario?.user?.roles[0]?.name);
    if (usuario?.user?.roles[0]?.name !== "ADMIN_ROLE") {
      const response = await fetch(`http://localhost:8080/api/person/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        window.location.href = "/usuarios";
      }
    } else {
      console.log("Cannot delete admin role");
    }
  };


  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    getUsuario();
    getRoles();
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
            <tr key={usuario?.id}>
              <td>
                <span className="ml-2">{usuario?.name}</span>
                <span className="ml-2">{usuario?.surname}</span>
                <span className="ml-2">{usuario?.lastname}</span>
              </td>
              <td> {usuario?.user?.roles[0]?.name}</td>
              <td>
                <div className="flex">
                  <Button
                    className="mr-2"
                    onClick={() => deleteUsuario(usuario?.id)}
                  >
                    Eliminar
                  </Button>
                  <Link to="/usuarios">
                    <Button>Cancelar</Button>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EliminaUsuario;
