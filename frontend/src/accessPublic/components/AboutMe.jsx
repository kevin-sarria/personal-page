

export const AboutMe = () => {
  return (
    <main className="about-me">

      <div className="about-me__grid">

        <div className="about-me__content">
          <img src="/img/user-2.png" alt="Imagen sobre mi" />
          <h3>Hola, soy Kevin. Encantado de conocerte.</h3>
          <p>Desde muy pequeño adquiri un gusto a las computadoras llevandome asi a ser muy curioso, desde muy temprana edad se surgian preguntas como: ¿ Cómo se hace eso ?, ¿Por qué se hace asi?, ¿ Puedo yo tambien desarmar mi propio equipo?, ¿ Alo ?, mamá la pc ya no enciende, jajaja, en fin, desde muy temprano ame el mundo de las computadoras y esto me llevo a querer adentrarme en el como desarrollador web. </p>
        </div>

        <div className="about-me__technologies">
          
          <div className="about-me__technologies--text">
            <h3>Acerca de mis habilidades</h3>
            <p>Cuento con habilidades para codificar en algunas tecnologias como lo son React con Redux, Dar estilos a paginas con TailwindCSS y hacer un backend con PHP, pero estas no son las unicas tecnologias que manejo, otras que me ayudan en mi dia a dia a realizar mis proyectos son:</p>
          </div>

          <div className="about-me__technologies--technologie">

            <div className="technologie">
              <img src="/img/icons/html.svg" alt="Icono Html" />
              <p>HTML</p>
            </div>

            <div className="technologie">
              <img src="/img/icons/css.svg" alt="Icono CSS" />
              <p>CSS</p>
            </div>

            <div className="technologie">
              <img src="/img/icons/sass.svg" alt="Icono SASS" />
              <p>SASS</p>
            </div>

            <div className="technologie">
              <img src="/img/icons/tailwindcss.svg" alt="Icono TailwindCSS" />
              <p>TailwindCSS</p>
            </div>
            
            <div className="technologie">
              <img src="/img/icons/javascript.svg" alt="Icono JavaScript" />
              <p>JavaScript</p>
            </div>

            <div className="technologie">
              <img src="/img/icons/react.svg" alt="Icono React" />
              <p>React</p>
            </div>

            <div className="technologie">
              <img src="/img/icons/php.svg" alt="Icono PHP" />
              <p>PHP</p>
            </div>

            <div className="technologie">
              <img src="/img/icons/mysql.svg" alt="Icono MySQL" />
              <p>MySQL</p>
            </div>

            <div className="technologie">
              <img src="/img/icons/git.svg" alt="Icono Git" />
              <p>Git</p>
            </div>

          </div>
        </div>
      </div>

    </main>
  )
}
