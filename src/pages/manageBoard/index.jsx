
function ManageBoard() {
  return (
    <main className="container">
      <header className="container__header">
        <span className="container__span"><i className="fa-solid fa-user"></i></span>
        <p className="container__p">Your Boards</p>
      </header>

      <article className="container__article">
        <ul className='container__article__ul'>
          <li className='container__article__li__item'>
            <a href=" /board" className="container__article__a__item">              
              <p className='container__article__p__item'>
                <span className='container__article__span'>Homework</span>
              </p>
            </a>
          </li>

          <li className='container__article__li'>
            <a href="/create_Board" className="container__article__a">
              <p className='container__article__p'>
                <span>Create a new board</span>
              </p>
            </a>
          </li>
        </ul>
      </article>
    </main>
  )
}

export default ManageBoard;