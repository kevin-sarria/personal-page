import { useEffect, useState } from "react";
import { AddProjectForm, AddTechnologyForm, DeleteProjectForm, DeleteTechnologyForm, EditProjectForm, EditTechnologyForm } from "../pages";

export const useModal = () => {

    const [ contentModal, setContentModal ] = useState(null);
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    useEffect( () => {
      if( !isModalOpen ) {
        setContentModal(null);
      }
    }, [isModalOpen] );

    const openCloseModal = () => {
      setIsModalOpen( prev => !prev );
    }
    
    const addTechnology = () => {
      setContentModal(<AddTechnologyForm />);
      openCloseModal();
    }

    const editTechnology = (data, dataOld) => {
      setContentModal(<EditTechnologyForm data={data} dataOld={dataOld} />);
      openCloseModal();
    }

    const deleteTechnology = (data, dataOld) => {
      setContentModal(<DeleteTechnologyForm data={data} dataOld={dataOld} />);
      openCloseModal();
    }

    const addProject = () => {
      setContentModal(<AddProjectForm />);
      openCloseModal();
    }

    const editProject = (data, dataOld) => {
      setContentModal(<EditProjectForm data={data} dataOld={dataOld} />);
      openCloseModal();
    }

    const deleteProject = (data, dataOld) => {
      setContentModal(<DeleteProjectForm data={data} dataOld={dataOld} />);
      openCloseModal();
    }

  return {
    // Variables
    contentModal,
    isModalOpen,

    // Functions
    openCloseModal,
    addTechnology,
    editTechnology,
    deleteTechnology,
    addProject,
    editProject,
    deleteProject,
  }
}
