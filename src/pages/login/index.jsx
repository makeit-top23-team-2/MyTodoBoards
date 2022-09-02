import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { setProfile } from '../../store/profileSlice';
import { login } from '../../services/auth';

function LogIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await login(form.email, form.password);

    const { profile, jwtoken, message } = response;

    if (profile) {
      dispatch(setProfile(profile));
      localStorage.setItem('token', jwtoken);
      localStorage.setItem('profile', JSON.stringify(profile));
      Swal.fire({
        title: message,
        text: `Let's star organizing your ToDos!`,
        icon: 'success',
        confirmButtonText: `Let's go!`,
      });
      navigate(`/manage-board/${profile.userName}`);
    } else {
      Swal.fire({
        title: message,
        icon: 'warning',
        confirmButtonText: 'Ok',
      });
    }
  };

  const handleLogin = e => {
    e.preventDefault();
    fetchData();
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className='login'>
      <div className='login__header'>
        <NavLink to='/'>
          {' '}
          <img
            className='login__header__logo'
            src='..\img\trello.png'
            alt=''
          />{' '}
        </NavLink>
      </div>
      <form className='login__form' onSubmit={handleLogin}>
        <h1>Log in to Trello</h1>
        <input
          className='login__email '
          type='email'
          name='email'
          placeholder=' Enter email *'
          autoComplete='on'
          onChange={handleChange}
        />
        <input
          className='login__password '
          type='password'
          name='password'
          placeholder=' Enter password *'
          autoComplete='on'
          onChange={handleChange}
        />
        <button type='submit' className='login__button'>
          <b>Log in</b>
        </button>
        <p>OR</p>
        <div className='login__with'>
          <button type='button' className='login__with__button'>
            {' '}
            <img
              className='login__with__img'
              src='..\img\google.png'
              alt=''
            />{' '}
            <b>Continue with Google</b>{' '}
          </button>
          <button type='button' className='login__with__button'>
            {' '}
            <img
              className='login__with__img'
              src='..\img\microsoft.png'
              alt=''
            />{' '}
            <b>Continue with Microsoft</b>{' '}
          </button>
          <button type='button' className='login__with__button'>
            {' '}
            <img
              className='login__with__img'
              src='..\img\apple.png'
              alt=''
            />{' '}
            <b>Continue with Apple</b>{' '}
          </button>
        </div>
        <a href='*'>Log in with SSO</a>
        <hr />
        <div className='login__cantlog'>
          <ul>
            <li>
              <NavLink to='/forgot-password'>Can not log in?</NavLink>
            </li>
            <li>
              {' '}
              <NavLink to='/signup'>Sign up for an account</NavLink>{' '}
            </li>
          </ul>
        </div>
      </form>
      <div className='login__politics'>
        <p className='login__politics__Service'>
          <a href='*'>Terms of Service</a>
        </p>
        <p className='login__politics_Privacy'>
          <a href='*'>Privacy Policy</a>
        </p>
      </div>
      <div className='login__language'>
        <select name='Language Picker' className='login__language-picker'>
          <option value=''>Select your language…</option>
          <option value=''>English</option>
          <option value=''>Español</option>
          <option value=''>Français</option>
          <option value=''>Italiano</option>
          <option value=''>Türkçe</option>
          <option value=''>ภาษาไทย</option>
          <option value=''>Українська</option>
        </select>
      </div>
      <div className='login__footer__img'>
        <img
          className='login__footer__img1'
          src='..\img\logSing__footer__img1.png'
          alt=''
        />
        <img
          className='login__footer__img2'
          src='..\img\logSing__footer__img2.png'
          alt=''
        />
      </div>
    </div>
  );
}
export default LogIn;
