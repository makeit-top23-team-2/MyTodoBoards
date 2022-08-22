import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUserByEmail, createUser } from '../../services/users';

function SignupForm() {
  const [form, setForm] = useState({});
  console.log('🚀 ~ file: index.jsx ~ line 6 ~ SignupForm ~ form', form);

  const handleLogin = e => {
    e.preventDefault();
    const newUser = async () => {
      await createUser(form);
    };
    newUser();
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

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
      <form className='signupForm__form' onSubmit={handleLogin}>
        <h1>Sign Up to Trello</h1>
        <input
          className='signupForm__email '
          type='email'
          name='email'
          placeholder=' Enter email'
          required
          onChange={handleChange}
        />
        <input
          className='signupForm__userName'
          type='text'
          name='userName'
          placeholder=' Enter a user name'
          required
          onChange={handleChange}
        />
        <input
          className='signupForm__name'
          type='text'
          name='name'
          placeholder=' Enter your name'
          required
          onChange={handleChange}
        />
        <input
          className='signupForm__lastName'
          type='text'
          name='lastName'
          placeholder=' Enter your last name'
          required
          onChange={handleChange}
        />
        <input
          className='signupForm__password'
          type='password'
          name='password'
          placeholder=' Enter a password'
          required
          onChange={handleChange}
        />
        <input
          className='signupForm__password'
          type='password'
          name='cheking-password'
          placeholder=' Confirm your password'
          required
          onChange={handleChange}
        />

        <button type='submit' className='signupForm__button'>
          <b>Sign Up</b>{' '}
        </button>
        <hr />
        <NavLink to='/login'>Already have an account? Log In</NavLink>
      </form>

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
