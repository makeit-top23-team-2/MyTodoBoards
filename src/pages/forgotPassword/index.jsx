import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { forgotPassword } from '../../services/auth';

function ForgotPassword() {
  const [email, setEmail] = useState({});
  const navigate = useNavigate();
  const handleChange = e => {
    setEmail(e.target.value);
  };
  const handleResetPassword = async e => {
    e.preventDefault();
    const response = await forgotPassword(email);
    if (response.status === 200) {
      Swal.fire({
        title: 'An email has been sent to reset your password',
        text: 'Please, check your email inbox.',
        icon: 'success',
        confirmButtonText: 'Got it!',
      });
      navigate('/login');
    }
    if (response.status === 404) {
      Swal.fire({
        title: `We couldn't find this email!`,
        text: 'This email address is not registered in Trello.',
        icon: 'warning',
        confirmButtonText: 'Ok!',
      });
    }
    if (response.status === 500) {
      Swal.fire({
        title: 'We are sorry. An error has ocurred!',
        text: 'Please, try again later.',
        icon: 'error',
        confirmButtonText: 'Ok!',
      });
    }
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
            <form
              className='forgot__section__form'
              onSubmit={handleResetPassword}
            >
              <span className='forgot__section__span'>
                We will send a recovery link to
              </span>
              <input
                type='email'
                name='email'
                placeholder='Enter email'
                className='forgot__section__input'
                onChange={handleChange}
                required
              />
              <button type='submit' className='forgot__section__button'>
                Send Recovery Link
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
