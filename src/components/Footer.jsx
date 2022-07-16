import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="footer">
      <section class="footer_section">
        <div class="footer_section__up">
          <div class="footer__div">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2560px-Trello-logo-blue.svg.png" alt="" class="footer__logo"/>
            <NavLink to = "/login" class="redes">Login</NavLink>
          </div>
        </div>
      </section>
      <section class="footer__section">
        <div class="footer_section__down">
          <div class="footer__div__center">
            <ul class="footer__ul">
              <li class="footer__li"><a class="redes" href="#">Privacy Policy</a></li>
              <li class="footer__li"><a class="redes" href="#">Terms</a></li>
              <li class="footer__li"><a class="redes" href="#">Cookie Settings</a></li>
              <li class="footer__li"><a class="redes" href="#">Copiright 2022 Atlassian</a></li>
            </ul>
          </div>
          {/* <div class="footer__div__down">
            <a class="redes" href="#"><i class="fa-brands fa-instagram"></i></a>
            <a class="redes" href="#"><i class="fa-brands fa-facebook"></i></a>
            <a class="redes" href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a class="redes" href="#"><i class="fa-brands fa-twitter"></i></a>
            <a class="redes" href="#"><i class="fa-brands fa-youtube"></i></a>
          </div> */}
        </div>
      </section>
    </footer>
  )
}

export default Footer
