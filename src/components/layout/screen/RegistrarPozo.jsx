
import React, { useState } from 'react';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import Select from 'react-select';
import Imagen from '../../../assets/logo.png'
import * as yup from 'yup';
import { confirmAlert, customAlert } from '../../../config/alerts/alert';


const RegistrarPozo = () => {

  const [error, setError] = useState(null);
  const [selectedEstatus, setSelectedEstatus] = useState([]);

  //Asignar el valor de boleano a los valores "true" y "false"
  if (selectedEstatus.value === "true") {
    selectedEstatus.value = true;
  } else if (selectedEstatus.value === "false") {
    selectedEstatus.value = false;
  }


  const handleRoleChange = (selectedOptions) => {
    console.log(selectedOptions)
    setSelectedEstatus(selectedOptions);
  };

  const getToken = () => {
    return localStorage.getItem("token");
    console.log(localStorage.getItem("token"));
  };

  const postPozo = async (e) => {
    
    e.preventDefault();
    const token = getToken();
    const nombre = document.getElementById("nombre").value
    const capacidadLitros = document.getElementById("capacidadLitros").value;
    const porcentajeAgua = document.getElementById("porcentajeAgua").value;
    const ubicacionPozo = document.getElementById("ubicacionPozo").value;
    const comunidades = document.getElementById("comunidades").value;
    const estatus = document.getElementById("estatus").value;

    console.log("pozo:", nombre, capacidadLitros, porcentajeAgua, ubicacionPozo, comunidades, estatus);
    confirmAlert(async () => {
    try {
      const response = await fetch("http://localhost:8080/api/pozos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nombre,
          capacidadLitros,
          porcentajeAgua,
          ubicacionPozo,
          comunidades,
          estatus
  
        }),
      });
      customAlert("Éxito", "Pozo registrado exitosamente", "success");
    } catch (error) {
      customAlert("Error", "Error al registrar Pozo", "error");
      setError("Error al registrar Pozo");
    }
  });
}




  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div style={{ background: "#072D44" }} className="lg:w-1/2 flex justify-center items-center bg-blue-900">
        <Card className="max-w-md border-none shadow-lg" style={{ background: "#064469" }}>
          <div className="font text-3xl font-bold mb-6">
            <span style={{ color: "#ffffff" }}>Registrar Nuevo Pozo</span>
          </div>
          <form className="flex flex-col gap-4" onSubmit={postPozo}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nombrePozo" value="Nombre" style={{ color: "#ffffff", fontSize: "1.1rem" }} />
              </div>
              <TextInput id="nombre" type="text" required />
            </div>


            <div>
              <div className="mb-2 block">
                <Label htmlFor="Capacidad" value="Capacidad" style={{ color: "#ffffff", fontSize: "1.1rem" }} />
              </div>
              <TextInput id="capacidadLitros" type="text" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="Porcentaje" value="Porcentaje" style={{ color: "#ffffff", fontSize: "1.1rem" }} />
              </div>
              <TextInput id="porcentajeAgua" type="text" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="Ubicacion" value="Ubicacion" style={{ color: "#ffffff", fontSize: "1.1rem" }} />
              </div>
              <TextInput id="ubicacionPozo" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="comunidades" value="Comunidades" style={{ color: "#ffffff", fontSize: "1.1rem" }} />
              </div>
              <TextInput id="comunidades" type="text" required />
            </div>


            <div>
              <select
                id="estatus"
                className='w-full bg-white border border-gray-300 rounded-md px-4 py-2'
              >
                <option value="" disabled>
                  Selecciona un estatus
                </option>
                <option value="true">Activo</option>
                <option value="false">Inactivo</option>
              </select>
            </div>

            <Button style={{ background: "#072D44" }} className='mt-8 shadow-lg text-3xl' type="submit">Registrar Pozo</Button>
          </form>
        </Card>
      </div>
      <div className="lg:w-1/2 bg-white">
        <div className="flex flex-col items-center justify-center mt-14">
          <h1 className="text-center text-5xl font-bold mb-5 mt-12">¡Bienvenido Administrador!</h1>
          <img style={{ height: 'auto', width: '150px' }} className="mt-8" src={Imagen} alt="Logo" />
          <span className='text-center text-2xl mt-10 tracking-wide font-medium'>Registra un nuevo pozo para <br /> comenzar a gestionar</span>
        </div>
      </div>
    </div>
  );
}

export default RegistrarPozo;
