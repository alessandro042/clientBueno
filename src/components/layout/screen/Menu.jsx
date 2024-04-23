import React from "react";
import { Button, Card } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div
        style={{ background: "#072D44" }}
        className="w-full flex justify-center items-center bg-blue-900"
      >
        <Card
          className="max-w-md border-none shadow-lg rounded-lg text-center transition-transform duration-300 transform hover:scale-105"
          style={{ background: "#064469", padding: "40px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="font text-3xl font-bold mb-6 text-white">
            Bienvenido Administrador
          </div>
          <div className="flex flex-col gap-7 items-center">
            <Link to="/usuarios">
              <Button
                style={{ background: "#072D44", width: "100%", minWidth: "250px"}}
                className="shadow-lg text-xl transition-transform duration-300 transform hover:scale-105"
              >
                Gestionar Usuarios
              </Button>
            </Link>
            <Link to="/pozos">
              <Button
                style={{ background: "#072D44", width: "100%", minWidth: "250px" }}
                className="shadow-lg text-xl transition-transform duration-300 transform hover:scale-105"
              >
                Gestionar Pozos
              </Button>
            </Link>
            <Button
              style={{ background: "#072D44", width: "100%", minWidth: "250px" }}
              className="shadow-lg text-xl transition-transform duration-300 transform hover:scale-105"
              onClick={cerrarSesion}
            >
              Salir
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Menu;
