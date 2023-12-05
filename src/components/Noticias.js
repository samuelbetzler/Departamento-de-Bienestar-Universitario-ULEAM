import React from 'react';

const Noticias = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Noticias</h1>

      <div className="row">
        {/* Noticia 1 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <img src="/Noticias/Noticia1.jpg" className="card-img-top" alt="Noticia 1" />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary">
                Leer más
              </a>
            </div>
          </div>
        </div>

        {/* Noticia 2 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <img src="/Noticias/Noticia2.jpg" className="card-img-top" alt="Noticia 2" />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary">
                Leer más
              </a>
            </div>
          </div>
        </div>

        {/* Noticia 3 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <img src="/Noticias/Noticia3.jpg" className="card-img-top" alt="Noticia 3" />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary">
                Leer más
              </a>
            </div>
          </div>
        </div>

        {/* Noticia 4 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <img src="/Noticias/Noticia4.jpg" className="card-img-top" alt="Noticia 4" />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary">
                Leer más
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
