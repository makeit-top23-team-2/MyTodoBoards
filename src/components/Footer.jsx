import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <section className='footer_section'>
        <div className='footer_section__up'>
          <div className='footer__div'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2560px-Trello-logo-blue.svg.png'
              alt=''
              className='footer__logo'
            />
          </div>
        </div>
      </section>
      <section className='footer__section'>
        <div className='footer_section__down'>
          <div className='footer__div__center'>
            <ul className='footer__ul'>
              <li className='footer__li'>
                <a className='redes' href='*'>
                  Privacy Policy
                </a>
              </li>
              <li className='footer__li'>
                <a className='redes' href='*'>
                  Terms
                </a>
              </li>
              <li className='footer__li'>
                <a className='redes' href='*'>
                  Cookie Settings
                </a>
              </li>
              <li className='footer__li'>
                <a className='redes' href='*'>
                  Copiright 2022 Atlassian
                </a>
              </li>
            </ul>
          </div>
          {/* <div classNameName="footer__div__down">
            <a classNameName="redes" href="#"><i classNameName="fa-brands fa-instagram"></i></a>
            <a classNameName="redes" href="#"><i classNameName="fa-brands fa-facebook"></i></a>
            <a classNameName="redes" href="#"><i classNameName="fa-brands fa-linkedin"></i></a>
            <a classNameName="redes" href="#"><i classNameName="fa-brands fa-twitter"></i></a>
            <a classNameName="redes" href="#"><i classNameName="fa-brands fa-youtube"></i></a>
          </div> */}
        </div>
      </section>
    </footer>
  );
}

export default Footer;
