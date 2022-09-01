import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function ModalChecklist({ modalChecklist, setModalCheclist }) {
  const [title, setTitle] = useState('');

  const handleModal = () => {
    setModalCheclist(false);
  };

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTitle('');
  };

  return (
    <div>
      {modalChecklist && (
        <section className='check'>
          <header className='check__header'>
            <span className='check__title'>Add checklist</span>
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
              <span className='check__form__span'>Title</span>
              <input
                type='text'
                value={title}
                className='check__input'
                onChange={handleChange}
              />
              <button type='submit' className='check__form__button'>
                Add
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
  setModalCheclist: PropTypes.func,
};
ModalChecklist.defaultProps = {
  modalChecklist: false,
  setModalCheclist: () => null,
};

export default ModalChecklist;
