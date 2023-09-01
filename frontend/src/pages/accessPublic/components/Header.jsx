

export const Header = () => {
    return (
        
        <header className="header-public">

            <div className="barra-navegacion">
                <a href="#">
                    <div className="logo">
                        SarriaDev
                    </div>
                </a>

                <div className="menu-icon">
                    <div className="icon"></div>
                </div>

                <nav className="navegacion">
                    <a href="#" className="navegacion__link">Inicio</a>
                    <a href="#" className="navegacion__link">Sobre Mi</a>
                    <a href="#" className="navegacion__link">Proyectos</a>
                    <a href="#" className="navegacion__link">Contacto</a>
                </nav>
            </div>

            <div className="header-content">
                <h1 className="header-content__title">Frontend Developer</h1>
                <p className="header-content__paragraph">Codifico soluciones de calidad y efectivas a tus problemas, me encantaria ayudarte.</p>
            </div>

            <div className="header-footer">
                <div className="arrow-bottom"></div>
            </div>

        </header>
        
    )
}
