import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { technologiesContext } from './context';

import { searchingTechnologies } from '../../../store';
import { useModal } from '../../../hooks';
import { Table, AddRecord } from './components';
import { Modal } from '../components';

export const TechnologiesPage = () => {

  const dispatch = useDispatch();
  const { data } = useSelector( state => state.dashboard );

  const {
    addTechnology,
    editTechnology,
    deleteTechnology,
    isModalOpen,
    openCloseModal,
    contentModal
  } = useModal();

  const modal = {
    addTechnology,
    isModalOpen,
    openCloseModal,
    contentModal,
    editTechnology,
    deleteTechnology
  };

    useEffect( () => {
      dispatch(searchingTechnologies());
    }, [] );

  return (
    <div className='technologies'>
        <technologiesContext.Provider value={modal}>
          <Modal isModalOpen={isModalOpen} contentModal={contentModal} openCloseModal={openCloseModal} />
          <Table data={data} />
          <AddRecord addRecord={addTechnology} />
        </technologiesContext.Provider>
    </div>
  )
}

export default TechnologiesPage;