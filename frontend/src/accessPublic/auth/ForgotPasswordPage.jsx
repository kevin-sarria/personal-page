import { Link } from "react-router-dom";

export const ForgotPasswordPage = () => {

    const handleSubmit = (e) => {

        e.preventDefault();

    }

  return (
    <main className="formulario">

      <div className="formulario-bg">

        <div className="formulario__form">

          <h2>Recuperar Cuenta</h2>

          <form onSubmit={handleSubmit}>

            <div className="formulario__form-campo">
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" name="email" required />
            </div>

            <Link to="/login">¿Ya tienes una cuenta?</Link>

            <input type="submit" value="Enviar Instrucciones" />

          </form>

        </div>

      </div>

    </main>
  )
}
