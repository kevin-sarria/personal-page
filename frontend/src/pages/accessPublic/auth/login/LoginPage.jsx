import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { startingLogin } from '../../../../store';

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { values, handleChange, resetForm, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async() => {

      dispatch(startingLogin(values));
      
      resetForm();
      
    }
  });


  return (
    <main className="formulario">

      <div className="formulario-bg">

        <div className="formulario__form">

          <h2>Iniciar Sesion</h2>

          <form onSubmit={handleSubmit}>

            <div className="formulario__form-campo">
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" name="email" value={values.email} onChange={handleChange} required />
            </div>

            <div className="formulario__form-campo">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" value={values.password} onChange={handleChange} required />
            </div>

            <Link to="/recuperar-cuenta">¿Has olvidado tu password?</Link>

            <input type="submit" value="Iniciar Sesion" />

          </form>

        </div>

      </div>

    </main>
  )
}
