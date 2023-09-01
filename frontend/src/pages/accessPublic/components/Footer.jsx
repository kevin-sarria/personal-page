

export const Footer = () => {
  return (
    <footer className="footer">

        <div className="footer__content">

            <div className="footer__content--social">

                <div className="social">
                    <a href="#">
                        <img src="/img/icons/twitter.png" alt="Icono Twitter" />
                    </a>
                </div>

                <div className="social">
                    <a href="#">
                        <img src="/img/icons/linkedin.png" alt="Icono Linkedin" />
                    </a>
                </div>

                <div className="social">
                    <a href="#">
                        <img src="/img/icons/github.svg" alt="Icono Github" />
                    </a>
                </div>

                <div className="social">
                    <a href="#">
                        <img src="/img/icons/correo.png" alt="Icono Mensaje" />
                    </a>
                </div>

            </div>
            
            <p className="copyright">Todos los derechos Reservados. &copy;</p>
        </div>

    </footer>
  )
}
