import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import CreateBoard from '../../components/createBoard';
import { getAllUserBoards } from '../../services/boards';
import { setBoards } from '../../store/boardsSlice';

function ManageBoard() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const boards = useSelector(state => state.boards.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const Boards = await getAllUserBoards();

      dispatch(setBoards(Boards));
    };
    fetchData();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpened(true);
  };

  return (
    <div>
      <NavBar />
      <main className='container'>
        <header className='container__header'>
          <span className='container__span'>
            <i className='fa-solid fa-user' />
          </span>
          <p className='container__p'>Your Boards</p>
        </header>

        <article className='container__article'>
          <ul className='container__article__ul'>
            <li className='container__article__li'>
              <button
                type='button'
                onClick={handleOpenModal}
                className='container__article__a'
              >
                <p className='container__article__p'>
                  <span>Create a new board</span>
                </p>
              </button>
            </li>
            {boards.map
              ? boards.map(board => (
                  <li className='container__article__li__item' key={board.key}>
                    <Link
                      to={`/board/${board.title}/${board.key}`}
                      className='container__article__a__item'
                    >
                      <p className='container__article__p__item'>
                        <span className='container__article__span'>
                          {board.title}
                        </span>
                      </p>
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </article>
      </main>

      <CreateBoard
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />
      <Footer />
    </div>
  );
}

export default ManageBoard;
