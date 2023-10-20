import { useContext } from "react";
import { useDispatch } from "react-redux";
import { technologiesContext } from "../context";
import { imageUtils } from "../../../../helpers/imagesUtils";
import { deletingTechnology } from "../../../../store";

export const DeleteTechnologyForm = ({ data, dataOld }) => {

    const { nombre, imagen } = data;

    const { openCloseModal } = useContext(technologiesContext);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch(deletingTechnology(data, dataOld));
        openCloseModal();

    }

  return (
    <div className="delete-record">
        <p className="delete-record__msg">Deseas eliminar el registro "{nombre}"?</p>
        <div className="delete-record__img">
            <img src={ imageUtils.getUrlImage(imagen) } alt="Imagen Tecnologia" />
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
