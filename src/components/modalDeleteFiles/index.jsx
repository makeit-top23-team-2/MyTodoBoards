import React from 'react';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import { deleteColumn } from '../../services/columns';

function DeleteColumn({
  isColumnDeleteModalOpened,
  setIsColumnDeleteModalOpened,
  id,
}) {
  const handleCloseModal = () => {
    setIsColumnDeleteModalOpened(false);
  };

  const handleDeleteColumn = async () => {
    await deleteColumn(id);
    window.location.reload();
  };

  return createPortal(
    <div>
      {isColumnDeleteModalOpened && (
        <div className='modal__deleteColumn'>
          <main className='modal__deleteColumn__main'>
            <header className='modal__deleteColumn__header'>
              <button
                type='button'
                className='button'
                onClick={handleCloseModal}
              >
                <i className='fa-solid fa-xmark' />
              </button>
              <br />
              <p className='title'>
                Are you sure you want to delete this Column?
              </p>
              <div className='boton__delete__container'>
                <button
                  type='button'
                  onClick={handleDeleteColumn}
                  className='delete__button--enable'
                >
                  <b>Delete this Column</b>
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

DeleteColumn.propTypes = {
  isColumnDeleteModalOpened: PropTypes.bool,
  setIsColumnDeleteModalOpened: PropTypes.func,
};
DeleteColumn.defaultProps = {
  isColumnDeleteModalOpened: false,
  setIsColumnDeleteModalOpened: () => null,
};

export default DeleteColumn;
