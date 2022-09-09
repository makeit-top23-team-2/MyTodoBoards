import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';
import { resetPassword } from '../../services/auth';
import ModalChangePhoto from '../../components/modalChangePhoto';
import DeleteAccountModal from '../../components/deleteAccountModal';

function ProfileSettings() {
  const navigate = useNavigate();
  const profile = JSON.parse(localStorage.getItem('profile'));

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isDeleteAccountModalOpened, setIsDeleteAccountModalOpened] =
    useState(false);

  const passwordReset = async () => {
    const { hash } = await resetPassword();
    navigate(`/reset-password/${hash}`);
  };

  const handleChangePassword = () => {
    passwordReset();
  };

  const handleOpenDeleteAccountModal = () => {
    setIsDeleteAccountModalOpened(true);
  };

  const handleOpenModal = () => {
    setIsModalOpened(true);
  };

  return (
    <div>
      <NavBar />
      <section className='profile__section1'>
        <div className='profile__section1__photo'>
          <img
            className='profile__section1__photo__img'
            src={profile.avatar}
            alt=''
          />
        </div>
        <div className='profile__section1__name'>
          <h1 className='profile__section1__name__title'>
            {profile.name} {profile.lastName}
          </h1>
        </div>
      </section>

      <section className='profile__section__buttons'>
        <NavLink
          to={`/profile/${profile.userName}`}
          className='profile__section__buttons__profileInSettings'
        >
          Profile
        </NavLink>
        <NavLink
          to={`/profile-settings/${profile.userName}`}
          className='profile__section__buttons__settingsInSettings'
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
        <div className='profile__section2__manageAcount'>
          <h1>Manage your Account</h1>
        </div>
        <section className='profile__settings'>
          <div className='profile__settings__detail'>
            <button
              type='button'
              className='profile__section2__about__changePassword'
              onClick={handleChangePassword}
            >
              <h4>Change Password</h4>
            </button>
            <button
              type='button'
              className='profile__section2__about__changePassword'
              onClick={handleOpenModal}
            >
              <h4>Change Profile Picture</h4>
            </button>
            <button
              type='button'
              className='profile__section2__about__deleteAcount'
              onClick={handleOpenDeleteAccountModal}
            >
              <h4>Delete Account</h4>
            </button>
          </div>
          <ModalChangePhoto
            isModalOpened={isModalOpened}
            setIsModalOpened={setIsModalOpened}
          />
        </section>
      </section>

      <DeleteAccountModal
        isDeleteAccountModalOpened={isDeleteAccountModalOpened}
        setIsDeleteAccountModalOpened={setIsDeleteAccountModalOpened}
      />
    </div>
  );
}

export default ProfileSettings;
