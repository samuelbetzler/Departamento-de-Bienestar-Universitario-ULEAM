// Servicios.js
import '../scss/Search_filter.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import React from 'react';

const Servicios = () => {
  return (
    <div className="container mt-4">
      <h1>Servicios</h1>
      <p>Descubre los servicios ofrecidos por el Departamento de Bienestar Universitario:</p>

      {/* Opciones de búsqueda y filtro */}
      <div className="search-filter">
        <div className="search-options">
          <select id="filtro_area" className="filtro_area">
            <option value="area" id="area" selected>
              Área
            </option>
            <option value="Contabilidad" id="Contabilidad">
              Asesoramiento y Orientación
            </option>
            <option value="TI" id="TI">
              Salud y Bienestar
            </option>
            <option value="Finanzas" id="Finanzas">
              Desarrollo Personal y Profesional
            </option>
            <option value="Mantenimiento" id="Mantenimiento">
              Comunidad y Eventos Sociales
            </option>
            <option value="Jefe_area">Apoyo Financiero</option>
          </select>
          <button id="sort-button">Ordenar A-Z</button>
        </div>
        <input type="text" id="search-input" placeholder="Buscar servicio" />
        <button id="search-button">Buscar</button>
      </div>

      {/* Tarjetas de servicios */}
      <div className="row">
        {/* Aquí puedes repetir este bloque para cada servicio */}
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
              <img src="/Asesoria academica.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Asesoramiento Académico</h5>
                  <p className="card-text">
                    Ofrecemos asesoramiento personalizado para ayudarte a alcanzar tus metas académicas. Ya sea que necesites
                    ayuda con la planificación de cursos, la elección de especializaciones o la gestión del tiempo,
                    estamos aquí para apoyarte.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      <Link to="/servicioinfo" className="btn btn-outline-primary">
                      Acerca de...
                      </Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
              <img src="/Apoyo Emocional.jpeg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Apoyo Emocional</h5>
                  <p className="card-text">
                  Nuestro equipo de profesionales capacitados está disponible para brindar apoyo emocional. Entendemos que la vida universitaria puede ser desafiante, y estamos comprometidos a proporcionar un espacio seguro para discutir tus preocupaciones y encontrar soluciones juntos.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      <Link to="/servicioinfo" className="btn btn-outline-primary">
                        Acerca de...
                      </Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
              <img src="/Bienestar Fisico.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Programas de Bienestar Físico</h5>
                  <p className="card-text">
                  Formamos parte de tu viaje hacia un estilo de vida más saludable. Nuestros programas incluyen clases de ejercicio, yoga y eventos deportivos para mantenerte activo y saludable mientras te concentras en tus estudios.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                    <Link to="/servicioinfo" className="btn btn-outline-primary">
                      Acerca de...
                    </Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
              <img src="/Eventos y actividades sociales.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Eventos y Actividades Sociales</h5>
                  <p className="card-text">
                  ¡Únete a nosotros en nuestros eventos y actividades sociales! Estamos comprometidos a construir una comunidad fuerte y vibrante. Desde clubes hasta eventos especiales, siempre hay oportunidades para hacer nuevos amigos y disfrutar de tu tiempo en la universidad.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      <Link to="/servicioinfo" className="btn btn-outline-primary">
                        Acerca de...
                      </Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
              <img src="/Orientación y Transición.jpeg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Orientación y Transición</h5>
                  <p className="card-text">
                  ¿Eres nuevo en nuestra universidad? Nuestro equipo de orientación está aquí para ayudarte a navegar por esta emocionante transición. Te proporcionaremos la información y el apoyo que necesitas para sentirte cómodo y bienvenido.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      <Link to="/servicioinfo" className="btn btn-outline-primary">
                        Acerca de...
                      </Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
              <img src="/Recursos de Salud Mental.png" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Servicios de Empleabilidad</h5>
                  <p className="card-text">
                  En el Departamento de Bienestar, nos enorgullece ayudarte a construir tu futuro profesional. Desde talleres de desarrollo de habilidades hasta asesoramiento individual, estamos comprometidos a apoyarte en tu búsqueda de empleo y crecimiento profesional.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      <Link to="/servicioinfo" className="btn btn-outline-primary">
                        Acerca de...
                      </Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
              <img src="/Desarrollo Personal.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Asistencia Financiera</h5>
                  <p className="card-text">
                  Entendemos las preocupaciones financieras que pueden surgir durante tu tiempo en la universidad. Nuestro equipo te proporcionará información sobre becas, opciones de préstamos y oportunidades de empleo para ayudarte a navegar por estas decisiones financieras importantes.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      <Link to="/servicioinfo" className="btn btn-outline-primary">
                        Acerca de...
                      </Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
              <img src="/Apoyo Estudiantes Internacionales.avif" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Programas de Desarrollo Personal</h5>
                  <p className="card-text">
                  En el Departamento de Bienestar, nos apasiona tu crecimiento personal. Únete a nuestros programas y talleres diseñados para fortalecer tus habilidades de liderazgo, gestión del tiempo y toma de decisiones, preparándote para un futuro exitoso.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      <Link to="/servicioinfo" className="btn btn-outline-primary">
                        Acerca de...
                      </Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
              <img src="/Asesoria academica.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Apoyo a Estudiantes Internacionales</h5>
                  <p className="card-text">
                  Como estudiantes internacionales, entendemos las transiciones únicas que enfrentas. Nuestro equipo está dedicado a ofrecerte apoyo específico, desde asesoramiento sobre visas hasta la creación de una red de compañeros internacionales para que te sientas como en casa.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      <Link to="/servicioinfo" className="btn btn-outline-primary">
                        Acerca de...
                      </Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Servicios;
