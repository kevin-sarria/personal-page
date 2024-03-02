import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { projectsContext } from "../context";
import { savingNewProject } from "../../../../store";

import { useFormik } from "formik";
import { UploadImageField } from "../../components";
import { TechnologiesTags } from "./TechnologiesTags";
import { searchTechnologies } from "../../../../interceptors";

export const AddProjectForm = () => {

    const [ visualizeImage, setVisualizeImage ] = useState(false);
    const [ allTechnologies, setAllTechnologies ] = useState();

    const { openCloseModal } = useContext(projectsContext);

    const dispatch = useDispatch();

    const { values, handleChange, resetForm, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            nombre: '',
            descripcion: '',
            repositorio: '',
            web: '',
        },
        onSubmit: () => {
            dispatch(savingNewProject(values));
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

    useEffect( () => {
        const findAllTechnologies = async() => {
            let technologies = await dispatch(searchTechnologies);
            setAllTechnologies(technologies);
        }
        findAllTechnologies();
    }, [] );

  return (
    <div className="form__container">

        <form className="form" onSubmit={handleSubmit}>

            <div className="field">
                <label htmlFor="nombre">Nombre del Proyecto</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={ values.nombre }
                    onChange={handleChange}
                    autoComplete="off"
                    required
                />
            </div>

            <div className="field">
                <label htmlFor="nombre">Descripcion</label>
                <textarea
                    name="descripcion"
                    id="descripcion"
                    value={values.descripcion}
                    onChange={handleChange}
                    cols="10"
                    rows="5"
                    required
                ></textarea>
            </div>

            <div className="field">
                <label htmlFor="nombre">Repositorio</label>
                <input
                    type="text"
                    name="repositorio"
                    id="repositorio"
                    value={ values.repositorio }
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="field">
                <label htmlFor="nombre">Web</label>
                <input
                    type="text"
                    name="web"
                    id="web"
                    value={ values.web }
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Escoger tecnologias */}
            <TechnologiesTags data={allTechnologies} setFieldValueFormik={setFieldValue} />

            {/* Subir imagen del proyecto */}
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