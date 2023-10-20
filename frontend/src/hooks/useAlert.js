import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useAlert = (type = '') => {

  if(!type) throw new Error('Type not specified');

  switch (type) {
    case 'auth':
        const authAlert = alert(getHaveNotificationAuth());
        return authAlert;
    case 'dashboard':  
        const dashboardAlert = alert(getHaveNotificationDashboard());
        return dashboardAlert
    default:
      break;
  }

}

const getHaveNotificationAuth = () => {
  const { haveNotification } = useSelector( state => state.auth );
  return haveNotification;
}

const getHaveNotificationDashboard = () => {
  const { haveNotification } = useSelector( state => state.dashboard );
  return haveNotification;
}

const alert = (haveNotification = {}) => {

    const [ mensaje, setMensaje ] = useState('');
    const [ tipo, setTipo ] = useState('');


    useEffect( () => {
      if( !haveNotification?.type ) {
        setMensaje('');
        setTipo('');
        return;
      }

      setMensaje(haveNotification?.msg);
      setTipo(haveNotification?.type);

    }, [haveNotification] );


    
  return {
    mensaje,
    tipo
  }
}