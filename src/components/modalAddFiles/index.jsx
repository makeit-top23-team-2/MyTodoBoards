import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { upLoadFiles } from '../../services/upload';
import { updateCard } from '../../services/cards';

function ModalAddFiles({ modalChecklist, setModalCheclist, cardId }) {
  const [files, setFiles] = useState(null);

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
  
     const result = await upLoadFiles(files);
     const updateFiles= async() =>{
      for (let i = 0; i < result.length; i+=1) {
      // eslint-disable-next-line no-await-in-loop
      await updateCard(cardId, {
        files: [{ url: result.resultsAll[i], name: result.names[i] }],
      });
    }
    
  };
     console.log("🚀 ~ file: index.jsx ~ line 32 ~ updateFiles ~ updateFiles", updateFiles)
}
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
                className='check__form__button'
                onClick={handleUploadFiles}
              >
                Add
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
