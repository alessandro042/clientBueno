import React from 'react';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Imagen from '../assets/logo.png';
import Usuarios from './gestiones/Usuarios';
const Menu = () => {
    return(
        
        <div className="flex flex-col lg:flex-row h-screen">
      <div style={{background:"#072D44"}} className="w-full flex justify-center items-center bg-blue-900">
        <Card className="max-w-md border-none shadow-lg" style={{ background: "#064469" }}>
          <div className="font text-3xl font-bold mb-6">
            <span style={{ color: "#ffffff" }}>Bienvenido Administrador</span>
          </div>
            
           
              <Button style={{ background: "#072D44" }} className='mt-8 shadow-lg text-3xl' type="submit">Gestionar Usuarios
              
              </Button>
            
            <Button style={{ background: "#072D44" }} className='mt-8 shadow-lg text-3xl' type="submit">Gestionar Pozos</Button>
            
            <Button style={{ background: "#072D44" }} className='mt-8 shadow-lg text-3xl' type="submit">Salir</Button>
          
        </Card>
      </div>
    </div>
    );
}

export default Menu;