import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import { createBoard } from '../../services/boards';
import BackgroundBoard from '../backgroundBoard';
import { uploadColorBoard } from '../../services/upload';
import { setSelectImgBool } from '../../store/selectImgBoolSlice';

function CreateBoard({ isModalOpened, setIsModalOpened }) {
  const [task, setTask] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [text, setText] = useState('Create');
  const [disable, setDisable] = useState('');
  const dispatch = useDispatch();
  const [styleButton, setStyleButton] = useState('board__section__button');
  const imgSelected = useSelector(state => state.colorBoard.value);
  const selectImgBool = useSelector(state => state.selectImgBool.value);
  const [file, setFile] = useState(null);

  const handleChange = e => {
    dispatch(setSelectImgBool(false));
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  const handleCloseModal = () => {
    setIsModalOpened(false);
    setFile(null);
  };

  const handleInput = e => {
    setTask(e.target.value);
  };

  const handleChangeData = () => {
    setDisable('');
    setStyleButton('board__section__loading');
    setText('Loading...');
  };

  const handleForm = async e => {
    e.preventDefault();
    if (!selectImgBool) {
      const imgURL = await uploadColorBoard(file);
      const colorBoard = imgURL.url;
      dispatch(setSelectImgBool(false));
      const board = await createBoard(
        { title: task, color: colorBoard },
        token
      );
      navigate(`/board/${board._id}`);
    }

    if (selectImgBool) {
      const colorBoard = imgSelected;
      const board = await createBoard(
        { title: task, color: colorBoard },
        token
      );
      navigate(`/board/${board._id}`);
    }
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
              <div
                className='board__section__div'
                style={{
                  backgroundImage: `url("${
                    file ? URL.createObjectURL(file) : imgSelected
                  }")`,
                }}
              >
                <img
                  className='board__section__image'
                  src='https://a.trellocdn.com/prgb/dist/images/board-preview-skeleton.14cda5dc635d1f13bc48.svg'
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
                  <BackgroundBoard setFile={setFile} />
                </div>
              </div>

              <form className='board__section__form'>
                <div>
                  <span className='board__section__label'>
                    Upload Image <span className='board__section__span'>*</span>
                  </span>
                  <input
                    className='board__section__input'
                    type='file'
                    onChange={handleChange}
                    accept='image/*'
                    required
                  />
                </div>
              </form>

              <form className='board__section__form' onSubmit={handleForm}>
                <div>
                  <span className='board__section__label'>
                    Board Title <span className='board__section__span'>*</span>
                  </span>
                  <input
                    onChange={handleInput}
                    className='board__section__input'
                    type='text'
                  />
                  <span className='board__section__span--2'>
                    👋 Board title is required
                  </span>
                  <button
                    type='submit'
                    className={styleButton}
                    disabled={task.length > 3 || disable ? '' : 'disabled'}
                    onClick={handleChangeData}
                  >
                    {text}
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
