import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { projectsContext } from "../context";
import { editingProject } from "../../../../store";
import { imageUtils } from "../../../../helpers";

import { useFormik } from "formik";
import { UploadImageField } from "../../components";
import { TechnologiesTags } from "./TechnologiesTags";
import { searchTechnologies } from "../../../../interceptors";

export const EditProjectForm = ({ data, dataOld }) => {

    const [ visualizeImage, setVisualizeImage ] = useState(false);
    const [ allTechnologies, setAllTechnologies ] = useState();

    const { openCloseModal } = useContext(projectsContext);
    const dispatch = useDispatch();

    const { id, nombre, descripcion, repositorio, web, tecnologias, imagen } = data;

    const { values, handleChange, resetForm, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            nombre,
            descripcion,
            repositorio,
            web
        },
        onSubmit: () => {

            const dataFormatted = {
                id,
                ...values
            }

            dispatch(editingProject(dataFormatted, dataOld));
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
    <TechnologiesTags data={allTechnologies} setFieldValueFormik={setFieldValue} technologiesSelected={tecnologias} />

    {/* Subir imagen del proyecto */}
    <UploadImageField onChangeImg={handleImage} />

    { visualizeImage && 
        <div className="field">
            <img src={`${visualizeImage}`} alt="Previous Image" className="image--visualizer" />
        </div>
    }

    <div className="field">
        <button type="submit" className="button--submit">Actualizar</button>
    </div>

    </form>

    </div>
  )
}
