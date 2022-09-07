import React from 'react';
import { NavLink } from 'react-router-dom';

function SignUp() {
  return (
    <div className='signup'>
      <NavLink to='/' className='signup__header'>
        {' '}
        <img className='signup__header__logo' src='..\img\trello.png' alt='' />
      </NavLink>
      <div className='signup__form'>
        <h1>Sign up for your account</h1>
        <NavLink to='/signUp-form'>
          <button type='button' className='signup__button'>
            <b>Sign Up</b>{' '}
          </button>
        </NavLink>
        <p className='signup__politics'>
          By signing up, you confirm that you have read and accepted our{' '}
          <a href='*'>Terms of Service</a> and <a href='*'>Privacy Policy</a>.
        </p>
        <p>OR</p>
        <div className='signup__with'>
          <button type='button' className='signup__with__button'>
            {' '}
            <img
              className='signup__with__img'
              src='..\img\google.png'
              alt=''
            />{' '}
            <b>Continue with Google</b>{' '}
          </button>
          <button type='button' className='signup__with__button'>
            {' '}
            <img
              className='signup__with__img'
              src='..\img\microsoft.png'
              alt=''
            />{' '}
            <b>Continue with Microsoft</b>{' '}
          </button>
          <button type='button' className='signup__with__button'>
            {' '}
            <img
              className='signup__with__img'
              src='..\img\apple.png'
              alt=''
            />{' '}
            <b>Continue with Apple</b>{' '}
          </button>
        </div>
        <hr />
        <NavLink to='/login'>Already have an account? Log In</NavLink>
      </div>
      <div className='signup__language'>
        <select name='Language Picker' className='signup__language-picker'>
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
      <div className='signup__footer__img'>
        <img
          className='signup__footer__img1'
          src='..\img\logSing__footer__img1.png'
          alt=''
        />
        <img
          className='signup__footer__img2'
          src='..\img\logSing__footer__img2.png'
          alt=''
        />
      </div>
    </div>
  );
}

export default SignUp;

