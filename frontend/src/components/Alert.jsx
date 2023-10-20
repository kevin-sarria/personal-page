import { useAlert } from "../hooks";

export const Alert = ({ type = '' }) => {

  if( !type ) return;

  const alert = useAlert(type);

  return (
    <div className={ alert.tipo ? `alert alert--${alert.tipo}` : 'alert' }>
      { alert.mensaje }
    </div>
  )
}
