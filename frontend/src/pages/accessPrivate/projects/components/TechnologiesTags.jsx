import { useEffect, useState } from "react";
import { technologiesByProjectAdapter } from "../adapters";

export const TechnologiesTags = ({ data, setFieldValueFormik, technologiesSelected }) => {

    const [ chosenTechnologies, setChosenTechnologies ] = useState([]);
    const [ foundTechnologies, setFoundTechnologies ] = useState([]);

    const searchTechnology = ( wordToAsk = '' ) => {
        if( !wordToAsk ) {
            return setFoundTechnologies([]);
        }

        const result = data.filter((obj) => obj.nombre.toLowerCase().includes(wordToAsk.toLowerCase()) );
        if( result ) {
            setFoundTechnologies(result);
        }

    }

    const selectTechnology = ( technology ) => {
        setChosenTechnologies(prev => [...prev, technology]);

        const result = foundTechnologies.filter((obj) => obj.id !== technology?.id );
        if( result ) {
            setFoundTechnologies(result);
        }

    }

    const removeTechnology = ( id ) => {

        const result = chosenTechnologies.filter( obj => obj?.id !== id );
        if( result ) {
            setChosenTechnologies(result);
        }

    }

    useEffect( () => {
        const idsTechnologies = chosenTechnologies.map( obj => obj?.id );
        setFieldValueFormik('tecnologias', idsTechnologies);
    }, [chosenTechnologies] );

    useEffect( () => {
        if( technologiesSelected ) {
            const tecnologias = technologiesByProjectAdapter(technologiesSelected);
            setChosenTechnologies(tecnologias);
        }
    }, [] );

    const handleChange = ( e ) => {
        setTimeout(() => {
            searchTechnology(e.target.value);
        }, 200);
    }

  return (
    <div className='field'>
        <div>
            <label htmlFor="technologies">Tecnologias</label>
            <input
                type="text"
                name="technologies"
                id="technologies"
                onChange={handleChange}
                autoComplete="off"
            />

            {
                foundTechnologies.length > 0 &&
                <ul className="technologies-list">
                {
                    foundTechnologies && foundTechnologies?.map( (obj, index) => (
                        <li
                            key={index}
                            onClick={ () => { selectTechnology(obj) } }
                        >
                            {obj?.nombre}
                        </li>
                    ) )
                }
                </ul>
            }
            {
                chosenTechnologies &&

                <div className="tags--container">
                    {
                        chosenTechnologies.map( (obj, index) => (
                            <span
                                key={index}
                                className="tag-technology"
                            >
                                {obj?.nombre}
                                <span
                                    className="remove-tag"
                                    onClick={ () => removeTechnology(obj?.id) }
                                >
                                    X
                                </span>
                            </span>
                        ) )
                    }
                </div>
            }
        </div>
    </div>
  )
}
