import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { changePassword } from '../../services/auth';

function PasswordChange() {
  const { resetToken } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const profile = JSON.parse(localStorage.getItem('profile'));

  const resetPassword = async () => {
    if (form.password !== form.confirmPassword) {
      alert('Password and confirm password must match');
    } else {
      await changePassword(resetToken, form.password);
      alert('Your password has been changed successfully');
      if (profile.userName) {
        navigate(`/profile-settings/${profile.userName}`);
      } else {
        navigate(`/logIn`);
      }
    }
  };

  const handleResetPassword = e => {
    e.preventDefault();
    resetPassword();
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className='resetPassword'>
      <div className='resetPassword__header'>
        <NavLink to='/'>
          {' '}
          <img
            className='resetPassword__header__logo'
            src='..\img\trello.png'
            alt=''
          />{' '}
        </NavLink>
      </div>
      <form className='resetPassword__form' onSubmit={handleResetPassword}>
        <p>
          <b>Change your password</b>
        </p>
        <input
          className='resetPassword__password '
          type='password'
          name='password'
          placeholder=' Enter password *'
          autoComplete='on'
          onChange={handleChange}
        />
        <input
          className='resetPassword__password '
          type='password'
          name='confirmPassword'
          placeholder=' Confirm the password *'
          autoComplete='on'
          onChange={handleChange}
        />
        <button type='submit' className='resetPassword__button'>
          <b>Change Password</b>
        </button>
      </form>
      <div className='resetPassword__footer__img'>
        <img
          className='resetPassword__footer__img1'
          src='..\img\logSing__footer__img1.png'
          alt=''
        />
        <img
          className='resetPassword__footer__img2'
          src='..\img\logSing__footer__img2.png'
          alt=''
        />
      </div>
    </div>
  );
}
export default PasswordChange;
