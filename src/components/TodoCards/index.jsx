import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { ReactSortable } from 'react-sortablejs';

import { handlerChange, handlerSubmit, handlerDelete } from './handlers';
import Card from './Card';

function ToDo({ column, taskTaker, Task }) {
  const [Texto, setTexto] = useState('');
  const [Tasks, setTasks] = useState([]);

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
          defaultValue={column.name}
        />
      </section>
      <div className='ToDo__submit'>
        <form onSubmit={e => handlerSubmit(e, Texto, column, Tasks, setTasks)}>
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
          list={Tasks}
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
          {Tasks.map(card => (
            <Card
              key={card.id}
              card={card}
              taskTaker={taskTaker}
              Task={Task}
              column={column}
              Tasks={Tasks}
              setTasks={setTasks}
            />
          ))}
        </ReactSortable>

        <hr className='ToDo_hr' />
        <span className='ToDo__delete'>
          <button
            type='button'
            onClick={() => handlerDelete(Tasks, setTasks)}
            className='ToDo__DeleteButton'
          >
            Press to delete selected
          </button>
        </span>
      </div>
    </div>
  );
}

ToDo.propTypes = {
  column: PropTypes.shape(),
  taskTaker: PropTypes.func,
  Task: PropTypes.shape(),
};
ToDo.defaultProps = {
  column: {},
  Task: {},
  taskTaker: () => null,
};

export default ToDo;
