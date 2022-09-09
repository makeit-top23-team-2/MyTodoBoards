import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import BurgerButton from './BurgerButton';

function NavBar() {
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('profile'));

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
            <i className='fa-solid fa-house' />
            Home
          </NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink
                className='navBar__navLink'
                to={`/manage-board/${user.userName}`}
              >
                <i className='fa-solid fa-chalkboard' />
                Boards
              </NavLink>
            </li>
            <li>
              <button
                type='button'
                className='navBar__navLink'
                to={`/profile/${user.userName}`}
              >
                <picture className='profile__section1__photo' {...buttonProps}>
                  <img
                    className='profile__section1__photo__img'
                    src={user.avatar}
                    alt='avatar'
                  />
                </picture>
              </button>
            </li>
            <div className='navBar__dropDown'>
              <ul
                className={
                  isOpen ? 'visible dropDown-active' : 'dropDown-unactive'
                }
                role='menu'
              >
                <li>
                  <NavLink
                    {...itemProps[0]}
                    className='navBar__navLink'
                    to={`/profile/${user.userName}`}
                  >
                    <i className='fa-regular fa-user' />
                    {user.userName}
                  </NavLink>
                </li>
                <li>
                  <button
                    {...itemProps[1]}
                    type='submit'
                    className='navBar__logout'
                    onClick={handleLogout}
                  >
                    <i className='fa-sharp fa-solid fa-power-off' />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <li>
              <NavLink className='navBar__navLink' to='/login'>
                <i className='fa-solid fa-right-to-bracket' />
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className='navBar__navLink' to='/signup-form'>
                <i className='fa-solid fa-user-plus' />
                Signup
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
