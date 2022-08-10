import React from 'react';
import {NavLink} from 'react-router-dom';

function NotFound() {
  return (     
    <main className='main'>
      <NavLink to='/' className='header__a'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2560px-Trello-logo-blue.svg.png'
          alt=''
          className='main__logo'
        />
      </NavLink>
      <aside className='main__Description'>
        <h2 className='main__error'>UPS! PAGE NOT FOUND</h2>
      </aside>
      <section className='main__img'>
        <img src='..\img\goku_genkidama.png' alt='reflector' />
        <p className='main__number'>404</p>
      </section>
      <footer className='footer__img'>
        <img
          className='footer__img1'
          src='..\img\logSing__footer__img1.png'
          alt='trellofooter1'
        />
        <img
          className='footer__img2'
          src='..\img\logSing__footer__img2.png'
          alt='trellofooter2'
        />
      </footer>
    </main>
    
  );
}

export default NotFound;
