import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistroForm from './components/RegistroForm';
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import './scss/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import ServicioInfo from './components/ServicioInfo';
import Noticias from './components/Noticias'; 
import Eventos from './components/Eventos';
import GuiaManejoEstres from './components/GuiaManejoEstres';



const App = () => {
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem('userEmail') || '');

  const toggleForms = () => {
    setMostrarRegistro((prev) => !prev);
  };

  const iniciarSesion = (correo, contrasena) => {
    // Verificar si el usuario está registrado
    const usuarioRegistrado = JSON.parse(localStorage.getItem('nuevoUsuario'));

    if (usuarioRegistrado && usuarioRegistrado.correo === correo && usuarioRegistrado.contrasena === contrasena) {
      setLoggedIn(true);
    } else {
      console.error('Autenticación fallida. Usuario o contraseña incorrectos.');
    }
  };

  const mostrarFormularioRecuperar = () => {
    console.log('Mostrar formulario de recuperar contraseña');
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/inicio" element={<><Navbar isLoggedIn={isLoggedIn} /><Inicio /></>} />
          <Route path="/servicios" element={<><Navbar isLoggedIn={isLoggedIn} /><Servicios /></>} />
          <Route path="/servicio-info" component={ServicioInfo} />
          <Route path="/servicioinfo" element={<><Navbar isLoggedIn={isLoggedIn} /><ServicioInfo /></>} />
          <Route path="/noticias" element={<><Navbar isLoggedIn={isLoggedIn} /><Noticias /></>} />
          <Route path="/eventos" element={<><Navbar isLoggedIn={isLoggedIn} /><Eventos /></>} />
          <Route path="/GuiaManejoEstres" element={<><Navbar isLoggedIn={isLoggedIn} /><GuiaManejoEstres /></>} />
          <Route path="/guia-manejo-estres" element={<><Navbar isLoggedIn={isLoggedIn} /><GuiaManejoEstres /></>} />
          
          <Route
            path="/"
            element={
              isLoggedIn ? (
                // Si el usuario está autenticado, redirige a la página de inicio
                <Navigate to="/inicio" />
              ) : (
                // Si el usuario no está autenticado, muestra el formulario de inicio de sesión o registro
                <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
                  <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                      <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                          <div className="row g-0">
                            <div className="col-lg-6">
                              <div className="card-body p-md-5 mx-md-4">
                                <div className="text-center">
                                  <img src={process.env.PUBLIC_URL + '/logo.png'} style={{ width: '185px' }} alt="logo" />
                                  <h4 className="mt-1 mb-5 pb-1">Departamento de bienestar universitario</h4>
                                </div>
                                {mostrarRegistro ? (
                                  <RegistroForm />
                                ) : (
                                  <LoginForm iniciarSesion={iniciarSesion} mostrarFormularioRecuperar={mostrarFormularioRecuperar} />
                                )}
                                <button className="btn btn-link" onClick={toggleForms}>
                                  {mostrarRegistro ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 className="mb-4">En el inicio de cada día y de cada página, encuentra la inspiración para escribir tu propia historia extraordinaria.</h4>
                                <p className="small mb-0"></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;