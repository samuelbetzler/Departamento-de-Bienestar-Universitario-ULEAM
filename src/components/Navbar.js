import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap'; // Asegúrate de tener instalada la librería react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Realizar búsqueda...');
  };
  const handleCerrarSesion = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    console.log('Sesión cerrada');
  
    if (isLoggedIn) {
      console.log('Redirigiendo a la página de inicio...');
      navigate('/');
      window.location.reload();
    }
  };
  return (
    <BootstrapNavbar expand="lg" bg="body-tertiary">
      <div className="container-fluid">
        <BootstrapNavbar.Brand as={NavLink} to="/">
          ULEAM
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" />
        <BootstrapNavbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/inicio">
                Inicio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/servicios">
                Servicios
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/noticias">
                Noticias
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/eventos">
                Eventos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.uleam.edu.ec/informacion-institucional/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Información
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/guia-manejo-estres">
                Recursos
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {isLoggedIn && (
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-danger me-3"
                  onClick={handleCerrarSesion}
                  style={{ display: 'block' }}
                >
                  Cerrar Sesión
                </button>
              </div>
            )}

              <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input className="form-control me-2" type="search" placeholder="Busca" aria-label="Search" id="searchInput" />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
          <div id="searchResults"></div>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;