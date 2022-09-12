import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import Swal from 'sweetalert2';
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

  const handleAddCollaborators = async e => {
    e.preventDefault();
    const response = await addCollaborators(id, { email });
    setIsAddCollaboratorsModalOpened(false);

    if (response.status === 200) {
      Swal.fire({
        title: 'Collaborator added!',
        text: 'An invitation email has been sent to the collaborator.',
        icon: 'success',
        confirmButtonText: 'Nice!',
      });
    }
    if (response.status === 404) {
      Swal.fire({
        title: `This collaborator can't be added at this time!`,
        text: 'This email address is not registered in Trello.',
        icon: 'warning',
        confirmButtonText: 'Ok!',
      });
    }
    if (response.status === 500) {
      Swal.fire({
        title: 'We are sorry. An error has ocurred!',
        text: 'Please, try again later.',
        icon: 'error',
        confirmButtonText: 'Ok!',
      });
    }
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
                Enter the email address of the Collaborator you want to invite:
              </p>
              <form onSubmit={handleAddCollaborators}>
                <div className='modal__addCollaborators__input'>
                  <input
                    type='email'
                    placeholder='Enter the email address...'
                    onChange={handleChange}
                    className='input'
                    required
                  />
                </div>
                <div className='boton__addCollaborators__container'>
                  <button type='submit' className='addCollaborators__button'>
                    <b>Add Collaborator</b>
                  </button>
                </div>
              </form>
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
