import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';
import { updateUser, getUserByUserName } from '../../services/users';

function Profile() {
  const navigate = useNavigate();
  const profile = useSelector(state => state.profile.value);
  const [form, setForm] = useState({});

  const userUpdate = async () => {
    const userByUserName = await getUserByUserName(form.userName);

    if (userByUserName.userName) {
      alert('This user name is already in use');
    } else {
      const response = await updateUser({
        userName: form.userName,
        name: form.name,
        lastName: form.lastName,
      });
      const res = response;
      const profileUpdate = res.profile;
      if (res.details) {
        alert(res.details[0].message);
        return;
      }
      localStorage.setItem('profile', JSON.stringify(profileUpdate));
      alert('Your profile has been updated successfully.');
      navigate(`/profile/${profileUpdate.userName}`);
    }
  };

  const handleUpdate = e => {
    e.preventDefault();
    userUpdate();
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
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
          className='profile__section__buttons__profile'
        >
          Profile
        </NavLink>
        <NavLink
          to={`/profile-settings/${profile.userName}`}
          className='profile__section__buttons__settings'
        >
          Settings
        </NavLink>
      </section>

      <form className='profile__section2' onSubmit={handleUpdate}>
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
          <input
            type='text'
            defaultValue={profile.userName}
            onChange={handleChange}
            name='userName'
          />
        </div>
        <div className='profile__section2__about__name'>
          <h4>Name</h4>
          <input
            type='text'
            defaultValue={profile.name}
            onChange={handleChange}
            name='name'
          />
        </div>
        <div className='profile__section2__about__lastName'>
          <h4>Last Name</h4>
          <input
            type='text'
            defaultValue={profile.lastName}
            onChange={handleChange}
            name='lastName'
          />
        </div>
        <button type='submit' className='profile__section2__button'>
          <b>Save</b>
        </button>
      </form>
    </div>
  );
}

export default Profile;
