import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../../components/NavBar';

function ProfileSettings() {
  const prof = localStorage.getItem('profile');
  const profile = JSON.parse(prof);

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
          to='/profile_settings'
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
            <NavLink
              to='/'
              className='profile__section2__about__changePassword'
            >
              <h4>Change Password</h4>
            </NavLink>
            <NavLink to='/' className='profile__section2__about__profilePhoto'>
              <h4>Change Profile Photo</h4>
            </NavLink>
            <NavLink to='/' className='profile__section2__about__deleteAcount'>
              <h4>Delete Account</h4>
            </NavLink>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ProfileSettings;
