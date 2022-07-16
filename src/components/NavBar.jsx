import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="header__nav">
      <NavLink to="/" class="header__a">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2560px-Trello-logo-blue.svg.png" alt="" class="header__logo"/>
      </NavLink>
      <input type="checkbox" class="header__check" id="check"/>
      <label for="check" class="header__checkbtn">
        <i class="fa-solid fa-bars"></i>
      </label>
      <ul class="header__ul">
        {/* <li class="header__li"><NavLink to="" class="header__a"></NavLink></li>
        <li class="header__li"><NavLink to="" class="header__a"></NavLink></li> */}
        <li class="header__li"><NavLink to="/board" class="header__a">Board</NavLink></li>
        <li class="header__li"><NavLink to="/signup" class="header__a">Sign Up</NavLink></li>
        <li class="header__li"><NavLink to="/login" class="header__a">Login</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar
