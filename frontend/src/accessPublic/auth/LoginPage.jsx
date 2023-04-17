import { Link } from 'react-router-dom';


export const LoginPage = () => {

  const handleSubmit = (e) => {

    e.preventDefault();

  }

  return (
    <main className="formulario">

      <div className="formulario-bg">

        <div className="formulario__form">

          <h2>Iniciar Sesion</h2>

          <form onSubmit={handleSubmit}>

            <div className="formulario__form-campo">
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="formulario__form-campo">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" required />
            </div>

            <Link to="/recuperar-cuenta">¿Has olvidado tu password?</Link>

            <input type="submit" value="Iniciar Sesion" />

          </form>

        </div>

      </div>

    </main>
    
  )
}
