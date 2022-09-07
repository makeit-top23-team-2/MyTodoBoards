import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';
import ModalChecklist from '../modalChecklist';
import { updateCard, deleteCard } from '../../services/cards';

function ModalCard({ isModalOpened, setIsModalOpened, card, column }) {
  const [modalChecklist, setModalCheclist] = useState(false);
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({});
  const [style, setStyle] = useState(0);

  useEffect(() => {
    if (card.checklist.length) {
      setTasks(card.checklist);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpened(false);
  };

  const handleClick = () => {
    setModalCheclist(true);
  };

  const handleChange = e => {
    setTask({ description: e.target.value, id: uuid(), completed: false });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTasks([...tasks, task]);
    document.getElementById(card._id).value = '';
  };

  const handleDelete = id => {
    const newTasks = tasks.filter(item => item.id !== id);
    setTasks(newTasks);
  };

  const handleFormChange = e => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const saveCardUpdate = async () => {
    const newCard = {
      title: form.title,
      description: form.cardDescription,
      checklist: tasks,
      members: [],
    };
    await updateCard(card._id, newCard);
    window.location.reload();
  };

  const handleSave = () => {
    saveCardUpdate();
  };

  const cardDelete = async () => {
    await deleteCard(card._id);
    window.location.reload();
  };

  const handleDeleteCard = () => {
    cardDelete();
  };

  const handleComplete = id => {
    setTasks(
      tasks.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : { ...item }
      )
    );
  };

  const updateList = tasks.filter(item => item.completed);
  const total = Math.round((updateList.length / tasks.length) * 100);

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${total}%`,
    };
    setStyle(newStyle);
  }, 30);

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
              <input
                type='text'
                className='modal__textarea'
                placeholder='title'
                defaultValue={card.title}
                name='title'
                onChange={handleFormChange}
              />
              <p className='modal__p'>
                In list <strong>{column.title}</strong>
              </p>
            </header>

            <article className='modal__article'>
              <div>
                <h3 className='modal__h3'>Description</h3>
              </div>
              <div>
                <textarea
                  placeholder='Add a more detailed description...'
                  className='modal__text'
                  defaultValue={card.description}
                  name='cardDescription'
                  onChange={handleFormChange}
                />
              </div>
            </article>

            <section className='modal__section'>
              <div className='modal__section__i'>
                <i className='fa-regular fa-square-check' />
                <h3 className='modal__section__h3'>Checklist</h3>
              </div>

              <div className='modal__section__percen'>
                {total >= 0 ? `${total}%` : `0%`}
                <div className='modal__section__progress'>
                  <div
                    className='modal__section__progress__done'
                    style={style}
                  />
                </div>
              </div>

              <div className='modal__section__list'>
                {tasks?.map &&
                  tasks.map(item => (
                    <div key={item.id} className='modal__section__div'>
                      <input
                        type='checkbox'
                        checked={item.completed}
                        onChange={() => handleComplete(item.id)}
                      />
                      <p
                        className={`${
                          item.completed
                            ? 'modal__section__p__active'
                            : 'modal__section__p'
                        }`}
                      >
                        {item.description}
                      </p>
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
                  placeholder='Add an item...'
                  onChange={handleChange}
                  className='modal__section__input'
                  id={card._id}
                />
                <button
                  disabled={task.description ? '' : 'disabled'}
                  type='submit'
                  className='modal__section__button__add'
                >
                  Add an Item
                </button>
              </form>
            </section>

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

                <div>
                  <button
                    type='button'
                    className='modal__save'
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    type='button'
                    className='modal__cancel'
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    type='button'
                    className='modal__section__delete'
                    onClick={handleDeleteCard}
                  >
                    Delete Card
                  </button>
                </div>
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
  card: PropTypes.shape(),
  Tasks: PropTypes.arrayOf(PropTypes.shape()),
  setTasks: PropTypes.func,
};
ModalCard.defaultProps = {
  isModalOpened: false,
  setIsModalOpened: () => null,
  card: {},
  Tasks: [],
  setTasks: () => null,
};

export default ModalCard;
