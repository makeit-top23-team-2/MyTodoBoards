
const NotFound = () => {
  return (    
    <>
      <main class="main">
        <aside class="main__Description">
          <h2 class="main__error">
              UPS! PAGE NOT FOUND
          </h2>        
        </aside>
        <section class="main__img">
          <img src="..\img\goku_genkidama.png" alt="image reflector" />  
          <p class="main__number">
            404
          </p>                  
        </section>    
        <footer className="footer__img">
          <img className="footer__img1" src="..\img\logSing__footer__img1.png"/>
          <img className="footer__img2" src="..\img\logSing__footer__img2.png"/>
        </footer>
      </main>
    </>
  )
}

export default NotFound;