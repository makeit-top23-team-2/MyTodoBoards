import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalCard from '../modalCard';

function Card({ card, column }) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpened(true);
  };

  return (
    <>
      <li id={card.id} className='ToDo__cardlist__item'>
        <span className='ToDo__cardlist__cardTitle'>{card.title}</span>
        <button
          className='non-draggable ToDo__open__modal'
          type='button'
          onClick={handleOpenModal}
        >
          <i className='fa-solid fa-ellipsis' />
        </button>
      </li>
      <ModalCard
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
        card={card}
        column={column}
      />
    </>
  );
}

export default Card;

Card.propTypes = {
  card: PropTypes.shape(),
  column: PropTypes.shape(),
};

Card.defaultProps = {
  card: {},
  column: {},
};
