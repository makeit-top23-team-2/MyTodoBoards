import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { ReactSortable } from 'react-sortablejs';
import { useSelector } from 'react-redux';
import { handlerChange, handlerSubmit } from './handlers';
import { getColumnById, updateColumn } from '../../services/columns';
import Card from './Card';
import DeleteColumn from '../deleteColumnModal';

function ToDo({ column }) {
  const [texto, setTexto] = useState('');
  const board = useSelector(state => state.singleBoard.value);
  const { id } = column;
  const [isColumnDeleteModalOpened, setIsColumnDeleteModalOpened] =
    useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const singleColumn = await getColumnById(id);
      const { cards } = singleColumn;
      if (cards) {
        setTasks(cards);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const columnUpdate = async () => {
      await updateColumn(id, { cards: tasks });
    };
    setTimeout(() => {
      columnUpdate();
    }, 10);
  }, [tasks]);

  const handlerChangeColumnTitle = async e => {
    await updateColumn(id, { title: e.target.value });
  };

  const handleOpenDeleteColumnModal = () => {
    setIsColumnDeleteModalOpened(true);
  };

  return (
    <div className='ToDo__column'>
      <button
        className='column__open__modal'
        type='button'
        onClick={handleOpenDeleteColumnModal}
      >
        <i className='fa-solid fa-trash' />
      </button>
      <div className='ToDo__DragImg'>
        <img
          alt=''
          src='https://pic.onlinewebfonts.com/svg/img_68260.png'
          className='columns__handler'
        />
      </div>
      <section className='ToDo__cards'>
        <input
          type='text'
          className='ToDo__listTitle__input'
          placeholder='Write a title for this list...'
          defaultValue={column.title}
          onBlur={handlerChangeColumnTitle}
        />
      </section>
      <div className='ToDo__submit'>
        <form
          className='ToDo__submit__form'
          onSubmit={e =>
            handlerSubmit(e, texto, column, tasks, setTasks, board)
          }
        >
          <input
            className='ToDo__input__text'
            type='text'
            placeholder='+ Add a card...'
            onChange={e => handlerChange(e, setTexto)}
            name='tarea'
            id={column.inputId}
          />
          <button type='submit' className='ToDo__AddButton'>
            Add
          </button>
        </form>
        <ReactSortable
          id={column.id}
          list={tasks}
          setList={setTasks}
          group='groupName'
          animation={150}
          delay={10}
          className='ToDo__cardlist'
          chosenClass='sortable-chosen'
          dragClass='sortable-drag'
          ghostClass='sortable-ghost'
          tag='ul'
          filter='.non-draggable'
        >
          {tasks?.map(card => (
            <Card
              column={column}
              key={card._id}
              card={card}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </ReactSortable>
        <hr className='ToDo_hr' />
      </div>
      <DeleteColumn
        isColumnDeleteModalOpened={isColumnDeleteModalOpened}
        setIsColumnDeleteModalOpened={setIsColumnDeleteModalOpened}
        id={id}
      />
    </div>
  );
}

ToDo.propTypes = {
  column: PropTypes.shape(),
};
ToDo.defaultProps = {
  column: {},
};

export default ToDo;
