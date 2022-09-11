import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Swal from 'sweetalert2';
import { createPortal } from 'react-dom';
import { login, resetPassword } from '../../services/auth';

function ChangePasswordModal({
  isChangePasswordModalOpened,
  setIsChangePasswordModalOpened,
}) {
  const profile = JSON.parse(localStorage.getItem('profile'));
  const [verifyPassword, setVerifyPassword] = useState('');
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsChangePasswordModalOpened(false);
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
    const { hash } = await resetPassword();
    navigate(`/reset-password/${hash}`);
    Swal.fire({
      title: 'The introduced password is correct!',
      text: `You can change your password now.`,
      icon: 'success',
      confirmButtonText: 'Ok!',
    });
  };

  return createPortal(
    <div>
      {isChangePasswordModalOpened && (
        <div className='modal__changePassword'>
          <main className='modal__changePassword__main'>
            <header className='modal__changePassword__header'>
              <button
                type='button'
                className='button'
                onClick={handleCloseModal}
              >
                <i className='fa-solid fa-xmark' />
              </button>
              <br />
              <p className='title'>Please, confirm your current password.</p>
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
            </header>
          </main>
        </div>
      )}
    </div>,
    document.getElementById('modal')
  );
}

ChangePasswordModal.propTypes = {
  isDeleteAccountModalOpened: PropTypes.bool,
  setIsDeleteAccountModalOpened: PropTypes.func,
};
ChangePasswordModal.defaultProps = {
  isDeleteAccountModalOpened: false,
  setIsDeleteAccountModalOpened: () => null,
};

export default ChangePasswordModal;
