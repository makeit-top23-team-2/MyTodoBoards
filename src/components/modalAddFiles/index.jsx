import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { PropTypes } from 'prop-types';
import { upLoadFiles } from '../../services/upload';
import { updateCard } from '../../services/cards';

function ModalAddFiles({ modalChecklist, setModalCheclist, cardId }) {
  const [files, setFiles] = useState(null);
  const [Text, setText] = useState('Add');
  const [className, setClassName] = useState('check__form__button');
  const [disable, setDisable] = useState(false);

  const handleModal = () => {
    setModalCheclist(false);
  };

  const handleChange = e => {
    setFiles(e.target.files);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleUploadFiles = async () => {
    setText('Loading');
    setClassName('check__form__loading');
    setDisable(true);
    const result = await upLoadFiles(files);
    const card = await updateCard(cardId, { files: result });
    if (card) {
      Swal.fire({
        title: 'Your image has been up!',
        icon: 'success',
        confirmButtonText: 'Got it!',
      });
    }
    setText('Add');
    setClassName('check__form__button');
    setDisable(false);

    setModalCheclist(false);
  };

  return (
    <div>
      {modalChecklist && (
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
            <form onSubmit={handleSubmit}>
              <span className='check__form__span'>Select your files</span>
              <input
                type='file'
                className='check__input'
                onChange={handleChange}
                multiple
              />
              <button
                type='button'
                className={className}
                onClick={handleUploadFiles}
                disabled={disable}
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
  modalChecklist: PropTypes.bool,
  setModalCheclist: PropTypes.func,
  cardId: PropTypes.string,
};
ModalAddFiles.defaultProps = {
  modalChecklist: false,
  setModalCheclist: () => null,
  cardId: '',
};

export default ModalAddFiles;
