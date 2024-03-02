import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { closingSession } from '../../../store';
import { localSpace } from '../../../interceptors';

export const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {

  const dispatch = useDispatch();
  const navigate= useNavigate();

  const closeSession = () => {
    const closeSesion = window.confirm('Seguro que desea Cerrar Sesion?');

    if( closeSesion ) {
      localSpace.removeAll();
      dispatch(closingSession());
      navigate('/');
    }
  }

  return (
    <aside className={ isSidebarOpen ? 'sidebar sidebar--open' : 'sidebar sidebar--close' }>
      <div className="close__menu">
        <button onClick={toggleSidebar}>X</button>
      </div>

      <div className="sidebar__container">
        <div className="sidebar__icon">
          <p className="logo">SarriaDev</p>
        </div>

        <div className="sidebar__links">
          <NavLink onClick={toggleSidebar} to="/dashboard">Inicio</NavLink>
          <NavLink onClick={toggleSidebar} to="/technologies">Tecnologias</NavLink>
          <NavLink onClick={toggleSidebar} to="/projects">Proyectos</NavLink>
          <NavLink onClick={toggleSidebar} to="/config">Configuracion</NavLink>
        </div>

        <div className="sidebar__options">
          <div className="option">
            <img src="/img/icons/config.svg" alt="Icono Configuracion" />
          </div>

          <div
            className="option"
            onClick={closeSession}
          >
            <img src="/img/icons/exit.svg" alt="Icono Cerrar Session" />
          </div>
        </div>
      </div>
    </aside>
  );
};