import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthContext from "../config/context/auth-context";
import React, { useContext } from "react";
import SignInPage from "../modules/auth/SignInPage";
import AdminLayout from "../components/layout/AdminLayout";
import ConsultaPozo from "../../src/components/layout/screen/ConsultaPozo";
import EliminaUsuario from "../../src/components/layout/screen/EliminaUsuario";
import ModificacionUsuario from "../../src/components/layout/screen/ModificacionUsuario";
import Pozos from "../../src/components/layout/screen/Pozos";
import RegistarUsuario from "../../src/components/layout/screen/RegistarUsuario";
import RegistrarPozo from "../../src/components/layout/screen/RegistrarPozo";
import Menu from "../../src/components/layout/screen/Menu";
import Usuarios from "../../src/components/layout/screen/Usuarios";
import Histograma from "../components/layout/screen/Histograma";
import EliminaPozo from "../components/layout/screen/EliminaPozo";
import ModificaPozo from "../components/layout/screen/ModificaPozo";

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  // Definir las rutas según el estado del usuario
  const routes = user.signed ? (
    <Route element={<AdminLayout />}>
      <Route path="/" element={<Menu />} />
      <Route path="/consultapozo" element={<ConsultaPozo />} />
      <Route path="/eliminausuario/:id" element={<EliminaUsuario />} />
      <Route path="/modificacionusuario/:id" element={<ModificacionUsuario />} />
      <Route path="/pozos" element={<Pozos />} />
      <Route path="/registrarusuario" element={<RegistarUsuario />} />
      <Route path="/registrarpozo" element={<RegistrarPozo />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/histograma" element={<Histograma />} />
      <Route path="/eliminapozo/:id" element={<EliminaPozo />} />
      <Route path="/modificapozo/:id" element={<ModificaPozo />} />
    </Route>
  ) : (
    <Route path="/" element={<SignInPage />} />
  );

  // Crear el enrutador y proporcionarlo a la aplicación
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {routes}
        <Route path="/*" element={<div>404 not found</div>} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
