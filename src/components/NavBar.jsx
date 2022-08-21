import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import BurgerButton from './BurgerButton';

function NavBar() {
  const [isLogged, setIsLogged] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
      <ul className={isActive?'navBar__links--active':'navBar__links'}>
        <li>
          <NavLink className= 'navBar__navLink' to='/'>Home</NavLink>
        </li>
        {isLogged ? (
          <>
            <li>
              <NavLink className= 'navBar__navLink' to=''>ManageBoards</NavLink>
            </li>
            <li>
              <NavLink className= 'navBar__navLink' to=''>Profile</NavLink>
            </li>
            <li>
              <NavLink to=''>LogOut</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink className= 'navBar__navLink' to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink className= 'navBar__navLink' to='/signup'>signUp</NavLink>
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
