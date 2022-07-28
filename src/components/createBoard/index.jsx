import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import BackgroundBoard from '../backgroundBoard';

function CreateBoard({ modal, setModal }) {
  const [task, setTask] = useState('');

  const handleModal = () => {
    setModal(!modal);
  };

  const handleInput = e => {
    setTask(e.target.value);
  };

  const handleForm = e => {
    e.preventDefault();
    setTask('');
  };

  return (
    <div>
      {modal && (
        <main className='board'>
          <header className='board__header'>
            <div className='board__header__div'>Create Board</div>
            <button
              type='button'
              onClick={handleModal}
              className='board__header__button'
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
                  type='button'
                  className='board__section__button'
                  disabled={task.length > 3 ? '' : 'disabled'}
                >
                  Create
                </button>
              </div>
            </form>

            <div className='board__section__footer'>
              <div className='board__section__text'>
                By using images from Unsplash, you agree to their
                <a
                  className='board__section__a'
                  href='https://unsplash.com/license'
                  target='_blank'
                  rel='noreferrer'
                >
                  license
                </a>
                and
                <a
                  className='board__section__a'
                  href='https://unsplash.com/terms'
                  target='_blank'
                  rel='noreferrer'
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

CreateBoard.propTypes = {
  modal: PropTypes.bool,
  setModal: PropTypes.func,
};
CreateBoard.defaultProps = {
  modal: false,
  setModal: () => null,
};

export default CreateBoard;
