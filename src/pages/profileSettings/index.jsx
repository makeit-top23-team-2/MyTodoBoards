import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import NavBar from '../../components/NavBar';
import { resetPassword } from '../../services/auth';
import { deleteUser } from '../../services/users';

function ProfileSettings() {
  const navigate = useNavigate();
  const prof = localStorage.getItem('profile');
  const profile = JSON.parse(prof);

  const passwordReset = async () => {
    const { hash } = await resetPassword();
    navigate(`/reset-password/${hash}`);
  };

  const deleteAccount = async () => {
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

  const handleChangePassword = () => {
    passwordReset();
  };

  const handleDeleteAccount = () => {
    deleteAccount();
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
            <NavLink to='/' className='profile__section2__about__profilePhoto'>
              <h4>Change Profile Photo</h4>
            </NavLink>
            <button
              type='button'
              className='profile__section2__about__deleteAcount'
              onClick={handleDeleteAccount}
            >
              <h4>Delete Account</h4>
            </button>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ProfileSettings;
