import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  getUserByEmail,
  createUser,
  getUserByUserName,
} from '../../services/users';

function SignupForm() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const newUser = async () => {
    const user = await getUserByEmail(form.email);
    const user1 = await getUserByUserName(form.userName);

    console.log('🚀 ~ file: index.jsx ~ line 18 ~ newUser ~ user.email', user);
    if (user.email) {
      alert('This email is already registered');
    } else if (user1.userName) {
      alert('This user name is already used');
    } else if (form.password !== form.comfirmPassword) {
      alert('Password and confirm password must match');
    } else {
      const response = await createUser(form);
      const res = JSON.parse(response);
      if (res.details) {
        alert(res.details[0].message);
        return;
      }
      alert(
        'Your account has been created. Please check your email inbox to activate your account.'
      );
      navigate('/', { replace: true });
    }
  };

  const handleSignUp = e => {
    e.preventDefault();

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
      <form className='signupForm__form' onSubmit={handleSignUp}>
        <h1>Sign Up to Trello</h1>
        <input
          className='signupForm__email '
          type='email'
          name='email'
          placeholder=' Enter your email *'
          required
          onChange={handleChange}
        />
        <input
          className='signupForm__userName'
          type='text'
          name='userName'
          placeholder=' Enter a user name *'
          required
          onChange={handleChange}
        />
        <input
          className='signupForm__name'
          type='text'
          name='name'
          placeholder=' Enter your name *'
          required
          onChange={handleChange}
        />
        <input
          className='signupForm__lastName'
          type='text'
          name='lastName'
          placeholder=' Enter your last name *'
          required
          onChange={handleChange}
        />
        <input
          className='signupForm__password'
          type='password'
          name='password'
          placeholder=' Enter a password *'
          required
          onChange={handleChange}
        />
        <input
          className='signupForm__password'
          type='password'
          name='comfirmPassword'
          placeholder=' Confirm your password *'
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
