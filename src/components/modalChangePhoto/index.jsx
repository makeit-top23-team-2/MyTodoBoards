import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import { updateUser } from '../../services/users';
import { setProfile } from '../../store/profileSlice';
import { uploadProfilePhoto } from '../../services/upload';

function ModalChangePhoto({ isModalOpened, setIsModalOpened }) {
  const [disable, setDisable] = useState('');
  const [buttonText, setButtonText] = useState('Send');
  const [styleButton, setStyleButton] = useState('boton__save__photo');
  const user = useSelector(state => state.profile.value);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleChange = e => {
    setFile(e.target.files[0]);
  };
  const handleUploadProfilePhoto = async () => {
    setButtonText('Loading...');
    setDisable('disable');
    setStyleButton('boton__save__photo__disable');

    const imgURL = await uploadProfilePhoto(file);
    const newUser = {
      avatar: imgURL,
      userName: user.userName,
      name: user.name,
      lastName: user.lastName,
    };
    const { profile, message } = await updateUser(newUser);
    localStorage.setItem('profile', JSON.stringify(profile));
    dispatch(setProfile(profile));
    if (message) {
      Swal.fire({
        title: 'Your image has been up!',
        icon: 'success',
        confirmButtonText: 'Got it!',
      });
    }
    setIsModalOpened(false);
    setDisable('');
    setStyleButton('boton__save__photo');
    setButtonText('Send');
  };
  const handleCloseModal = () => {
    setIsModalOpened(false);
  };
  return createPortal(
    <div>
      {isModalOpened && (
        <div className='modal'>
          <main className='modal__card'>
            <header className='modal__header'>
              <button
                type='button'
                className='modal__button'
                onClick={handleCloseModal}
              >
                <i className='fa-solid fa-xmark' />
              </button>
              <p className='title__change__photo'>Select your profile image</p>
              <div className='input__change__profile'>
                <input
                  type='file'
                  className='send__file'
                  onChange={handleChange}
                  accept='image/*'
                />
              </div>
              <section className='section__imagen'>
                <div className='photo'>
                  <img className='photo__img' src={user.avatar} alt='' />
                </div>
              </section>
              <div className='boton__save__photo__container'>
                <button
                  type='button'
                  onClick={handleUploadProfilePhoto}
                  disabled={disable}
                  className={styleButton}
                >
                  <b>{buttonText}</b>
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

ModalChangePhoto.propTypes = {
  isModalOpened: PropTypes.bool,
  setIsModalOpened: PropTypes.func,
};
ModalChangePhoto.defaultProps = {
  isModalOpened: false,
  setIsModalOpened: () => null,
};
export default ModalChangePhoto;
