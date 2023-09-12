

export const Table = () => {
  return (
    <table className="table">

      <thead className="table__thead">
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Imagen</th>
          <th>Tecnologias</th>
          <th>Repositorio</th>
          <th>Pagina Web</th>
          <th></th>
        </tr>
      </thead>

      <tbody className="table__tbody">
        
        <tr>
          <td>Project Veterinary</td>
          <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam hic quis accusamus dolorum reprehenderit nihil alias, distinctio fuga dicta dolore.</td>
          <td className="table__image"><img src="/img/dashboard.webp" alt="Imagen del proyecto" /></td>
          <td>1, 2, 3</td>

          <td className="table__github--img">
              <a href="https://github.com/kevin-sarria/aplicacion_pacientes_veterinaria" target="_blank">
                <img src="/img/icons/github.svg" alt="Icono Github" />
              </a>
          </td>
          <td className="table__web--img">
            <a href="https://administrador-citas-kevin-sarria.netlify.app/" target="_blank">
              <img src="/img/icons/web.svg" alt="Icono Web" />
            </a>  
          </td>

          <td>
            <div className="table__options">
              <button><img src="/img/icons/edit.svg" alt="Icono Editar" /></button>
              <button><img src="/img/icons/trash.svg" alt="Icono Eliminar" /></button>
            </div>
          </td>
        </tr>

      </tbody>

    </table>
  )
}
