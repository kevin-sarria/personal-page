import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <main className="page-not-found">
      <div className="page-not-found__container">
        <h1>Oops!!! Parece que esta pagina no existe...</h1>
        <p>Puedes volver al inicio con el siguiente boton:</p>
        <Link to="/" className='page-not-found__boton-inicio'>Inicio</Link>
      </div>
    </main>
  )
}
