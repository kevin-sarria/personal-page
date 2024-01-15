import { useDispatch, useSelector } from "react-redux";
import { projectsContext } from './context'

import { Modal } from "../components";
import { AddRecord, Table } from "./components";
import { useModal } from "../../../hooks";
import { useEffect } from "react";
import { searchingProjects } from "../../../store";

export const ProjectsPage = () => {

  const dispatch = useDispatch();
  const { data } = useSelector( state => state.dashboard );

  const {
    addProject,
    editProject,
    deleteProject,
    isModalOpen,
    openCloseModal,
    contentModal
  } = useModal();

  const modal = {
    addProject,
    isModalOpen,
    openCloseModal,
    contentModal,
    editProject,
    deleteProject
  };

  useEffect( () => {
    dispatch(searchingProjects());
  }, [] );

  return (
    <div className="projects">
      <projectsContext.Provider value={modal}>
        <Modal isModalOpen={isModalOpen} contentModal={contentModal} openCloseModal={openCloseModal} />
        <Table data={data} />
        <AddRecord />
      </projectsContext.Provider>
    </div>
  )
}

export default ProjectsPage;