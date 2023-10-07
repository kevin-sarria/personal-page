import { NavLink } from 'react-router-dom';

export const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {

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

          <div className="option">
            <img src="/img/icons/exit.svg" alt="Icono Cerrar Session" />
          </div>
        </div>
      </div>
    </aside>
  );
};