import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifyAccount } from '../../services/auth';
import { addProfile } from '../../store/profileSlice';

function ActivateAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.profile.value);
  const { token } = useParams();

  const activatedAccount = async () => {
    const response = await verifyAccount(token);
    if (response.error) {
      alert('Invalid token');
    } else {
      const { jwtoken, profile, message } = response;
      localStorage.setItem('token', jwtoken);
      localStorage.setItem('profile', JSON.stringify(profile));
      dispatch(addProfile(profile));
      alert(message);
      navigate(`/manage-board/${user.userName}`, { replace: true });
    }
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
