import { useContext } from "react";
import { useDispatch } from "react-redux";
import { projectsContext } from "../context";
import { imageUtils } from "../../../../helpers/imagesUtils";
import { deletingProject } from "../../../../store";

export const DeleteProjectForm = ({ data, dataOld }) => {

    const { nombre, imagen } = data;

    const { openCloseModal } = useContext(projectsContext);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch(deletingProject(data, dataOld));
        openCloseModal();

    }

  return (
    <div className="delete-record">
        <p className="delete-record__msg">Deseas eliminar el Proyecto "{nombre}"?</p>
        <div className="delete-record__img">
            <img src={ imageUtils.getUrlImage(imagen) } alt="Imagen Proyecto" />
        </div>
        <div className="delete-record__options">
            
            <button
                className="back"
                onClick={openCloseModal}
            >
                Cancelar
            </button>

            <button
                className="delete"
                onClick={handleSubmit}
            >
                Eliminar
            </button>

        </div>
    </div>
  )
}
