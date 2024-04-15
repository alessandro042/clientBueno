import React from 'react';
import { Button, Card } from 'flowbite-react';
import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div style={{ background: "#072D44" }} className="w-full flex justify-center items-center bg-blue-900">

        <Card className="max-w-md border-none shadow-lg" style={{ background: "#064469" }}>
          <div className="font text-3xl font-bold mb-6">
            <span style={{ color: "#ffffff" }}>Bienvenido Administrador</span>
          </div>
          <Link to="/usuarios">
            <Button style={{ background: "#072D44" }} className='mt-8 shadow-lg text-3xl'>Gestionar Usuarios</Button>
          </Link>
          <Link to="/pozos">
            <Button style={{ background: "#072D44" }} className='mt-8 shadow-lg text-3xl'>Gestionar Pozos</Button>
          </Link>
          <Button style={{ background: "#072D44" }} className='mt-8 shadow-lg text-3xl'>Salir</Button>
        </Card>
      </div>
    </div>
  );
}

export default Menu;