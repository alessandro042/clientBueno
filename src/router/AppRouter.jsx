/*Navegar entre componentes por medio de URL*/
/*
import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import SignInPage from '../modules/auth/SignInPage';
import { useContext } from 'react';
import AuthContext from '../config/context/auth-context';
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';
import UserPage from '../modules/admin/user/UserPage';
import ConsultaPozo from '../components/layout/screen/ConsultaPozo';
import EliminaUsuario from '../components/layout/screen/EliminaUsuario';
import ModificacionUsuario from '../components/layout/screen/ModificacionUsuario';
import Pozos from '../components/layout/screen/Pozos';
import RegistarUsuario from '../components/layout/screen/RegistarUsuario';
import RegistrarPozo from '../components/layout/screen/RegistrarPozo';
import Usuarios from '../components/layout/screen/Usuarios';
import Menu from '../../src/components/layout/screen/Menu';

const AppRouter = () => {
    const { user } = useContext(AuthContext);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {user.signed ? (
                    <>
                        <Routes>
                            <Route path='/' element={<Menu />}>
                                {
                                    // routesFromRole(user?.roles[0]?.name)
                                }
                                <Route path='/consultapozo' element={<ConsultaPozo />} />
                                <Route path='/eliminausuario' element={<EliminaUsuario />} />
                                <Route path='/modificacionusuario' element={<ModificacionUsuario />} />
                                <Route path='/pozos' element={<Pozos />} />
                                <Route path='/registrarusuario' element={<RegistarUsuario />} />
                                <Route path='/registrarpozo' element={<RegistrarPozo />} />
                                <Route path='/usuario' element={<Usuarios />} />
                            </Route>
                        </Routes>
                    </>
                ) : (
                    <Route path="/" element={<SignInPage />} />
                )}
                <Route path='/*' element={<>404 not found</>} />
            </>
        )
    );
    return (
        < RouterProvider router={router} />
    );
}

export default AppRouter
*/

import { Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AuthContext from '../config/context/auth-context';
import React, { useContext } from 'react';
import SignInPage from '../modules/auth/SignInPage';
import AdminLayout from '../components/layout/AdminLayout';
import UserPage from '../modules/admin/user/UserPage';
import ConsultaPozo from '../../src/components/layout/screen/ConsultaPozo';
import EliminaUsuario from '../../src/components/layout/screen/EliminaUsuario';
import ModificacionUsuario from '../../src/components/layout/screen/ModificacionUsuario';
import Pozos from '../../src/components/layout/screen/Pozos';
import RegistarUsuario from '../../src/components/layout/screen/RegistarUsuario';
import RegistrarPozo from '../../src/components/layout/screen/RegistrarPozo';
import Menu from '../../src/components/layout/screen/Menu';
import Usuarios from '../../src/components/layout/screen/Usuarios';

const AppRouter = () => {
    const { user } = useContext(AuthContext);

    // Definir las rutas según el estado del usuario
    const routes = user.signed ? (
        <Route element={<AdminLayout />}>
            <Route path='/' element={<Menu />} />
            <Route path='/consultapozo' element={<ConsultaPozo />} />
            <Route path='/eliminausuario' element={<EliminaUsuario />} />
            <Route path='/modificacionusuario' element={<ModificacionUsuario />} />
            <Route path='/pozos' element={<Pozos />} />
            <Route path='/registrarusuario' element={<RegistarUsuario />} />
            <Route path='/registrarpozo' element={<RegistrarPozo />} />
            <Route path='/usuarios' element={<Usuarios />} />
        </Route>
    ) : (
        <Route path="/" element={<SignInPage />} />
    );

    // Crear el enrutador y proporcionarlo a la aplicación
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {routes}
                <Route path='/*' element={<div>404 not found</div>} />
            </>
        )
    );

    return (
        <RouterProvider router={router} />
    );
}

export default AppRouter;
