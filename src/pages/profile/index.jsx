import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../../components/NavBar';

const prof = localStorage.getItem('profile');
const profile = JSON.parse(prof);

function Profile() {
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
        <NavLink to='/profile' className='profile__section__buttons__profile'>
          Profile
        </NavLink>
        <NavLink
          to={`/profile-settings/${profile.userName}`}
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
          <h1>Manage your personal information</h1>
        </div>
        <div className='profile__section2__about'>
          <h3>About</h3>
        </div>
        <div className='profile__section2__about__userName'>
          <h4>Username</h4>
          <input type='text' defaultValue={profile.userName} />
        </div>
        <div className='profile__section2__about__name'>
          <h4>Name</h4>
          <input type='text' defaultValue={profile.name} />
        </div>
        <div className='profile__section2__about__lastName'>
          <h4>Last Name</h4>
          <input type='text' defaultValue={profile.lastName} />
        </div>
        <button type='submit' className='profile__section2__button'>
          <b>Save</b>
        </button>
      </section>
    </div>
  );
}

export default Profile;
