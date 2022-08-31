import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import { createBoard } from '../../services/boards';
import BackgroundBoard from '../backgroundBoard';

function CreateBoard({ isModalOpened, setIsModalOpened }) {
  const [task, setTask] = useState('');
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsModalOpened(false);
  };

  const handleInput = e => {
    setTask(e.target.value);
  };

  const handleForm = async e => {
    e.preventDefault();
    const board = await createBoard({ title: task });
    console.log('🚀 ~ file: index.jsx ~ line 25 ~ handleForm ~ board', board);
    setTask('');

    navigate(`/board/${board.title}/${board._id}`);

    console.log(
      '🚀 ~ file: index.jsx ~ line 26 ~ handleForm ~ board.title',
      board.title
    );
  };

  return createPortal(
    <div>
      {isModalOpened && (
        <div>
          <main className='board'>
            <header className='board__header'>
              <div className='board__header__div'>Create Board</div>
              <button
                type='button'
                className='board__header__button'
                onClick={handleCloseModal}
              >
                <i className='fa-solid fa-xmark' />
              </button>
            </header>

            <section className='board__section'>
              <div className='board__section__div'>
                <img
                  className='board__section__image'
                  src='..\img\image_boardPreview.jpg'
                  alt='image_board-preview'
                />
              </div>

              <div className='board__section__background'>
                <div>
                  <span className='board__section__background__label'>
                    Background
                  </span>
                </div>
                <div>
                  <BackgroundBoard />
                </div>
              </div>

              <form className='board__section__form' onSubmit={handleForm}>
                <div>
                  <span className='board__section__label'>
                    Board Title <span className='board__section__span'>*</span>
                  </span>
                  <input
                    onChange={handleInput}
                    className='board__section__input'
                    type='text'
                    value={task}
                  />
                  <span className='board__section__span--2'>
                    👋 Board title is required
                  </span>
                  <button
                    type='submit'
                    className='board__section__button'
                    disabled={task.length > 3 ? '' : 'disabled'}
                  >
                    Create
                  </button>
                </div>
              </form>
            </section>
          </main>
        </div>
      )}
    </div>,
    document.getElementById('modal')
  );
}

CreateBoard.propTypes = {
  isModalOpened: PropTypes.bool,
  setIsModalOpened: PropTypes.func,
};
CreateBoard.defaultProps = {
  isModalOpened: false,
  setIsModalOpened: () => null,
};

export default CreateBoard;
