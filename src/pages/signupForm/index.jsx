import React from 'react';
import { NavLink } from 'react-router-dom';

function SignupForm() {
  return (
    <div className='signupForm'>
      <NavLink to='/' className='signupForm__header'>
        {' '}
        <img
          className='signupForm__header__logo'
          src='..\img\trello.png'
          alt=''
        />
      </NavLink>
      <div className='signupForm__form'>
        <h1>Sign Up to Trello</h1>
        <input
          className='signupForm__email '
          type='email'
          name='email'
          placeholder=' Enter email'
          required
        />
        <input
          className='signupForm__userName'
          type='text'
          name='userName'
          placeholder=' Enter a user name'
          required
        />
        <input
          className='signupForm__name'
          type='text'
          name='name'
          placeholder=' Enter your name'
          required
        />
        <input
          className='signupForm__lastName'
          type='text'
          name='lastName'
          placeholder=' Enter your last name'
          required
        />
        <input
          className='signupForm__password'
          type='password'
          name='password'
          placeholder=' Enter a password'
          required
        />
        <input
          className='signupForm__password'
          type='password'
          name='cheking-password'
          placeholder=' Confirm your password'
          required
        />

        <button type='button' className='signupForm__button'>
          <b>Sign Up</b>{' '}
        </button>
        <hr />
        <NavLink to='/login'>Already have an account? Log In</NavLink>
      </div>

      <div className='signupForm__footer__img'>
        <img
          className='signupForm__footer__img1'
          src='..\img\logSing__footer__img1.png'
          alt=''
        />
        <img
          className='signupForm__footer__img2'
          src='..\img\logSing__footer__img2.png'
          alt=''
        />
      </div>
    </div>
  );
}

export default SignupForm;
