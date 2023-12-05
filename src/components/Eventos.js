// Eventos.js

import React from 'react';
import Navbar from './Navbar';

function Eventos() {
  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          {/* Resto del contenido del encabezado */}
        </nav>
        {/* Carrusel de eventos */}
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/Cartelera ULEAM.jpeg" className="d-block w-100" alt="Evento 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: 'black' }}></h5>
                <p style={{ color: 'black' }}></p>
              </div>
            </div>
            {/* Agrega más elementos según sea necesario */}
            <div className="carousel-item">
              <img src="/Evento Maestria de trabajo Social.jpg" className="d-block w-100" alt="Evento 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: 'black' }}></h5>
                <p style={{ color: 'black' }}></p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/Evento Congreso de Agroindustria.jpg" className="d-block w-100" alt="Evento 3" />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: 'black' }}></h5>
                <p style={{ color: 'black' }}></p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </div>
  );
}

export default Eventos;
