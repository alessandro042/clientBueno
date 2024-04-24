import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Pozos = () => {
  const [pozo, setPozo] = useState(null);

  const getToken = () => {
    return localStorage.getItem("token");
  };

  // Get de pozos
  const getPozos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/pozos", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      console.log(response.data);
      setPozo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Actualizacion de pozo con put
  const putPozo = async (id) => {
    const token = getToken();
    const array = id-1;
    console.log(
      "Actualizando pozo con capacidadlitros: ",
      pozo[array].capacidadLitros
    );
    try {
      console.log("Actualizando pozo con id: ", array);
      console.log("Token: ", token);
      const response = await fetch(`http://localhost:8080/api/pozos/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          capacidadLitros: pozo[array].capacidadLitros,
          comunidades: pozo[array].comunidades,
          nombre: pozo[array].nombre,
          ubicacionPozo: pozo[array].ubicacionPozo,
          porcentajeAgua: pozo.porcentajeAgua,
          estatus: pozo.estatus,
        }),
      });
      if (response.status === 200) {
        window.location.href = "/pozos";
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPozos();
  }, []);

  return (
    <div className="p-4 mx-auto mt-8 max-w-4xl">
      <table className="w-full border-collapse border border-gray-300 bg-white">
        <thead>
          <tr>
            <th className="nombre">Nombre</th>
            <th className="capacidad">Capacidad Litros</th>
            <th className="porcentaje">Porcentaje Agua</th>
            <th className="ubicacion">Ubicación</th>
            <th className="comunidades">Comunidades</th>
            <th className="acciones">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(pozo) &&
            pozo.map((pozo) => (
              <tr key={pozo.id}>
                <td>{pozo.nombre}</td>
                <td>{pozo.capacidadLitros} L</td>
                <td>{pozo.porcentajeAgua} %</td>
                <td>{pozo.ubicacionPozo}</td>
                <td>{pozo.comunidades}</td>
                <td>
                  <Button
                    style={{ background: "#5790AB" }}
                    className="shadow btn-sm w-auto h-auto px-1 py-0.5 text-sm"
                    onClick={() => putPozo(pozo.id)}
                  >
                    Actualizar
                  </Button>
                  <Link to={`/modificapozo/${pozo.id}`}>
                    <Button style={{ background: "#5790AB" }} className='shadow btn-sm w-auto h-auto px-1 py-0.5 text-sm mr-2 mt-2' type="submit"
                      onClick={() => {
                        localStorage.setItem("id", pozo.id);
                      }}
                    >
                      Modificar
                    </Button>
                  </Link>
                  <Link to={`/eliminapozo/${pozo.id}`}>
                  <Button style={{ background: "#5790AB" }} className='shadow btn-sm w-auto h-auto px-1 py-0.5 text-sm mr-2 mt-2' type="submit"
                      onClick={() => {
                        localStorage.setItem("id", pozo.id);
                      }}
                    >
                      Eliminar
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pozos;
