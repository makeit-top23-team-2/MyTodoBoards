import React from 'react';

import  './signup.scss';

function SignUp() {
  return(
    <div className='signup'>
      <header className="signup__header"> <img className="signup__header__logo"  src="..\img\trello.png" alt=""/></header>
      <div className="signup__form">
        <h1>Sign up for your account</h1>
        <input className="signup__email "type="email" name="email" placeholder= " Enter email"/>
        <p className="signup__politics">By signing up, you confirm that you've read and accepted our <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.</p>
        <button className="signup__button"><b>Continue</b> </button>
        <p>OR</p>
        <div className="signup__with">
        <button className="signup__with__button"> <img className="signup__with__img" src="..\img\google.png" alt=""/> <b>Continue with Google</b> </button>
        <button className="signup__with__button"> <img className="signup__with__img" src="..\img\microsoft.png" alt=""/> <b>Continue with Microsoft</b> </button>
        <button className="signup__with__button"> <img className="signup__with__img" src="..\img\apple.png" alt=""/> <b>Continue with Apple</b> </button>
        </div>
        <hr/>
        <a href="">Already have an account? Log In</a>
      </div>    
      <div className="signup__language">
        <select name="Language Picker" className="signup__language-picker">
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
    </div>
  );
}

export default SignUp;
