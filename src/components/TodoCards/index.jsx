import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { ReactSortable } from 'react-sortablejs';
import { useSelector } from 'react-redux';

import { handlerChange, handlerSubmit } from './handlers';
import { getColumnById, updateColumn } from '../../services/columns';
import Card from './Card';

function ToDo({ column }) {
  const [texto, setTexto] = useState('');
  const board = useSelector(state => state.singleBoard.value);
  const { id } = column;

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
    }, 600);
  }, [tasks]);

  return (
    <div className='ToDo__column'>
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
              key={card._id}
              card={card}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </ReactSortable>

        <hr className='ToDo_hr' />
      </div>
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
