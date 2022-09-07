import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Swal from 'sweetalert2';
import { createPortal } from 'react-dom';
import { deleteBoard } from '../../services/boards';

function DeleteBoard({
  isBoardDeleteModalOpened,
  setIsBoardDeleteModalOpened,
  id,
}) {
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  // console.log(id);

  const handleCloseModal = () => {
    setIsBoardDeleteModalOpened(false);
  };

  const handleDeleteBoard = async () => {
    await deleteBoard(id);
    Swal.fire({
      title: 'The board has been deleted!',
      icon: 'success',
      confirmButtonText: 'Got it!',
    });
    navigate(`/manage-board/${user.userName}`);
  };

  return createPortal(
    <div>
      {isBoardDeleteModalOpened && (
        <div className='modal__deleteBoard'>
          <main className='modal__deleteBoard__main'>
            <header className='modal__deleteBoard__header'>
              <button
                type='button'
                className='button'
                onClick={handleCloseModal}
              >
                <i className='fa-solid fa-xmark' />
              </button>
              <br />
              <p className='title'>
                Are you sure you want to delete this Board?
              </p>
              <div className='boton__delete__container'>
                <button
                  type='button'
                  onClick={handleDeleteBoard}
                  className='delete__button--enable'
                >
                  <b>Delete this Board</b>
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

DeleteBoard.propTypes = {
  isBoardDeleteModalOpened: PropTypes.bool,
  setIsBoardDeleteModalOpened: PropTypes.func,
};
DeleteBoard.defaultProps = {
  isBoardDeleteModalOpened: false,
  setIsBoardDeleteModalOpened: () => null,
};

export default DeleteBoard;
