import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { PropTypes } from 'prop-types';
import { upLoadFiles } from '../../services/upload';
import { updateCard } from '../../services/cards';

function ModalChecklist({
  modalChecklist,
  setModalChecklist,
  cardId,
  setFiles: handleFiles,
}) {
  const [files, setFiles] = useState(null);
  const [Text, setText] = useState('Add');
  const [className, setClassName] = useState('check__form__button');
  const [disable, setDisable] = useState(false);

  const handleModal = () => {
    setModalChecklist(false);
  };

  const handleChange = e => {
    setFiles(e.target.files);
  };

  const handleUploadFiles = async e => {
    e.preventDefault();
    setText('Loading');
    setClassName('check__form__loading');
    setDisable(true);
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
    setClassName('check__form__button');
    setDisable(false);
    setModalChecklist(false);
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
            <form onSubmit={handleUploadFiles}>
              <span className='check__form__span'>Select your files</span>
              <input
                type='file'
                className='check__input'
                onChange={handleChange}
                multiple
              />
              <button type='submit' className={className} disabled={disable}>
                {Text}
              </button>
            </form>
          </main>
        </section>
      )}
    </div>
  );
}

ModalChecklist.propTypes = {
  modalChecklist: PropTypes.bool,
  setModalChecklist: PropTypes.func,
  cardId: PropTypes.string,
  setFiles: PropTypes.func,
};
ModalChecklist.defaultProps = {
  modalChecklist: false,
  setModalChecklist: () => null,
  cardId: '',
  setFiles: () => null,
};

export default ModalChecklist;
