import React, { useEffect, useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import Select from "react-select";
import bcrypt from "bcryptjs";
import Imagen from "../../../assets/logo.png";
import { confirmAlert, customAlert } from '../../../config/alerts/alert';
import { Link } from "react-router-dom";

const RegistrarUsuario = () => {
  const [error, setError] = useState(null); // Nuevo estado para manejar errores
  const [adminId, setAdminId] = useState([]); // Nuevo estado para almacenar los roles disponibles
  const [clientId, setClientId] = useState([]); // Nuevo estado para almacenar los roles disponibles
  const [userId, setUserId] = useState([]); // Nuevo estado para almacenar los roles disponibles

  const getToken = () => {
    return localStorage.getItem("token");
  };

  // Obtener los roles disponibles
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

  // Post usuario
  const postUsuario = async (e) => {
    e.preventDefault();
    const token = getToken();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const lastname = document.getElementById("lastname").value;
    const birthdate = document.getElementById("birthdate").value;
    const curp = document.getElementById("curp").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rol = document.getElementById("rol").value; // Obtener valor seleccionado del rol directamente
    let rol_id;

    // Asignar el valor correcto a rol_id según el rol seleccionado
    if (rol === "ADMIN_ROLE") {
      rol_id = adminId;
      console.log(rol_id);
    } else if (rol === "USER_ROLE") {
      rol_id = userId;
      console.log(rol_id);
    } else if (rol == "CLIENT_ROLE") {
      rol_id = clientId;
      console.log(rol_id);
    } else {
      // Manejar caso de rol no válido
      setError("Rol no válido");
      return;
    }

    // Encriptar la contraseña antes de enviarla al backend
    const hashedPassword = await bcrypt.hash(password, 10);


    confirmAlert(async () => {
      try {
        const response = await fetch("http://localhost:8080/api/person/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            surname,
            lastname,
            birthdate,
            curp,
            user: {
              username,
              password: hashedPassword, // Enviar la contraseña encriptada
              roles: [
                {
                  id: rol_id,
                  name: rol,
                },
              ],
            },
          }),
        });
        customAlert("Éxito", "Usuario registrado exitosamente", "success");
      } catch (error) {
        customAlert("Error", "Error al registrar Usuario", "error");
        setError("Error al registrar Usuario");
      }
  
  });
  };

  useEffect(() => {
    getIdRolAdmin();
    getIdRolClient();
    getIdRolUser();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen justify-center">
      <div
        style={{ background: "#072D44" }}
        className="lg:w-1/2 flex justify-center items-center bg-blue-900"
      >
        <Card
          className="max-w-md border-none shadow-lg"
          style={{ background: "#064469" }}
        >
          <div className="font text-3xl font-bold mb-6">
            <span style={{ color: "#ffffff" }}>Registrar Nuevo Usuario</span>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}{" "}
          <form className="flex flex-col gap-4" onSubmit={postUsuario}>
            <TextInput id="name" type="text" required placeholder="Nombre" />
            <TextInput
              id="surname"
              type="text"
              required
              placeholder="Apellido Materno"
            />
            <TextInput
              id="lastname"
              type="text"
              required
              placeholder="Apellido Paterno"
            />
            <TextInput
              id="birthdate"
              type="text"
              required
              placeholder="Fecha de Nacimiento"
            />
            <TextInput id="curp" type="text" required placeholder="CURP" />
            <TextInput
              id="username"
              type="text"
              required
              placeholder="Usuario"
            />
            <TextInput
              id="password"
              type="password"
              required
              placeholder="Contraseña"
            />
            <div>
              <div className="flex items-center">
                <select
                  id="rol"
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-2"
                >
                  <option value="" disabled>
                    Selecciona un rol
                  </option>
                  <option value="ADMIN_ROLE">Administrador</option>
                  <option value="USER_ROLE">Usuario</option>
                </select>
              </div>
            </div>
            <Button
              style={{ background: "#072D44" }}
              className="mt-8 shadow-lg text-3xl"
              type="submit"
            >
              Registrar Usuario
            </Button>
          </form>
        </Card>
      </div>
      <div className="lg:w-1/2 bg-white">
        <div className="flex flex-col items-center justify-center mt-14">
          <h1 className="text-center text-5xl font-bold mb-5 mt-12">
            ¡Bienvenido Administrador!
          </h1>
          <img
            style={{ height: "auto", width: "150px" }}
            className="mt-8"
            src={Imagen}
            alt="Logo"
          />
          <span className="text-center text-2xl mt-10 tracking-wide font-medium">
            Registra un nuevo usuario para <br /> comenzar a gestionar
          </span>
        </div>
      </div>
      <Link to="/usuarios" className="text-cyan-700 py-2 font-semibold text-sm px-4 border-none absolute top-4">
                    Regresar
                </Link>
    </div>
  );
};

export default RegistrarUsuario;