import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Swal from 'sweetalert2';
import { createPortal } from 'react-dom';
import { deleteUser } from '../../services/users';
import { login } from '../../services/auth';

function DeleteAccountModal({
  isDeleteAccountModalOpened,
  setIsDeleteAccountModalOpened,
}) {
  const profile = JSON.parse(localStorage.getItem('profile'));
  const [verifyPassword, setVerifyPassword] = useState('');
  const navigate = useNavigate();
  const [deleteButtonClass, setDeleteButtonClass] = useState(
    'delete__button--disableb'
  );
  const [disable, setDisable] = useState('disableb');

  const handleCloseModal = () => {
    setIsDeleteAccountModalOpened(false);
    setDisable('disabled');
    setDeleteButtonClass('delete__button--disableb');
  };

  const handleChange = e => {
    setVerifyPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await login(profile.email, verifyPassword);

    if (response.status === 401 || response.error) {
      Swal.fire({
        title: 'The introduced password is incorrect!',
        text: 'Please, check your password to continue.',
        icon: 'error',
        confirmButtonText: 'Ok!',
      });
      return;
    }
    Swal.fire({
      title: 'The introduced password is correct!',
      text: `Remember, once you delete your account, it won't be possible to recover it.`,
      icon: 'warning',
      confirmButtonText: 'Ok!',
    });
    setDisable('');
    setDeleteButtonClass('delete__button--enable');
  };

  const handleDeleteAccount = async () => {
    await deleteUser();
    localStorage.clear();
    Swal.fire({
      title: 'Your account has been deleted!',
      text: 'We will miss you. Comeback soon!',
      icon: 'success',
      confirmButtonText: 'See ya!',
    });
    navigate('/', { new: true });
  };

  return createPortal(
    <div>
      {isDeleteAccountModalOpened && (
        <div className='modal__deleteAccount'>
          <main className='modal__deleteAccount__main'>
            <header className='modal__deleteAccount__header'>
              <button
                type='button'
                className='button'
                onClick={handleCloseModal}
              >
                <i className='fa-solid fa-xmark' />
              </button>
              <br />
              <p className='title'>
                Before deleting your account, please verify your current
                password.
              </p>
              <form className='form' onSubmit={handleSubmit}>
                <input
                  type='password'
                  className='input'
                  placeholder='Introduce your password...'
                  onChange={handleChange}
                />

                <button type='submit' className='verify__button'>
                  Verify password
                </button>
              </form>

              <div className='boton__delete__container'>
                <button
                  type='button'
                  onClick={handleDeleteAccount}
                  disabled={disable}
                  className={deleteButtonClass}
                >
                  <b>Delete your Account</b>
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

DeleteAccountModal.propTypes = {
  isDeleteAccountModalOpened: PropTypes.bool,
  setIsDeleteAccountModalOpened: PropTypes.func,
};
DeleteAccountModal.defaultProps = {
  isDeleteAccountModalOpened: false,
  setIsDeleteAccountModalOpened: () => null,
};

export default DeleteAccountModal;
