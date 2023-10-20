import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { technologiesContext } from "../context";
import { editingTechnology } from "../../../../store";
import { imageUtils } from "../../../../helpers";

import { useFormik } from "formik";
import { UploadImageField } from "./UploadImageField";

export const EditTechnologyForm = ({ data, dataOld }) => {

    const [ visualizeImage, setVisualizeImage ] = useState(false);

    const { openCloseModal } = useContext(technologiesContext);
    const dispatch = useDispatch();

    const { id, nombre, imagen } = data;

    const { values, handleChange, resetForm, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            nombre
        },
        onSubmit: () => {

            const dataFormatted = {
                id,
                ...values
            }

            dispatch(editingTechnology(dataFormatted, dataOld));
            resetForm();
            openCloseModal();

        }
    })

    const handleImage = (e) => {
        let file = e.target.files[0];
        setFieldValue('imagen', file);
        file = URL.createObjectURL(file) ?? null;
        setVisualizeImage(file);
    }

    useEffect( () => {
        if( imagen ) {
            setVisualizeImage(imageUtils.getUrlImage(imagen));
        }
    }, [] );

  return (
    <div className="form__container">

        <form className="form" onSubmit={handleSubmit}>

            <div className="field">
                <label htmlFor="nombre">Nombre de la Tecnologia</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={ values.nombre }
                    onChange={handleChange}
                    required
                />
            </div>

            <UploadImageField onChangeImg={handleImage} />

            { visualizeImage && 
                <div className="field">
                    <img src={`${visualizeImage}`} alt="Previous Image" className="image--visualizer" />
                </div>
            }

            <div className="field">
                <button type="submit" className="button--submit">Registrar</button>
            </div>

        </form>

    </div>
  )
}
