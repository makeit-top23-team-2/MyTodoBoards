import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getUserByEmail, createUser } from '../../services/users';

function SignupForm() {
  const [form, setForm] = useState({});

  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const newUser = async () => {
      const user = await getUserByEmail(form.email);
      console.log('🚀 ~ file: index.jsx ~ line 12 ~ newUser ~ user', user);
      if (user.email) {
        alert('This email is already registered');
      } else if (form.userName === user.userName) {
        alert('This user name is already used');
      } else {
        const profile = await createUser(form);
        console.log(
          '🚀 ~ file: index.jsx ~ line 19 ~ newUser ~ profile',
          profile
        );
        alert(
          'Your account has been created. Please check your email inbox to activate your account.'
        );
        navigate('/login', { replace: true });
      }
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
