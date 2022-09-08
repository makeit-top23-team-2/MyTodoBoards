import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import CreateBoard from '../../components/createBoard';
import { getAllUserBoards, getAllSharedBoards } from '../../services/boards';
import { setBoards } from '../../store/boardsSlice';
import { setSharedBoards } from '../../store/sharedBoardsSlice';

function ManageBoard() {
  const dispatch = useDispatch();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const boards = useSelector(state => state.boards.value);
  const sharedBoards = useSelector(state => state.sharedBoards.value);

  useEffect(() => {
    const fetchData = async () => {
      const Boards = await getAllUserBoards();
      const SharedBoards = await getAllSharedBoards();
      dispatch(setBoards(Boards));
      dispatch(setSharedBoards(SharedBoards));
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
            {boards.length
              ? boards.map(board => (
                  <li className='container__article__li__item' key={board._id}>
                    <Link
                      to={`/board/${board._id}`}
                      className='container__article__a__item'
                      style={{
                        background: `url("${board.color}")`,
                        backgroundPosition: `center center`,
                        backgroundSize: 'cover',
                      }}
                    >
                      <p
                        className='container__article__p__item'
                        style={{
                          color: 'black',
                        }}
                      >
                        <span
                          className='container__article__span'
                          style={{
                            background: 'rgba(235,236,240,0.7)',
                            borderRadius: '5px',
                            padding: '5px',
                            boxShadow: '9px 5px 17px 1px rgba(0,0,0,0.35)',
                            fontSize: '13px',
                            fontWeight: '500',
                          }}
                        >
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

      <main className='container'>
        <div className='container__header'>
          <span className='container__span'>
            <i className='fa-solid fa-people-group' />
          </span>
          <p className='container__p'>Shared with you</p>
        </div>

        <article className='container__article'>
          <ul className='container__article__ul'>
            {sharedBoards.length ? (
              sharedBoards.map(board => (
                <li className='container__article__li__item' key={board._id}>
                  <Link
                    to={`/board/${board._id}`}
                    className='container__article__a__item'
                    style={{
                      background: `url("${board.color}")`,
                      backgroundPosition: `center center`,
                      backgroundSize: 'cover',
                    }}
                  >
                    <p
                      className='container__article__p__item'
                      style={{
                        color: 'black',
                      }}
                    >
                      <span
                        className='container__article__span'
                        style={{
                          background: 'rgba(235,236,240,0.7)',
                          borderRadius: '5px',
                          padding: '5px',
                          boxShadow: '9px 5px 17px 1px rgba(0,0,0,0.35)',
                          fontSize: '13px',
                          fontWeight: '500',
                        }}
                      >
                        {board.title}
                      </span>
                    </p>
                  </Link>
                </li>
              ))
            ) : (
              <div className='container__article__li__item'>
                You do not have shared Boards yet
              </div>
            )}
          </ul>
        </article>
      </main>

      <CreateBoard
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />
    </div>
  );
}

export default ManageBoard;
