import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyAccount } from '../../services/auth';
import { setProfile } from '../../store/profileSlice';

function ActivateAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useParams();

  const activatedAccount = async () => {
    const response = await verifyAccount(token);
    if (response.error) {
      alert('Invalid token');
      return;
    }
    const { jwtoken, profile, message } = response;
    localStorage.setItem('token', jwtoken);
    localStorage.setItem('profile', JSON.stringify(profile));
    dispatch(setProfile(profile));
    alert(message);

    navigate(`/manage-board/${profile.userName}`);
  };

  const handleClick = () => {
    activatedAccount();
  };

  return (
    <div className='ActivateAccount'>
      <div className='ActivateAccount__container'>
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
          className='ActivateAccount__button'
          onClick={handleClick}
        >
          <b>Continue</b>
        </button>
      </div>
    </div>
  );
}

export default ActivateAccount;
