import React from 'react';
import {NavLink} from 'react-router-dom';

function LogIn() {
  return(
    <div className='login'>
      <div className="login__header">
      <NavLink to='/'> <img className="login__header__logo"  src="..\img\trello.png" alt=""/></NavLink>
      </div>
      <div className="login__form">
        <h1>Log in to Trello</h1>
        <input className="login__email "type="email" name="email" placeholder= " Enter email"/>
        <input className="login__password "type="password" name="email" placeholder= " Enter password"/>
        <button className="login__button"><b>Log in</b></button>
        <p>OR</p>
        <div className="login__with">
          <button className="login__with__button"> <img className="login__with__img" src="..\img\google.png" alt=""/> <b>Continue with Google</b> </button>
          <button className="login__with__button"> <img className="login__with__img" src="..\img\microsoft.png" alt=""/> <b>Continue with Microsoft</b> </button>
          <button className="login__with__button"> <img className="login__with__img" src="..\img\apple.png" alt=""/> <b>Continue with Apple</b> </button>
        </div>
        <a href="">Log in with SSO</a>
        <hr/>
        <div className="login__cantlog">
          <ul>
            <li> <NavLink to="">Can't log in?</NavLink> </li>
            <li> <NavLink to="/signup">Sign up for an account</NavLink> </li>
          </ul>
        </div>
      </div>
      <div className="login__politics">
        <p className="login__politics__Service"><a href="">Terms of Service</a></p>
        <p className="login__politics_Privacy"><a href="">Privacy Policy</a></p>
      </div>
    <div className="login__language">
      <select name="Language Picker" className="login__language-picker">
        <option value="">Select your language…</option>
        <option value="">English</option>
        <option value="">Español</option>
        <option value="">Français</option>
        <option value="">Italiano</option>
        <option value="">Türkçe</option>
        <option value="">ภาษาไทย</option>
        <option value="">Українська</option>
      </select>
    </div>
    <div className="login__footer__img">
      <img className="login__footer__img1" src="..\img\logSing__footer__img1.png"/><img className="login__footer__img2" src="..\img\logSing__footer__img2.png"/>
    </div>
  </div>
);
}

export default LogIn;
