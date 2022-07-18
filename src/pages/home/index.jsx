import React from "react"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

const Home= () => {
    return(
    <div>
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
    <Footer/>
    </div>
)

}

export default Home;