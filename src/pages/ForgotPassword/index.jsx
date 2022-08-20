import React from "react";
import { NavLink } from 'react-router-dom';

function ForgotPassword () {
  return (
    <div className="forgot">
      <main>
        <img src="..\img\trello.png" alt="Logo Trello" className="forgot__logo"/> 
        <section className="forgot__section">
          <div className="forgot__section__container">
            <h1>Cannot Log in?</h1>
            <form className="forgot__section__form">
              <span className="forgot__section__span">We will send a recovery link to</span>
              <input type="email" placeholder="Enter email" className="forgot__section__input" />
              <button type="submit" className="forgot__section__button">Send Recovery Link</button>
            </form>
            <hr className="forgot__section__hr"/>
            <NavLink to='/logIn' className="forgot__section__link">Return to log in</NavLink>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ForgotPassword;