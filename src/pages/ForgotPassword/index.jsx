import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../services/auth';

function ForgotPassword() {
  const [email, setEmail] = useState({});
  const navigate = useNavigate();
  const handleChange = e => {
    setEmail(e.target.value);
  };
  const handleResetPassword = () => {
    forgotPassword(email);
    alert('An email has been sent to reset your password');
    navigate('/login');
  };
  return (
    <div className='forgot'>
      <main>
        <NavLink to='/'>
          <img
            src='..\img\trello.png'
            alt='Logo Trello'
            className='forgot__logo'
          />
        </NavLink>
        <section className='forgot__section'>
          <div className='forgot__section__container'>
            <h1>Cannot Log in?</h1>
            <form className='forgot__section__form'>
              <span className='forgot__section__span'>
                We will send a recovery link to
              </span>
              <input
                type='email'
                name='email'
                placeholder='Enter email'
                className='forgot__section__input'
                onChange={handleChange}
              />
              <button
                type='button'
                className='forgot__section__button'
                onClick={handleResetPassword}
              >
                Reset Password Send Recovery Link
              </button>
            </form>
            <hr className='forgot__section__hr' />
            <NavLink to='/logIn' className='forgot__section__link'>
              Return to log in
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ForgotPassword;
