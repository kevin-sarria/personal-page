import { useEffect, useState } from "react"
import { getEnvVariables } from "../../../helpers"
import { useSelector } from "react-redux"

const addOverlay = (e) => {
    e.target.parentElement.classList.add('overlay-active')
}

const removeOverlay = (e) => {
    e.target.parentElement.classList.remove('overlay-active')
}

export const MyProjects = () => {

    const [ projects, setProjects ] = useState();

    const { VITE_BACKEND_URL } = getEnvVariables();

    const { data } = useSelector( state => state.dashboard );

    useEffect( () => {
        if( data?.allProjects ) {
          setProjects(data?.allProjects);
        }
      }, [data] );

    return (
        <section className="my-projects">

            <div className="my-projects__container">

                <h2 className="my-projects__heading">Mis Proyectos</h2>

                <div className="my-projects__flex">
                    {
                        projects && projects.map( ({ nombre, descripcion, imagen, repositorio, web, tecnologias }, index) => (
                            <div className="my-projects__project" key={index}>
                                <div className="my-projects__project--overlay" onMouseEnter={(e) => addOverlay(e)} onMouseLeave={(e) => removeOverlay(e)}>
                                    <img src={`${VITE_BACKEND_URL}${imagen}`} alt="Imagen del proyecto" />
                                    <div className="buttons">
                                        <a href={`${web}`} target="_blank"><img src="/img/icons/web.png" alt="Icono web" />Web</a>
                                        <a href={`${repositorio}`} target="_blank"><img src="/img/icons/github.svg" alt="Icono Github" />Github</a>
                                    </div>
                                </div>

                                <div className="my-projects__project--content">
                                    <h4>{nombre}</h4>
                                    <p>{descripcion}</p>

                                    <h4>Tecnologias</h4>

                                    <div className="my-projects__project--content-technologies">
                                        {
                                            tecnologias && tecnologias.map( ({ nombre_tecnologia, imagen_tecnologia }, index) => (
                                                <div className="technologie" key={index}>
                                                    <img src={`${VITE_BACKEND_URL}${imagen_tecnologia}`} alt={`Icono ${nombre_tecnologia}`} />
                                                    <p>{nombre_tecnologia}</p>
                                                </div>
                                            ) )
                                        }
                                    </div>
                                </div>
                            </div>
                        ) )
                    }
                    
                </div>


            </div>

        </section>
    )
}
