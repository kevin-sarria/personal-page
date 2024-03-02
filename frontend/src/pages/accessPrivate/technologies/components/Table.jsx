import { useContext } from 'react';
import { technologiesContext } from '../context';

import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { imageUtils } from '../../../../helpers';

export const Table = ({ data = [] }) => {

  const datos = data.map( obj => obj );

  const { editTechnology, deleteTechnology } = useContext(technologiesContext);

  return (
    <div className="table__container">
      <table className="table">

        <thead className="table__thead">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Opciones</th>
          </tr>
        </thead>

        <tbody className="table__tbody">
          
          {
            datos.map( ( objeto, index ) => (
              <tr key={index}>
                <td>{ index + 1 }</td>
                <td>{ objeto?.nombre }</td>
                <td className="table__image">
                  <img src={ imageUtils.getUrlImage(objeto?.imagen) } alt="Imagen del proyecto" />
                </td>
                <td>
                  <div className="table__options">
                    <button onClick={ () => editTechnology(objeto, datos) }><BiEditAlt /></button>
                    <button onClick={ () => deleteTechnology(objeto, datos) }><BiTrash /></button>
                  </div>
                </td>
              </tr>
            ) )
          }

        </tbody>

        </table>
    </div>
  )
}
