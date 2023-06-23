import { Link } from 'react-router-dom';
import { UseFetch, useForm } from '../../../hooks';

const initialState = {
  email: '',
  password: ''
};

export const LoginPage = () => {

  const { email, password, onInputChange, onResetForm } = useForm(initialState);

  const data = { email, password };

  const { login } = UseFetch(data);

  const handleSubmit = async(e) => {

    e.preventDefault();

    const respuesta = await login();

    console.log(respuesta);

    onResetForm();

  };

  return (
    <main className="formulario">

      <div className="formulario-bg">

        <div className="formulario__form">

          <h2>Iniciar Sesion</h2>

          <form onSubmit={handleSubmit}>

            <div className="formulario__form-campo">
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" name="email" required value={email} onChange={onInputChange} />
            </div>

            <div className="formulario__form-campo">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" required value={password} onChange={onInputChange} />
            </div>

            <Link to="/recuperar-cuenta">¿Has olvidado tu password?</Link>

            <input type="submit" value="Iniciar Sesion" />

          </form>

        </div>

      </div>

    </main>
  )
}
