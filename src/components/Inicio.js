// Inicio.js
import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/LOGO-ULEAM-HORIZONTAL.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom', height: '110vh' }}>
      <div className="container-fluid">
        <div className="container mt-4">
          <div className="jumbotron">
            <h1 className="display-4">¡Descubre el Encanto de Nuestra Página!</h1>
            <p className="lead">Bienvenidos al Departamento de Bienestar Universitario.</p>
            <hr className="my-4" />
            <p>Explora, descubre y sumérgete con todas las oportunidades que te ofrece nuestro departamento.</p>
            {/* Modificación: Utilizamos el componente Link para redirigir a "/servicios" */}
            <Link className="btn btn-primary btn-lg" to="/servicios" role="button">Empezar la Aventura</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
