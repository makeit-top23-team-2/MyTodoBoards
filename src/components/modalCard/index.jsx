import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';
import ModalChecklist from '../modalChecklist';
import { updateCard, deleteCard } from '../../services/cards';

function ModalCard({ isModalOpened, setIsModalOpened, card, column }) {
  const [modalChecklist, setModalCheclist] = useState(false);
  const [task, setTask] = useState({});
  console.log('🚀 ~ file: index.jsx ~ line 14 ~ ModalCard ~ task', task);
  const [tasks, setTasks] = useState([]);
  console.log('🚀 ~ file: index.jsx ~ line 15 ~ ModalCard ~ tasks', tasks);
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (card.checklist.length) {
      setTasks(card.checklist);
    }
    console.log(
      '🚀 ~ file: index.jsx ~ line 21 ~ useEffect ~ card.checklist',
      card.checklist
    );
  }, []);

  // const tasks = useSelector(state => state.tasks);

  const handleCloseModal = () => {
    setIsModalOpened(false);
  };

  const handleClick = () => {
    setModalCheclist(true);
  };

  const handleChange = e => {
    setTask({ description: e.target.value, id: uuid() });
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

  const saveCardUpdate = () => {
    const newCard = {
      title: form.title,
      description: form.cardDescription,
      checklist: tasks,
      members: [],
    };
    updateCard(card._id, newCard);
    setIsModalOpened(false);
    navigate(`/board/${card.board}`, { replace: true });
  };

  const handleSave = () => {
    saveCardUpdate();
  };

  const cardDelete = () => {
    deleteCard(card._id);
    setIsModalOpened(false);
    navigate(`/board/${card.board}`, { replace: true });
  };

  const handleDeleteCard = () => {
    cardDelete();
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
                  placeholder='Add an item...'
                  onChange={handleChange}
                  className='modal__section__input'
                  id={card._id}
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

                <button
                  type='button'
                  className='modal__section__delete'
                  onClick={handleDeleteCard}
                >
                  Delete Card
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
