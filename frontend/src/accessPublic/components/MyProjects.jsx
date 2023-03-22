
const addOverlay = (e) => {
    e.target.parentElement.classList.add('overlay-active')
}

const removeOverlay = (e) => {
    e.target.parentElement.classList.remove('overlay-active')
}

export const MyProjects = () => {
    return (
        <section className="my-projects">

            <div className="my-projects__container">

                <h2 className="my-projects__heading">Mis Proyectos</h2>

                <div className="my-projects__flex">
                    <div className="my-projects__project"> { /* open .my-projects__project */}
                        <div className="my-projects__project--overlay" onMouseEnter={(e) => addOverlay(e)} onMouseLeave={(e) => removeOverlay(e)}>
                            <img src="/img/dashboard.webp" alt="Imagen del proyecto" />
                            <div className="buttons">
                                <a href="#"><img src="/img/icons/web.png" alt="Icono web" />Web</a>
                                <a href="#"><img src="/img/icons/github.svg" alt="Icono Github" />Github</a>
                            </div>
                        </div>

                        <div className="my-projects__project--content">
                            <h4>Project Veterinary</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam hic quis accusamus dolorum reprehenderit nihil alias, distinctio fuga dicta dolore.</p>
                            <div className="my-projects__project--content-technologies">

                                <div className="technologie">
                                    <img src="/img/icons/html.svg" alt="Icono HTML" />
                                    <p>HTML</p>
                                </div>

                                <div className="technologie">
                                    <img src="/img/icons/css.svg" alt="Icono CSS" />
                                    <p>CSS</p>
                                </div>

                                <div className="technologie">
                                    <img src="/img/icons/javascript.svg" alt="Icono JavaScript" />
                                    <p>Javascript</p>
                                </div>

                            </div>
                        </div>
                    </div> { /* close .my-projects__project */}


                    <div className="my-projects__project"> { /* open .my-projects__project */}
                        <div className="my-projects__project--overlay" onMouseEnter={(e) => addOverlay(e)} onMouseLeave={(e) => removeOverlay(e)}>
                            <img src="/img/dashboard.webp" alt="Imagen del proyecto" />
                            <div className="buttons">
                                <a href="#"><img src="/img/icons/web.png" alt="Icono web" />Web</a>
                                <a href="#"><img src="/img/icons/github.svg" alt="Icono Github" />Github</a>
                            </div>
                        </div>

                        <div className="my-projects__project--content">
                            <h4>Project Veterinary</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam hic quis accusamus dolorum reprehenderit nihil alias, distinctio fuga dicta dolore.</p>
                            <div className="my-projects__project--content-technologies">

                                <div className="technologie">
                                    <img src="/img/icons/html.svg" alt="Icono HTML" />
                                    <p>HTML</p>
                                </div>

                                <div className="technologie">
                                    <img src="/img/icons/css.svg" alt="Icono CSS" />
                                    <p>CSS</p>
                                </div>

                                <div className="technologie">
                                    <img src="/img/icons/javascript.svg" alt="Icono JavaScript" />
                                    <p>Javascript</p>
                                </div>

                            </div>
                        </div>
                    </div> { /* close .my-projects__project */}


                    <div className="my-projects__project"> { /* open .my-projects__project */}
                        <div className="my-projects__project--overlay" onMouseEnter={(e) => addOverlay(e)} onMouseLeave={(e) => removeOverlay(e)}>
                            <img src="/img/dashboard.webp" alt="Imagen del proyecto" />
                            <div className="buttons">
                                <a href="#"><img src="/img/icons/web.png" alt="Icono web" />Web</a>
                                <a href="#"><img src="/img/icons/github.svg" alt="Icono Github" />Github</a>
                            </div>
                        </div>

                        <div className="my-projects__project--content">
                            <h4>Project Veterinary</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam hic quis accusamus dolorum reprehenderit nihil alias, distinctio fuga dicta dolore.</p>
                            <div className="my-projects__project--content-technologies">

                                <div className="technologie">
                                    <img src="/img/icons/html.svg" alt="Icono HTML" />
                                    <p>HTML</p>
                                </div>

                                <div className="technologie">
                                    <img src="/img/icons/css.svg" alt="Icono CSS" />
                                    <p>CSS</p>
                                </div>

                                <div className="technologie">
                                    <img src="/img/icons/javascript.svg" alt="Icono JavaScript" />
                                    <p>Javascript</p>
                                </div>

                            </div>
                        </div>
                    </div> { /* close .my-projects__project */}


                    <div className="my-projects__project"> { /* open .my-projects__project */}
                        <div className="my-projects__project--overlay" onMouseEnter={(e) => addOverlay(e)} onMouseLeave={(e) => removeOverlay(e)}>
                            <img src="/img/dashboard.webp" alt="Imagen del proyecto" />
                            <div className="buttons">
                                <a href="#"><img src="/img/icons/web.png" alt="Icono web" />Web</a>
                                <a href="#"><img src="/img/icons/github.svg" alt="Icono Github" />Github</a>
                            </div>
                        </div>

                        <div className="my-projects__project--content">
                            <h4>Project Veterinary</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam hic quis accusamus dolorum reprehenderit nihil alias, distinctio fuga dicta dolore.</p>
                            <div className="my-projects__project--content-technologies">

                                <div className="technologie">
                                    <img src="/img/icons/html.svg" alt="Icono HTML" />
                                    <p>HTML</p>
                                </div>

                                <div className="technologie">
                                    <img src="/img/icons/css.svg" alt="Icono CSS" />
                                    <p>CSS</p>
                                </div>

                                <div className="technologie">
                                    <img src="/img/icons/javascript.svg" alt="Icono JavaScript" />
                                    <p>Javascript</p>
                                </div>

                            </div>
                        </div>
                    </div> { /* close .my-projects__project */}


                    <div className="my-projects__project"> { /* open .my-projects__project */}
                        <div className="my-projects__project--overlay" onMouseEnter={(e) => addOverlay(e)} onMouseLeave={(e) => removeOverlay(e)}>
                            <img src="/img/dashboard.webp" alt="Imagen del proyecto" />
                            <div className="buttons">
                                <a href="#"><img src="/img/icons/web.png" alt="Icono web" />Web</a>
                                <a href="#"><img src="/img/icons/github.svg" alt="Icono Github" />Github</a>
                            </div>
                        </div>

                        <div className="my-projects__project--content">
                            <h4>Project Veterinary</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam hic quis accusamus dolorum reprehenderit nihil alias, distinctio fuga dicta dolore.</p>
                            <div className="my-projects__project--content-technologies">

                                <div className="technologie">
                                    <img src="/img/icons/html.svg" alt="Icono HTML" />
                                    <p>HTML</p>
                                </div>

                                <div className="technologie">
                                    <img src="/img/icons/css.svg" alt="Icono CSS" />
                                    <p>CSS</p>
                                </div>

                                <div className="technologie">
                                    <img src="/img/icons/javascript.svg" alt="Icono JavaScript" />
                                    <p>Javascript</p>
                                </div>

                            </div>
                        </div>
                    </div> { /* close .my-projects__project */}


                    <div className="my-projects__project"> { /* open .my-projects__project */}
                        <div className="my-projects__project--overlay" onMouseEnter={(e) => addOverlay(e)} onMouseLeave={(e) => removeOverlay(e)}>
                            <img src="/img/dashboard.webp" alt="Imagen del proyecto" />
                            <div className="buttons">
                                <a href="#"><img src="/img/icons/web.png" alt="Icono web" />Web</a>
                                <a href="#"><img src="/img/icons/github.svg" alt="Icono Github" />Github</a>
                            </div>
                        </div>

                        <div className="my-projects__project--content">
                            <h4>Project Veterinary</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam hic quis accusamus dolorum reprehenderit nihil alias, distinctio fuga dicta dolore.</p>
                            <div className="my-projects__project--content-technologies">

                                <div className="technologie">
                                    <img src="/img/icons/html.svg" alt="Icono HTML" />
                                    <p>HTML</p>
                                </div>

                                <div className="technologie">
                                    <img src="/img/icons/css.svg" alt="Icono CSS" />
                                    <p>CSS</p>
                                </div>

                                <div className="technologie">
                                    <img src="/img/icons/javascript.svg" alt="Icono JavaScript" />
                                    <p>Javascript</p>
                                </div>

                            </div>
                        </div>
                    </div> { /* close .my-projects__project */}
                </div>


            </div>

        </section>
    )
}
