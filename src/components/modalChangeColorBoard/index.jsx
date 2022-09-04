import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import BackgroundBoard from '../backgroundBoard';
import { uploadColorBoard } from '../../services/upload';
import { updateBoard } from '../../services/boards';
import { setSingleBoard } from '../../store/singleBoardSlice'

function ChangeColorBoard({ isModalOpened, setIsModalOpened }) {
   const [disable, setDisable] = useState('');
  const [buttonText, setButtonText] = useState('Send');
  const [styleButton, setStyleButton] = useState('boton__save__photo');
  const singleBoard = useSelector(state => state.singleBoard.value);
  const dispatch = useDispatch()
  const [file, setFile] = useState(null);

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUploadColorBoard = async () => {
    setButtonText('Loading...');
    setDisable('disable');
    setStyleButton('boton__save__photo__disable');
    try {
      const imgURL = await uploadColorBoard(file);
      const color = imgURL.url
      const id = singleBoard._id

      const board = await updateBoard(id, {color})
      

      dispatch(setSingleBoard(board));
      setIsModalOpened(false);
      setDisable('');
      setStyleButton('boton__save__photo');
      setButtonText('Send');
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleCloseModal = () => {
    setIsModalOpened(false);
  };

  

  return createPortal(
    <div className='container__change__color__board'>
      {isModalOpened && (
        <div className='modal'>
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
              <div className='board__color__actual'>
                <img
                  className='board__section__image'
                  src={singleBoard.color}
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
                  />
                  <button type='button' className={styleButton} onClick={handleUploadColorBoard} disabled={disable}>
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
