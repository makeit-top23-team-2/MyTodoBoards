import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ActivateAccount() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClick = () => {
    navigate(`/manageBoard/${id}`, { replace: true });
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
