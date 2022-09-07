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
        text: 'Please, check that the introduced credentials are correct.',
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
