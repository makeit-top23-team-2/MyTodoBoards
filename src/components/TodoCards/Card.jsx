import React from 'react';
import PropTypes from 'prop-types';
import { handlerChangeCheck } from './handlers';

function Card({ card, tasks, setTasks }) {
  return (
    <li id={card.id} className='ToDo__cardlist__item'>
      <input
        className='non-draggable ToDo__Checkbox'
        type='checkbox'
        onChange={() => {
          handlerChangeCheck(card.id, tasks, setTasks);
        }}
      />
      {card.title}
    </li>
  );
}

export default Card;

Card.propTypes = {
  card: PropTypes.shape(),
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  setTasks: PropTypes.func,
};

Card.defaultProps = {
  card: {},
  tasks: [],
  setTasks: () => null,
};
