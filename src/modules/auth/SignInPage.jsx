import React, {useContext} from 'react'
import { Button, TextInput, Label, Checkbox, Spinner, Card } from 'flowbite-react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { customAlert } from '../../config/alerts/alert';
import { useNavigate } from 'react-router-dom';
import AxiosClient from '../../config/http-client/axios-client';
import AuthContext from '../../config/context/auth-context'
import Imagen from '../../assets/logo.png'

const SignInPage = () => {
    //Formik nos ayuda a controlar los formularios 

    const { dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: yup.object().shape({
            username: yup.string().required("Campo obligatorio"),
            password: yup.string().required("Campo obligatorio")
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await AxiosClient({
                    url: "/auth/signin",
                    method: "POST",
                    data: values
                });
                if(!response.error){
                    /**
                     * Tenemos que validar que rol tiene -> Redireccionarlo a su página principal
                     */
                    dispatch({type: "SIGNIN", payload: response.data});     //Es el metodo que utiliza nuestro contexto para indicar si un usuario inicio sesión y con que metodo inicio sesión
                    navigate("/", {replace: true});
                } else throw Error("Error");
            } catch (error) {
                customAlert("Iniciar sesión",
                "Usuario y/o contraseña incorrectos",
                'info'
                );
            } finally {
                setSubmitting(false);
            }
        }
    });

    return (
        <div className="flex flex-col lg:flex-row h-screen">
          <div style={{ background: "#072D44" }} className="lg:w-1/2 flex justify-center items-center bg-blue-900">
            <Card className="max-w-md border-none shadow-lg" style={{ background: "#064469" }}>
              <div className="font text-3xl font-bold mb-6">
                <span style={{ color: "#ffffff" }}>Iniciar sesión en su cuenta</span>
              </div>
              <form
        className="flex flex-col gap-4"
        onSubmit={formik.handleSubmit}
        noValidate
      >
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="username"
                    value="Your username"
                    style={{ color: "#ffffff", fontSize: "1.1rem" }}
                  />
                </div>
                <TextInput
                  type="text"
                  id="username"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.errors.username && formik.touched.username ? (
                      <span className="text-red-600">{formik.errors.username}</span>
                    ) : null
                  }
                  placeholder=""
                  required
                />
              </div>
  
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="password1"
                    value="Your password"
                    style={{  color: "#ffffff", fontSize: "1.1rem"}}
                  />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.errors.password && formik.touched.password ? (
                      <span className="text-red-600">{formik.errors.password}</span>
                    ) : null
                  }
                  required
                />
              </div>
              <Button
                type="submit"
                color="light"
                className="w-full"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                {formik.isSubmitting ? (
                  <Spinner />
                ) : (
                  <>
                    Iniciar sesion
                  </>
                )}
              </Button>
              </form>
            </Card>
          </div>
          <div className="lg:w-1/2 bg-white">
            <div className="flex flex-col items-center justify-center mt-14">
              <h1 className="text-center text-5xl font-bold mb-5 mt-12">¡Hola, bienvenido!</h1>
              <img style={{ height: 'auto', width: '150px' }} className="mt-8" src={Imagen} alt="Logo" />
              <span className='text-center text-2xl mt-10 tracking-wide font-medium'>Inicia sesión para <br /> comenzar a gestionar</span>
            </div>
          </div>
        </div>
    );
}

//<></> -> Fragments
export default SignInPage