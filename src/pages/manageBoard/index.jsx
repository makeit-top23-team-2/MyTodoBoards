import {NavLink} from 'react-router-dom';
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

function ManageBoard() {
  return (
    <div>
      <NavBar/>
      <main className="container">
        <header className="container__header">
          <span className="container__span"><i className="fa-solid fa-user"></i></span>
          <p className="container__p">Your Boards</p>
        </header>

        <article className="container__article">
          <ul className='container__article__ul'>
            <li className='container__article__li__item'>
              <NavLink to="/board" className="container__article__a__item">
                <p className='container__article__p__item'>
                  <span className='container__article__span'>Homework</span>
                </p>
              </NavLink>
            </li>
            <li className='container__article__li'>
              <NavLink to="/create_Boards" className="container__article__a">
                <p className='container__article__p'>
                  <span>Create a new board</span>
                </p>
              </NavLink>
            </li>
          </ul>
        </article>
      </main>
      <Footer/>
    </div>
  )
}

export default ManageBoard;