import React, { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import RegistroForm from './RegistroForm';

const LoginForm = ({ iniciarSesion, mostrarFormularioRecuperar }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleIniciarSesion = () => {
    // Verificar si el usuario está registrado
    const usuarioRegistrado = JSON.parse(localStorage.getItem('nuevoUsuario'));

    if (usuarioRegistrado && usuarioRegistrado.correo === correo && usuarioRegistrado.contrasena === contrasena) {
      iniciarSesion(correo, contrasena);
      // Guardar la información en localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', correo);
    } else {
      // Mostrar mensaje de error
      Swal.fire({
        icon: 'error',
        title: 'Error de autenticación',
        text: 'Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.',
      });
    }
  };
  const handleMostrarFormularioRecuperar = () => {
    Swal.fire({
      title: 'Recuperar Contraseña',
      text: 'Por favor ingresa tu correo para recuperar la contraseña',
      input: 'email',
      showCancelButton: true,
      confirmButtonText: 'Recuperar',
      cancelButtonText: 'Cancelar',
      preConfirm: (correoRecuperar) => {
        // Validación del correo electrónico
        const correoPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
  
        if (!correoPattern.test(correoRecuperar)) {
          Swal.showValidationMessage('Por favor ingresa un correo válido.');
          return false;
        }
  
        return correoRecuperar;
      },
    }).then((result) => {
      if (result.value) {
        const correo = result.value;
        Swal.fire(
          'Mensaje Enviado',
          `Se enviará un mensaje a ${correo} con instrucciones para recuperar tu contraseña.`,
          'success'
        );
      }
    });
  };
  const [registroExitoso, setRegistroExitoso] = useState(false);
  
  

  return (
    <div>
      <form>
        <p>Por favor inicia sesión con tu cuenta</p>
        <div className="form-outline mb-4">
          <input
            type="email"
            className="form-control"
            placeholder="Correo Institucional"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example11">
            Correo
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example22">
            Contraseña
          </label>
        </div>

        <div className="text-center pt-1 mb-5 pb-1">
          <button
            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
            type="button"
            onClick={handleIniciarSesion}
          >

            Iniciar Sesión
          </button>
          <a className="text-muted" href="#!" onClick={handleMostrarFormularioRecuperar}>
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>
      
    </div>
  );
};

export default LoginForm;