import React from 'react';
import PropTypes from 'prop-types';

function BurgerButton({ setIsActive, isActive }) {
  function handleClick() {
    setIsActive(!isActive);
  }
  return (
    <button
      type='button'
      onClick={handleClick}
      className={`icon nav-icon-5 ${isActive ? 'open' : ''}`}
    >
      <span />
      <span />
      <span />
    </button>
  );
}

export default BurgerButton;

BurgerButton.propTypes = {
  setIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
