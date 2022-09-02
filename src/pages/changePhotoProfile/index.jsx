import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { updateUser } from '../../services/users';
import { setProfile } from '../../store/profileSlice';


const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function ChangePhotoProfile() {
  const user = useSelector(state => state.profile.value);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleChange = e => {
    setFile(e.target.files[0]);
  };
  const handleUploadProfilePhoto = async () => {
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavBar />
      <section className='profile__section1'>
        <div className='profile__section1__photo'>
          <img
            className='profile__section1__photo__img'
            src={user.avatar}
            alt=''
          />
        </div>
        <div className='profile__section1__name'>
          <h1 className='profile__section1__name__title'>
            {user.name} {user.lastName}
          </h1>
        </div>
      </section>

      <section className='profile__section__buttons'>
        <NavLink to='/profile' className='profile__section__buttons__profile'>
          Profile
        </NavLink>
        <NavLink
          to={`/profile-settings/${user.userName}`}
          className='profile__section__buttons__settings'
        >
          Settings
        </NavLink>
      </section>

      <section className='profile__section2'>
        <div className='profile__section2__img'>
          <img
            className='profile__section2__photo__img'
            src='../img/profile.png'
            alt=''
          />
        </div>
        <div className='profile__section2__manage'>
          <h1>Change Photo Profile</h1>
        </div>
        <input
          type='file'
          className='profile__section2__file'
          onChange={handleChange}
          accept='image/*'
        />

        <button
          type='button'
          onClick={handleUploadProfilePhoto}
          className='profile__section2__button'
        >
          <b>Save</b>
        </button>
      </section>
    </div>
  );
}

export default ChangePhotoProfile;
