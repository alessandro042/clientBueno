import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthContext from "../config/context/auth-context";
import React, { useContext } from "react";
import SignInPage from "../modules/auth/SignInPage";
import UserLayout from "../components/layout/UserLayout";
import AdminLayout from "../components/layout/AdminLayout";
import ClientLayout from "../components/layout/ClientLayout";
import ConsultaPozo from "../../src/components/layout/screen/ConsultaPozo";
import EliminaUsuario from "../../src/components/layout/screen/EliminaUsuario";
import ModificacionUsuario from "../../src/components/layout/screen/ModificacionUsuario";
import Pozos from "../../src/components/layout/screen/Pozos";
import PozosClient from "../../src/components/layout/screen/PozosClient";
import RegistarUsuario from "../../src/components/layout/screen/RegistarUsuario";
import RegistrarPozo from "../../src/components/layout/screen/RegistrarPozo";
import Menu from "../../src/components/layout/screen/Menu";
import MenuUser from "../../src/components/layout/screen/MenuUser";
import MenuClient from "../../src/components/layout/screen/MenuClient";
import Usuarios from "../../src/components/layout/screen/Usuarios";
import Histograma from "../components/layout/screen/Histograma";
import EliminaPozo from "../components/layout/screen/EliminaPozo";
import ModificaPozo from "../components/layout/screen/ModificaPozo";

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  const vaidacionRole = (rolCorrecto) => {
    if (!user.signed) {
      return <Navigate to="/" />;
    }

    if (!rolCorrecto.includes(user.roles[0]?.name)) {
      return <Navigate to="/*" />;
    }

    return null;
  };

  // Definir las rutas según el estado del usuario
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {user.signed ? (
          <>
            {user.roles[0]?.name === "ADMIN_ROLE" && (
              <Route element={<AdminLayout />}>
                {vaidacionRole(['ADMIN_ROLE'])}
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
            )}
            {user.roles[0]?.name === "USER_ROLE" && (
              <Route element={<UserLayout />}>
                {vaidacionRole(['USER_ROLE'])}
                <Route path="/" element={<MenuUser />} />
                <Route path="/consultapozo" element={<ConsultaPozo />} />
                <Route path="/pozos" element={<Pozos />} />
                <Route path="/registrarpozo" element={<RegistrarPozo />} />
                <Route path="/histograma" element={<Histograma />} />
                <Route path="/eliminapozo/:id" element={<EliminaPozo />} />
                <Route path="/modificapozo/:id" element={<ModificaPozo />} />
              </Route>
            )}
            {user.roles[0]?.name === "CLIENT_ROLE" && (
              <Route element={<ClientLayout />}>
                {vaidacionRole(['CLIENT_ROLE'])}
                <Route path="/" element={<MenuClient />} />
                <Route path="/consultapozo" element={<ConsultaPozo />} />
                <Route path="/pozos" element={<PozosClient />} />
                <Route path="/histograma" element={<Histograma />} />
              </Route>
            )}
          </>
        ) : (
          <Route path="/" element={<SignInPage />} />
        )}
        <Route path="/*" element={<>404 not found</>} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
