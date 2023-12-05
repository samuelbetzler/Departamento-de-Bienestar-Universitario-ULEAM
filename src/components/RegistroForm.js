import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistroForm = ({ onRegistroExitoso }) => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [repetirContrasena, setRepetirContrasena] = useState('');
  const navigate = useNavigate();

  const handleRegistro = () => {
    // Validaciones básicas
    if (!nombres || !apellidos || !correo || !contrasena || !repetirContrasena) {
      alert('Todos los campos son obligatorios. Por favor, completa todos los campos.');
      return;
    }

    // Validación de correo electrónico
    const correoPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    if (!correoPattern.test(correo)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Validación de contraseña (puedes ajustar según tus criterios)
    if (contrasena.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Validación de repetir contraseña
    if (contrasena !== repetirContrasena) {
      alert('Las contraseñas no coinciden. Por favor, verifica.');
      return;
    }

    // Lógica para el registro de usuario
    const nuevoUsuario = {
      nombres,
      apellidos,
      correo,
      contrasena,
    };

    localStorage.setItem('nuevoUsuario', JSON.stringify(nuevoUsuario));

    // Puedes mostrar un mensaje aquí si es necesario
    alert('Registro exitoso');

    // Llamamos a la función de registro exitoso
    if (onRegistroExitoso) {
      onRegistroExitoso();
      navigate('/');
    }
  };

  return (
    <form >
      <div className="form-outline mb-4">
        <input
          type="text"
          className="form-control"
          required
          placeholder="Nombres"
          value={nombres}
          onChange={(e) => setNombres(e.target.value)}
        />
        <label className="form-label" htmlFor="form2Example11">
          Nombres
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          className="form-control"
          required
          placeholder="Apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />
        <label className="form-label" htmlFor="form2Example11">
          Apellidos
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="email"
          className="form-control"
          id="correo"
          required
          placeholder="Correo Institucional"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label className="form-label" htmlFor="form2Example11">
          Correo
        </label>
        <p id="correoMensaje" className="text-danger text-center"></p>
      </div>

      <div className="form-outline mb-4">
        <input
          type="password"
          id="Password"
          className="form-control"
          required
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <label className="form-label" htmlFor="form2Example22">
          Contraseña
        </label>
        <p id="MensajePass" className="text-danger text-center"></p>
      </div>

      <div className="form-outline mb-4">
        <input
          type="password"
          id="RepeatPassword"
          className="form-control"
          required
          placeholder="Repita la contraseña"
          value={repetirContrasena}
          onChange={(e) => setRepetirContrasena(e.target.value)}
        />
        <label className="form-label" htmlFor="form2Example22">
          Repita la contraseña
        </label>
        <p id="MensajeConfirmacion" className="text-danger text-center"></p>
      </div>

      <div className="text-center pt-1 mb-5 pb-1">
        <button
          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
          type="button"
          onClick={handleRegistro}
        >
          Registrarse
        </button>
      </div>
    </form>
  );
};


export default RegistroForm;