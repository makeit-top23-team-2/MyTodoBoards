import React from "react"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

const Home= () => {
  return(
    <div>
      <NavBar />
        
        <section className="home__section1">
          <div className="home__section1__img">
            <img className="section1__img" src="..\img\frello-home-section1.png" alt="" />
          </div>
          <div className="home__section1__datail">
            <h2>Frello helps teams move work forward.</h2>
            <p className="home__section1__datail__paragraph">Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Frello.</p>
          </div>
        </section>

        <section className="home__section2">
          <div className="home__section2__img">
            <img className="section2__img" src="..\img\frello-home-section2.png" alt="" />
          </div>
          <div className="home__section2__datail">
            <h2>It’s more than work. It’s a way of working together.</h2>
            <p className="home__section2__datail__paragraph">Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
          </div>
        </section>

        <section className="home__section3">
          <div className="home__section3__img">
            <img className="section3__img" src="..\img\frello-home-section3.png" alt="" />
          </div>
          <div className="home__section3__datail">
            <h2>Cards contain everything you need</h2>  
            <p className="home__section3__datail__paragraph">Frello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.</p>
          </div>
        </section>

        <section className="home__section4">
          <div className="home__section4__img">
            <img className="section4__img" src="..\img\frello-home-section4.png" alt="" />
          </div>
          <div className="home__section4__datail">
            <h2>Cards contain everything you need</h2>
            <p className="home__section4__datail__paragraph">Frello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.</p>
          </div>
        </section>




       


       






      <Footer />
    
    
    </div>
)

}

export default Home;


/*
<NavBar/>
        <div className="homeIntro">
            <div className="tittle">
                <h2>Hi, This is Trello</h2>
                <hr/>
            </div>
            <div className="icons">
            <section>
                <img className="iconsHome" src="..\img\file-solid.png" alt="" />
                <h4>laoreet accumsan</h4>
                <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec.</p>
            </section>
            <section>
                <img className="iconsHome" src="..\img\paper-plane-solid.png" alt="" />
                <h4>laoreet accumsan</h4>
                <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. </p>
            </section>
            <section>
                <img className="iconsHome" src="..\img\table-solid.png" alt="" />
                <h4>laoreet accumsan</h4>
                <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. </p>
            </section>
            <section>
                <img className="iconsHome" src="..\img\tablet-alt-solid.png" alt="" />
                <h3>laoreet accumsan</h3>
                <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec.</p>
            </section>
            </div>
        </div>



*/