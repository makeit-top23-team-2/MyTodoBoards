import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { PropTypes } from 'prop-types';
import { upLoadFiles } from '../../services/upload';
import { updateCard } from '../../services/cards';

function ModalAddFiles({
  modalAddFiles,
  setModalAddFiles,
  cardId,
  setFiles: handleFiles,
}) {
  const [files, setFiles] = useState(null);
  const [Text, setText] = useState('Add');
  const [className, setClassName] = useState('add__files__diabled');

  const handleModal = () => {
    setModalAddFiles(false);
    setClassName('add__files__diabled');
    setFiles(null);
  };

  const handleChange = e => {
    setFiles(e.target.files);
    setClassName('add__files__enabled');
  };

  const handleUploadFiles = async e => {
    e.preventDefault();
    setText('Loading');
    setClassName('add__files__diabled');
    // setDisable(true);
    const result = await upLoadFiles(files);
    const card = await updateCard(cardId, { files: result });
    handleFiles(card.files);
    if (card) {
      Swal.fire({
        title: 'Your file has been uploaded!',
        icon: 'success',
        confirmButtonText: 'Got it!',
      });
    }
    setText('Add');
    setClassName('board__section__button');
    setModalAddFiles(false);
    setFiles(null);
  };

  return (
    <div>
      {modalAddFiles && (
        <section className='check'>
          <header className='check__header'>
            <span className='check__title'>Add files</span>
            <button
              type='button'
              className='check__button'
              onClick={handleModal}
            >
              <i className='fa-solid fa-xmark' />
            </button>
          </header>

          <main className='check__main'>
            <form onSubmit={handleUploadFiles}>
              <span className='check__form__span'>Select your files</span>
              <input
                type='file'
                className='check__input'
                onChange={handleChange}
                multiple
              />
              <button
                type='submit'
                className={className}
                disabled={!files ? 'disabled' : ''}
              >
                {Text}
              </button>
            </form>
          </main>
        </section>
      )}
    </div>
  );
}

ModalAddFiles.propTypes = {
  modalAddFiles: PropTypes.bool,
  setModalAddFiles: PropTypes.func,
  cardId: PropTypes.string,
  setFiles: PropTypes.func,
};
ModalAddFiles.defaultProps = {
  modalAddFiles: false,
  setModalAddFiles: () => null,
  cardId: '',
  setFiles: () => null,
};

export default ModalAddFiles;
