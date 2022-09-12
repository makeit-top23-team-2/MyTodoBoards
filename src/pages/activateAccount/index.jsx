import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { verifyAccount } from '../../services/auth';
import { setProfile } from '../../store/profileSlice';

function ActivateAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useParams();

  const activatedAccount = async () => {
    const response = await verifyAccount(token);
    if (response.error) {
      Swal.fire({
        title: 'Invalid token!',
        text: 'Please, try again later.',
        icon: 'error',
        confirmButtonText: 'Got it!',
      });
      return;
    }
    const { jwtoken, profile, message } = response;
    localStorage.setItem('token', jwtoken);
    localStorage.setItem('profile', JSON.stringify(profile));
    dispatch(setProfile(profile));
    Swal.fire({
      title: message,
      icon: 'success',
      confirmButtonText: `Let's begin!`,
    });
    navigate(`/manage-board/${profile.userName}`);
  };

  const handleClick = () => {
    activatedAccount();
  };

  return (
    <div className='activateAccount'>
      <div className='activateAccount__container'>
        <div className='ActivateAccount__image'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2560px-Trello-logo-blue.svg.png'
            alt='frello logo'
            className='ActivateAccount__logo'
          />
        </div>
        <h1>Thanks for join us!</h1>
        <button
          type='button'
          className='activateAccount__button'
          onClick={handleClick}
        >
          <b>Continue</b>
        </button>
      </div>
      <div className='activateAccount__footer__img'>
        <img
          className='activateAccount__footer__img1'
          src='..\img\logSing__footer__img1.png'
          alt=''
        />
        <img
          className='activateAccount__footer__img2'
          src='..\img\logSing__footer__img2.png'
          alt=''
        />
      </div>
    </div>
  );
}
export default ActivateAccount;
