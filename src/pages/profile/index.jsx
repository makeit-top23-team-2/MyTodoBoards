import React from 'react';
import NavBar from '../../components/NavBar';


function Profile() {
  return (
    <div>
      <NavBar />
      <section className='profile__section1'>
        <div className='profile__section1__photo'>
          <img
            className='profile__section1__photo__img'
            src='../img/frello-profile-section1.png'
            alt=''
          />
        </div>
        <div className='profile__section1__name'>
          <h1 className='profile__section1__name__title'>
            David Steven Pineda
          </h1>
        </div>
       
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
          <input type='text'  />
        </div>
        <div className='profile__section2__about__name'>
          <h4>Name</h4>
          <input type='text' />
        </div>
        <div className='profile__section2__about__lastName'>
          <h4>Last name</h4>
          <input type='text' />
        </div>  
        <button type='submit' className='profile__section2__button'>
          <b>Save</b>
        </button>
      </section>


    </div>
  );
}

export default Profile;
