import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalCard from '../modalCard';
// import { handlerChangeCheck } from './handlers';

// function Card({ card, Tasks, setTasks }) {
function Card({ card }) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpened(true);
  };

  return (
    <>
      <li id={card.id} className='ToDo__cardlist__item'>
        <input
          className='non-draggable ToDo__Checkbox'
          type='checkbox'
          onChange={handleOpenModal}
          checked={false}
          // onChange={() => {
          //   handlerChangeCheck(card.id, Tasks, setTasks);
          // }}
        />
        {card.title}
      </li>
      {/* <button type='button' onClick={handleOpenModal}>Open</button> */}
      <ModalCard
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />
    </>
  );
}

export default Card;

Card.propTypes = {
  card: PropTypes.shape(),
  // Tasks: PropTypes.arrayOf(PropTypes.shape()),
  // setTasks: PropTypes.func,
};

Card.defaultProps = {
  card: {},
  // Tasks: [],
  // setTasks: () => null,
};
