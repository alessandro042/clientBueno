import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from 'flowbite-react';
import { HiMenu } from 'react-icons/hi';
import Imagen from '../../assets/logo.png';

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <Navbar fluid rounded style={{ backgroundColor: "#072D44" }}>
          <Navbar.Brand href="https://flowbite-react.com">
            <img src={Imagen} alt="Logo" className="h-12 w-auto mr-4" />
            <Link to="/">
              <h1 className="text-white font-bold text-lg">SIMNA | ADMINISTRADOR</h1>
            </Link>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <button className="p-2 rounded-md hover:bg-gray-200" onClick={toggleMenu}>
              <HiMenu size={24} />
            </button>
            <Navbar.Toggle />
          </div>
          {isOpen && (
            <div className="absolute top-0 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>
                  <Link to='/'>Menu</Link>
                </button>
                <button className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>
                  <Link to='/usuarios'>Gestionar Usuarios</Link>
                </button>
                <button className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>
                  <Link to='/pozos'>Gestionar Pozos</Link>
                </button>
                <button className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>
                  <Link to='/registrarusuario'>Registrar Usuarios</Link>
                </button>
                <button className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>
                  <Link to='/registrarpozo'>Registrar Pozos</Link>
                </button>
                <button className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>
                  Esconder
                </button>
              </div>
            </div>
          )}
          <Navbar.Collapse>
            <Navbar.Link active>
              <Link to="/">
                Home
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <main className="flex h-screen">

        <section className="w-full">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default AdminLayout;