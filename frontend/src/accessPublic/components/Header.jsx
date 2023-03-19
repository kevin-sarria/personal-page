

export const Header = () => {
    return (
        
        <header className="header-public">

            <div className="barra-navegacion">
                <a href="#">
                    <div className="logo">
                        SarriaDev
                    </div>
                </a>

                <nav className="navegacion">
                    <a href="#" className="navegacion__link">Inicio</a>
                    <a href="#" className="navegacion__link">Sobre Mi</a>
                    <a href="#" className="navegacion__link">Proyectos</a>
                    <a href="#" className="navegacion__link">Contacto</a>
                </nav>
            </div>

            <div className="header-content">
                <h1 className="header-content__title">Frontend Developer</h1>
                <p className="header-content__paragraph">Codifico soluciones simples y efectivas a tus problemas, me encanta lo que hago.</p>
            </div>

            <div className="header-footer">
                <div className="arrow-bottom"></div>
            </div>

        </header>
        
    )
}
