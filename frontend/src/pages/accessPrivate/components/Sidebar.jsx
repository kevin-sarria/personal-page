

export const Sidebar = () => {
  return (
    <aside className="sidebar">

      <div className="sidebar__container">

        <div className="sidebar__icon">
          <p>{'<SarriaDev />'}</p>
        </div>

      <div className="sidebar__links">
        <a href="/dashboard">Inicio</a>
        <a href="/projects">Proyectos</a>
        <a href="/config">Configuracion</a>
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
  )
}