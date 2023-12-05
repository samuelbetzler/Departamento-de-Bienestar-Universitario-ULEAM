import React, { useState } from 'react';
import Navbar from './Navbar';

const ServicioInfo = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    rol: 'alumno',
    asignatura: '',
    telefono: '',
    direccion: '',
    extension: 'personal',
    mensaje: '',
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    // Validación para el campo nombre
    if (!formData.nombre.match(/^[a-zA-Z ]+$/)) {
      alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
      return false;
    }

    // Validación para el campo correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.correo.match(correoRegex)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return false;
    }

    // Validación para el campo asignatura (si es docente)
    if (formData.rol === 'docente' && !formData.asignatura) {
      alert('Por favor, ingresa la asignatura que imparte.');
      return false;
    }

    // Validación para el campo teléfono
    const telefonoRegex = /^\d+$/;
    if (!formData.telefono.match(telefonoRegex)) {
      alert('Por favor, ingresa un número de teléfono válido (solo números).');
      return false;
    }
    if (!formData.direccion.trim()) {
      alert('Por favor, ingresa tu dirección.');
      return false;
    }
    // Otras validaciones según tus requisitos...

    return true;
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Aquí puedes realizar el registro si la validación es exitosa
      console.log('Formulario válido. Realizar registro:', formData);

      // Envía la información a algún lugar, por ejemplo, a la consola
      console.log('Enviando información a los delegados del departamento');

      // Redirige al usuario a otra página
      window.location.href = '/inicio';  // Cambia '/otra-pagina' por la URL deseada
    }
  };

  return (
    <div className="container-fluid">
      <header className="bg-primary text-white text-center py-5">
        <h1 className="display-4">Gestión de Bienestar Universitario</h1>
        <p className="lead">Fomentando un ambiente saludable y positivo para la comunidad universitaria.</p>
      </header>

      <section id="servicios" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Info servicio</h5>
                  <p className="card-text">Informacion adicional del servicio</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Caracteristicas extras del servicio</h5>
                  <p className="card-text">.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Recursos del servicio</h5>
                  <p className="card-text">.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="equipo" className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4">Quien ofrece el servicio</h2>
            <p className="lead">Conoce a las personas dedicadas a brindarte ayuda con el servicio en cuestion</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="Servicios/persona 1.avif" className="card-img-top" alt="Miembro del Equipo"></img>
                <div className="card-body">
                  <h5 className="card-title">Nombre del Miembro</h5>
                  <p className="card-text">Título o Rol</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="Servicios/persona 2.avif" className="card-img-top" alt="Miembro del Equipo"></img>
                <div className="card-body">
                  <h5 className="card-title">Nombre del Miembro</h5>
                  <p className="card-text">Título o Rol</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="Servicios/persona 3.avif" className="card-img-top" alt="Miembro del Equipo"></img>
                <div className="card-body">
                  <h5 className="card-title">Nombre del Miembro</h5>
                  <p className="card-text">Título o Rol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4">Contáctanos y Regístrate</h2>
            <p className="lead">Estamos aquí para ayudarte. ¡No dudes en ponerte en contacto y registrarte!</p>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <form id="registrationForm" onSubmit={handleRegistration}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" placeholder="Tu Nombre" onChange={handleInputChange}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="correo" placeholder="tucorreo@example.com" onChange={handleInputChange}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="rol" className="form-label">Rol</label>
                  <select className="form-select" id="rol" onChange={handleInputChange}>
                    <option value="alumno">Alumno</option>
                    <option value="docente">Docente</option>
                    <option value="personal">Personal Administrativo</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="asignatura" className="form-label">Asignatura (si eres docente)</label>
                  <input type="text" className="form-control" id="asignatura" placeholder="Asignatura que imparte" onChange={handleInputChange}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono</label>
                  <input type="number" className="form-control" id="telefono" placeholder="Número de teléfono" onChange={handleInputChange}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">Dirección</label>
                  <input type="text" className="form-control" id="direccion" placeholder="Tu dirección" onChange={handleInputChange}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="rol" className="form-label">Extension</label>
                  <select className="form-select" id="Extension" onChange={handleInputChange}>
                    <option value="personal">Matriz -Manta-</option>
                    <option value="alumno">Chone</option>
                    <option value="docente">El carmen</option>
                    <option value="personal">Flavio Alfaro</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">Mensaje</label>
                  <textarea className="form-control" id="mensaje" rows="3" placeholder="Escribe tu mensaje aquí" onChange={handleInputChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar Mensaje y Registrarse</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicioInfo;
