import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { technologiesContext } from "../context";
import { savingNewTechnology } from "../../../../store";

import { useFormik } from "formik";
import { UploadImageField } from "./UploadImageField";

export const AddTechnologyForm = () => {

    const [ visualizeImage, setVisualizeImage ] = useState(false);

    const { openCloseModal } = useContext(technologiesContext);

    const dispatch = useDispatch();

    const { values, handleChange, resetForm, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            nombre: ''
        },
        onSubmit: () => {

            dispatch(savingNewTechnology(values));
            resetForm();
            openCloseModal();

        }
    })

    const handleImage = (e) => {
        let file = e.target.files[0];
        setFieldValue('imagen', file);
        file = URL.createObjectURL(file);
        setVisualizeImage(file);
    }

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
