import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import BurgerButton from './BurgerButton';

function NavBar() {
  // const [isLogged /* setIsLogged */] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const isLogged = JSON.parse(localStorage.getItem('profile'));

  const handleLogout = () => {
    localStorage.clear();
    navigate('/', { replace: true });
  };

  return (
    <nav className='navBar'>
      <Link to='/' className='navBar__home'>
        <picture>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2560px-Trello-logo-blue.svg.png'
            alt='logo de trello'
            className='navBar__logo'
          />
        </picture>
      </Link>
      <ul className={isActive ? 'navBar__links--active' : 'navBar__links'}>
        <li>
          <NavLink className='navBar__navLink' to='/'>
            Home
          </NavLink>
        </li>
        {isLogged ? (
          <>
            <li>
              <NavLink
                className='navBar__navLink'
                to={`/manage-board/${isLogged.userName}`}
              >
                Manage-Boards
              </NavLink>
            </li>
            <li>
              <NavLink
                className='navBar__navLink'
                to={`/profile/${isLogged.userName}`}
              >
                {isLogged.userName}
              </NavLink>
            </li>
            <li>
              <button
                type='submit'
                className='navBar__logout'
                onClick={handleLogout}
              >
                LogOut
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink className='navBar__navLink' to='/login'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className='navBar__navLink' to='/signup'>
                signUp
              </NavLink>
            </li>
          </>
        )}
      </ul>
      <div className='burgerButton'>
        <BurgerButton setIsActive={setIsActive} isActive={isActive} />
      </div>
    </nav>
  );
}

export default NavBar;
