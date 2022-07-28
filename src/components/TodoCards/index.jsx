import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function ToDo({ column }) {
  const [Texto, setTexto] = useState('');
  const [Tasks, setTasks] = useState([]);

  const handlerChange = evt => {
    setTexto(evt.target.value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const object = {
      texto: Texto,
      checked: false,
      id: Date.now(),
    };
    if (document.getElementById(column.id).value !== '') {
      setTasks([...Tasks, object]);
      document.getElementById(column.id).value = '';
    } else {
      alert('Please, introduce a card.');
    }
  };
  const handlerChangeCheck = id => {
    const newTasks = Tasks.map(task => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
      return task;
    });
    setTasks(newTasks);    
  };
  const handlerDelete = () => {
    const newTasks = Tasks.filter(task => task.checked === false);
    setTasks(newTasks);
  };
  return (
    <div className='.ToDo'>
      <div className='ToDo__column'>
        <div className='ToDo__cards'>
          <span className='ToDo__listTitle'>
            <input
              type='text'
              placeholder={column.name}
              className='ToDo__listTitle__input'
             />
          </span>
        </div>
        <div className='ToDo__submit'>
          <form onSubmit={handlerSubmit}>
            <span className='ToDo__input'>
              <input
                className='ToDo__input__text'
                type='text'
                placeholder='+ Add a card...'
                onChange={handlerChange}
                name='tarea'
                id={column.id}
              />
            </span>
            <button type='submit'>Add</button>
          </form>
          <ul className='ToDo__cardlist'>
            {Tasks.map(task => (
                <li key={task.id} className='ToDo__cardlist__item'>
                  <input
                    type='checkbox'
                    onChange={() => {
                      handlerChangeCheck(task.id);
                    }}
                  />
                  {task.texto}
                </li>
              ))}
          </ul>
          <hr className='ToDo_hr' />
          <span className='ToDo__delete'>
            <button type= "button" onClick={handlerDelete}>Press to delete selected</button>
          </span>
        </div>
      </div>
    </div>
  );
}

ToDo.propTypes = {
  column: PropTypes.shape()
};
ToDo.defaultProps = {
  column: {}
};
export default ToDo;
