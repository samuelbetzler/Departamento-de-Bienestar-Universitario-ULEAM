// GuiaManejoEstres.js
import React from 'react';
import Navbar from './Navbar';

const GuiaManejoEstres = () => {
  return (
    <>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Departamento de Bienestar Universitario</title>
        <link rel="icon" href={`${process.env.PUBLIC_URL}/LOGO-ULEAM-HORIZONTAL.png`} type="image/x-icon" />

      </head>
      <body style={{ backgroundImage: 'url("/Img/LOGO-ULEAM-HORIZONTAL.png")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
        <div className="container-fluid">
          
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            En el Departamento de Bienestar, entendemos que la vida universitaria puede ser emocionante pero también desafiante. Nuestra Guía de Manejo del Estrés está diseñada para ayudarte a enfrentar los desafíos de manera efectiva y mantener un equilibrio saludable. Descubre estrategias prácticas para gestionar el estrés académico, equilibrar las demandas del estudio y la vida personal, y cultivar hábitos que promuevan el bienestar emocional. Desde técnicas de relajación hasta consejos para la gestión del tiempo, estamos aquí para apoyarte en tu viaje y asegurarnos de que tengas las herramientas necesarias para prosperar en la universidad. ¡Explora nuestra guía y comienza a construir una base sólida para tu bienestar!
          </p>
          <p className="d-inline-flex gap-1">
            <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
              Testimonio Estudiante FACCI
            </a>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
              Testimonio estudiante Medicina
            </button>
          </p>
          <div className="row">
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample1">
                <div className="card card-body">
                  "El semestre pasado, me sentía abrumado por la carga académica y las presiones de la vida universitaria. Fue entonces cuando descubrí la Guía de Manejo del Estrés del Departamento de Bienestar. Las estrategias prácticas y los consejos realistas me ayudaron a encontrar un equilibrio entre el estudio y el tiempo para mí mismo. Aprendí técnicas de relajación que nunca pensé que serían tan efectivas. Ahora, me siento más centrado, tranquilo y capaz de abordar los desafíos con confianza. Estoy agradecido por el apoyo invaluable que encontré en esta guía, que ha marcado una gran diferencia en mi bienestar emocional y académico."
                </div>
              </div>
            </div>
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample2">
                <div className="card card-body">
                  "Entrar a la universidad fue emocionante, pero también desafiante. Me encontré lidiando con el estrés académico y la presión de adaptarme a un nuevo entorno. La Guía de Manejo del Estrés del Departamento de Bienestar fue mi salvavidas. Las estrategias para gestionar el tiempo y las sesiones de relajación me ayudaron a mantener la calma en momentos difíciles. Además, participar en los eventos de bienestar socializantes proporcionados por el departamento me permitió construir conexiones significativas con otros estudiantes. Hoy, puedo decir con confianza que estoy más cómodo, feliz y listo para enfrentar cualquier desafío que la vida universitaria pueda presentar. ¡Gracias al Departamento de Bienestar por estar allí cuando más lo necesitaba!"
                </div>
              </div>
            </div>
          </div>
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </body>
    </>
  );
};

export default GuiaManejoEstres;
