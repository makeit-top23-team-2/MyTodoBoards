import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import { addCollaborators } from '../../services/boards';

function AddCollaborators({
  isAddCollaboratorsModalOpened,
  setIsAddCollaboratorsModalOpened,
  id,
}) {
  const [email, setEmail] = useState('');
  const handleCloseModal = () => {
    setIsAddCollaboratorsModalOpened(false);
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleAddCollaborators = async () => {
    await addCollaborators(id, email);
    setIsAddCollaboratorsModalOpened(false);
    // window.location.reload();
  };

  return createPortal(
    <div>
      {isAddCollaboratorsModalOpened && (
        <div className='modal__addCollaborators'>
          <main className='modal__addCollaborators__main'>
            <header className='modal__addCollaborators__header'>
              <button
                type='button'
                className='button'
                onClick={handleCloseModal}
              >
                <i className='fa-solid fa-xmark' />
              </button>
              <br />
              <p className='title'>
                Enter the email address of the Collaborator you want to invite.
              </p>
              <div className='modal__addCollaborators__input'>
                <input
                  type='text'
                  placeholder='Enter the email address...'
                  onChange={handleChange}
                  className='input'
                />
              </div>
              <div className='boton__addCollaborators__container'>
                <button
                  type='button'
                  onClick={handleAddCollaborators}
                  className='addCollaborators__button'
                >
                  <b>Add Collaborator</b>
                </button>
              </div>
            </header>
          </main>
        </div>
      )}
    </div>,
    document.getElementById('modal')
  );
}

AddCollaborators.propTypes = {
  isAddCollaboratorsModalOpened: PropTypes.bool,
  setIsAddCollaboratorsModalOpened: PropTypes.func,
};
AddCollaborators.defaultProps = {
  isAddCollaboratorsModalOpened: false,
  setIsAddCollaboratorsModalOpened: () => null,
};

export default AddCollaborators;
