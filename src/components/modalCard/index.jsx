import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';
import { addTask, deleteTask } from '../../store/checklistSlice';
import ModalChecklist from '../modalChecklist';

function ModalCard({ isModalOpened, setIsModalOpened }) {
  const [modalChecklist, setModalCheclist] = useState(false);
  const [task, setTask] = useState({});

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const handleCloseModal = () => {
    setIsModalOpened(false);
  };

  const handleClick = () => {
    setModalCheclist(true);
  };

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
  };

  const handleDelete = id => {
    dispatch(deleteTask(id));
  };

  return createPortal(
    <div>
      {isModalOpened && (
        <div className='modal'>
          <main className='modal__card'>
            <header className='modal__header'>
              <button
                type='button'
                className='modal__button'
                onClick={handleCloseModal}
              >
                <i className='fa-solid fa-xmark' />
              </button>
              <textarea className='modal__textarea' placeholder='title' />
              <p className='modal__p'>in list ...</p>
            </header>

            <section className='modal__section'>
              <h3 className='modal__h3'>Checklist</h3>
              <div>
                {tasks?.map &&
                  tasks.map(item => (
                    <div key={item.id} className='modal__section__div'>
                      <p className='modal__section__p'>{item.description}</p>
                      <button
                        className='modal__section__button'
                        type='submit'
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  name='description'
                  placeholder='Add an item'
                  onChange={handleChange}
                  value={task.description}
                  className='modal__section__input'
                />
                <button
                  disabled={task.description ? '' : 'disabled'}
                  type='submit'
                  className='modal__section__button'
                >
                  Add an Item
                </button>
              </form>
            </section>

            <article className='modal__article'>
              <div>
                <h3 className='modal__h3'>Description</h3>
              </div>
              <div>
                <textarea
                  placeholder='Add a more detailed description...'
                  className='modal__text'
                />
                <div>
                  <input type='submit' value='Save' className='modal__save' />
                  <input
                    type='submit'
                    value='Cancel'
                    className='modal__cancel'
                  />
                </div>
              </div>
            </article>

            <aside className='modal__aside'>
              <h3 className='modal__h3'>Add to card</h3>
              <div className='modal__aside__div'>
                <button type='button' className='modal__aside__button'>
                  <span className='modal__aside__span'>Members</span>
                </button>
                <button
                  type='button'
                  className='modal__aside__button'
                  onClick={handleClick}
                >
                  <span className='modal__aside__span'>Checklist</span>
                </button>
              </div>
            </aside>
            <ModalChecklist
              modalChecklist={modalChecklist}
              setModalCheclist={setModalCheclist}
            />
          </main>
        </div>
      )}
    </div>,
    document.getElementById('modal')
  );
}

ModalCard.propTypes = {
  isModalOpened: PropTypes.bool,
  setIsModalOpened: PropTypes.func,
};
ModalCard.defaultProps = {
  isModalOpened: false,
  setIsModalOpened: () => null,
  card: {},
  Tasks: [],
  setTasks: () => null,
};

export default ModalCard;
