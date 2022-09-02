import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import { updateUser } from '../../services/users';
import { setProfile } from '../../store/profileSlice';


function ModalChangePhoto({ isModalOpened, setIsModalOpened }) {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [disable, setDisable] = useState('');
  const user = useSelector(state => state.profile.value);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleChange = e => {
    setFile(e.target.files[0]);
  };
  const handleUploadProfilePhoto = async () => {
    setDisable('disable');
    const formData = new FormData();
    formData.append('file', file);
    const payload = {
      method: 'POST',
      body: formData,
    };
    try {
      const response = await fetch(
        `${BASE_URL}/api/upload/profile`,
        payload
      );
      const imgURL = await response.json();
      const newUser = { avatar: imgURL };
      const { profile, message } = await updateUser(newUser);

      dispatch(setProfile(profile));
      alert(message);
      setIsModalOpened(false)
      setDisable('');

    } catch (err) {
      console.log(err);
    }
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
              <p className='title__change__photo'>Select your profile photo</p>
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
              <div className='boton__save__photo'>
                <button
                  type='button'
                  onClick={handleUploadProfilePhoto}
                  disabled={disable}
                  className='profile__section2__button'
                >
                  <b>Save</b>
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
