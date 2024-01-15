import { useContext } from 'react';
import { projectsContext } from '../context';

import { BiEditAlt, BiTrash, BiGlobe, BiLogoGithub } from 'react-icons/bi';
import { imageUtils } from '../../../../helpers';

export const Table = ({ data = [] }) => {

  const datos = data.map( obj => obj );

  const { editProject, deleteProject } = useContext(projectsContext);

  return (
    <table className="table">

      <thead className="table__thead">
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Imagen</th>
          <th>repositorio</th>
          <th>Web</th>
          <th>Tecnologias</th>
          <th>Opciones</th>
        </tr>
      </thead>

      <tbody className="table__tbody">
        
        {
          datos.map( ( objeto, index ) => (
            <tr key={index}>
              <td>{ index + 1 }</td>
              <td>{ objeto?.nombre }</td>
              <td>{ objeto?.descripcion }</td>
              <td className="table__image">
                <img src={ imageUtils.getUrlImage(objeto?.imagen) } alt="Imagen del proyecto" />
              </td>
              <td className='table__github--img'><a href={ objeto?.repositorio } target='_blank'><BiLogoGithub /></a></td>
              <td className='table__web--img'><a href={ objeto?.web } target='_blank'><BiGlobe /></a></td>
              <td>{ objeto?.tecnologias }</td>
              <td>
                <div className="table__options">
                  <button onClick={ () => editProject(objeto, datos) }><BiEditAlt /></button>
                  <button onClick={ () => deleteProject(objeto, datos) }><BiTrash /></button>
                </div>
              </td>
            </tr>
          ) )
        }

      </tbody>

    </table>
  )
}
