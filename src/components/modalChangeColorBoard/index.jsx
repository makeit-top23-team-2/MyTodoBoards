import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import BackgroundBoard from '../backgroundBoard';
import { uploadColorBoard } from '../../services/upload';
import { updateBoard } from '../../services/boards';
import { setSingleBoard } from '../../store/singleBoardSlice';
import { setSelectImgBool } from '../../store/selectImgBoolSlice';

function ChangeColorBoard({ isModalOpened, setIsModalOpened }) {
  const [buttonText, setButtonText] = useState('Send');
  const [styleButton, setStyleButton] = useState('board__section__button');
  const singleBoard = useSelector(state => state.singleBoard.value);
  const selectImgBool = useSelector(state => state.selectImgBool.value);
  const imgSelected = useSelector(state => state.colorBoard.value);
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleChange = e => {
    if (e.target.files[0] && !selectImgBool) setFile(e.target.files[0]);
  };

  const handleUploadColorBoard = async () => {
    if (file) {
      // setEnableButton('')
      setButtonText('Loading...');
      setStyleButton('board__section__loading');
      const imgURL = await uploadColorBoard(file);
      const color = imgURL.url;
      const id = singleBoard._id;
      const board = await updateBoard(id, { color });
      dispatch(setSingleBoard(board));
      setStyleButton('boton__save__photo');
      setButtonText('Send');
      setIsModalOpened(false);
    }
    if (selectImgBool) {
      // setEnableButton('')
      const color = imgSelected;
      const id = singleBoard._id;
      const board = await updateBoard(id, { color });
      dispatch(setSingleBoard(board));
      setStyleButton('boton__save__photo');
      setButtonText('Send');
      setIsModalOpened(false);
    }
    setStyleButton('boton__save__photo');
    setButtonText('Send');
    dispatch(setSelectImgBool(false));
    setIsModalOpened(false);
  };

  const handleCloseModal = () => {
    setIsModalOpened(false);
  };

  return createPortal(
    <div >
      {isModalOpened && (
        <div className='container__change__color'>
          <main className='board'>
            <header className='board__header'>
              <div className='board__header__div'>Change background image</div>
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
                style={{ backgroundImage: `url("${imgSelected}")` }}
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
                  <BackgroundBoard />
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
                  <button
                    type='button'
                    className={styleButton}
                    onClick={handleUploadColorBoard}
                    disabled={selectImgBool ? false : !file}
                  >
                    <b>{buttonText}</b>
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

ChangeColorBoard.propTypes = {
  isModalOpened: PropTypes.bool,
  setIsModalOpened: PropTypes.func,
};
ChangeColorBoard.defaultProps = {
  isModalOpened: false,
  setIsModalOpened: () => null,
};

export default ChangeColorBoard;
