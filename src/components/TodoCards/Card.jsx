import React from 'react';
import PropTypes from 'prop-types';
import { handlerChangeCheck } from './handlers';

function Card({ card, Tasks, setTasks }) {
  return (
    <li id={card.id} className='ToDo__cardlist__item'>
      <input
        className='non-draggable ToDo__Checkbox'
        type='checkbox'
        onChange={() => {
          handlerChangeCheck(card.id, Tasks, setTasks);
        }}
      />
      {card.title}
    </li>
  );
}

export default Card;

Card.propTypes = {
  card: PropTypes.shape(),
  Tasks: PropTypes.arrayOf(PropTypes.shape()),
  setTasks: PropTypes.func,
};

Card.defaultProps = {
  card: {},
  Tasks: [],
  setTasks: () => null,
};
