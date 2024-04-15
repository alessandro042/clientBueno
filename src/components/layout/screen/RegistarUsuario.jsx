import React, { useState } from 'react';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import Select from 'react-select';
import Imagen from '../../../assets/logo.png'

const RegistrarUsuario = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const options = [
    { value: 'gestion', label: 'Gestion' },
    { value: 'informativo', label: 'Informativo' },
    { value: 'administrador', label: 'Administrador' }
  ];

  const handleRoleChange = (selectedOption) => {
    setSelectedRole(selectedOption);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div style={{ background: "#072D44" }} className="lg:w-1/2 flex justify-center items-center bg-blue-900">
        <Card className="max-w-md border-none shadow-lg" style={{ background: "#064469" }}>
          <div className="font text-3xl font-bold mb-6">
            <span style={{ color: "#ffffff" }}>Registrar Nuevo Usuario</span>
          </div>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nombre" value="Nombre" style={{ color: "#ffffff", fontSize: "1.1rem" }} />
              </div>
              <TextInput id="nombre" type="text" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="correo" value="Correo" style={{ color: "#ffffff", fontSize: "1.1rem" }} />
              </div>
              <TextInput id="correo" type="text" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="apellidos" value="Apellidos" style={{ color: "#ffffff", fontSize: "1.1rem" }} />
              </div>
              <TextInput id="apellidos" type="text" required />
            </div>

            <div>
              <Label htmlFor="roles" value="Seleccionar Rol" style={{ color: "#ffffff", fontSize: "1.1rem" }} />
              <Select
                id="roles"
                options={options}
                isMulti={false}
                value={selectedRole}
                onChange={handleRoleChange}
              />
            </div>

            <Button style={{ background: "#072D44" }} className='mt-8 shadow-lg text-3xl' type="submit">Registrar Usuario</Button>
          </form>
        </Card>
      </div>
      <div className="lg:w-1/2 bg-white">
        <div className="flex flex-col items-center justify-center mt-14">
          <h1 className="text-center text-5xl font-bold mb-5 mt-12">¡Bienvenido Administrador!</h1>
          <img style={{ height: 'auto', width: '150px' }} className="mt-8" src={Imagen} alt="Logo" />
          <span className='text-center text-2xl mt-10 tracking-wide font-medium'>Registra un nuevo usuario para <br /> comenzar a gestionar</span>
        </div>
      </div>
    </div>
  );
}

export default RegistrarUsuario;
