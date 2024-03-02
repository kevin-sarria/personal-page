import { LiaTimesSolid } from 'react-icons/lia'

export const Modal = ({ isModalOpen, contentModal, openCloseModal }) => {
  return (
    <>
        {
            isModalOpen && 
            <div
                className="overlay"
                onClick={openCloseModal}
            >
                <div
                    className="modal"
                    onClick={ (e) => e.stopPropagation() }
                >
                    <div
                        className="close--modal"
                        onClick={openCloseModal}
                    >
                        <LiaTimesSolid />
                    </div>

                    <div className="modal__content">
                        {contentModal}
                    </div>
                    
                </div>
            </div>
        }
    </>
  )
}
