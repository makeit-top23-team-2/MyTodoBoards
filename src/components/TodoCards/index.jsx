import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { ReactSortable } from 'react-sortablejs';
import { useSelector } from 'react-redux';
import { handlerChange, handlerSubmit } from './handlers';
import { getColumnById, updateColumn } from '../../services/columns';
import Card from './Card';
import DeleteColumn from '../deleteColumnModal';

function ToDo({ column }) {
  let controlInitialData = false;
  const [titleColumn, setTitleColumn] = useState('');
  const [texto, setTexto] = useState('');
  const board = useSelector(state => state.singleBoard.value);
  const { id } = column;
  const [isColumnDeleteModalOpened, setIsColumnDeleteModalOpened] =
    useState(false);

  const [tasks, setTasks] = useState([]);

  const onEndHandler = e => {
    const initialColumn = e.from.id;
    if (tasks.length === 1) {
      updateColumn(initialColumn, { cards: [] });
    }
  };

  const fetchData = async () => {
    const singleColumn = await getColumnById(id);
    const { cards } = singleColumn;
    setTitleColumn(singleColumn.title);
    if (cards !== tasks) {
      setTasks(cards);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      fetchData();
    }, 5000);
    if (!controlInitialData) {
      fetchData();
      controlInitialData = true;
    }
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const columnUpdate = async () => {
      await updateColumn(id, { cards: tasks });
    };
    if (tasks.length) {
      columnUpdate();
    }
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
        className='column__delete__button'
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
          defaultValue={titleColumn}
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
          onEnd={onEndHandler}
        >
          {tasks?.map(card => (
            <Card
              column={column}
              key={card._id}
              id={card._id}
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
