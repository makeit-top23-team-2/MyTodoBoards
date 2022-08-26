import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import CreateBoard from '../../components/createBoard';
import { getUserByUserName } from '../../services/users';
import { addProfile } from '../../store/profileSlice';

function ManageBoard() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const profile = useSelector(state => state.profile.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserByUserName(profile.userName);
      dispatch(addProfile(user));
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
            <li className='container__article__li__item'>
              <NavLink to='/board' className='container__article__a__item'>
                <p className='container__article__p__item'>
                  <span className='container__article__span'>Homework</span>
                </p>
              </NavLink>
            </li>
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
