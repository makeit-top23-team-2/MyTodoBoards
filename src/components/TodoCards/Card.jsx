import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalCard from '../modalCard';

function Card({ card }) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpened(true);
  };

  return (
    <>
      <li id={card.id} className='ToDo__cardlist__item'>
        <span className='ToDo__cardlist__cardTitle'>{card.title}</span>
        <button
          className='non-draggable ToDo__Checkbox'
          type='button'
          onClick={handleOpenModal}
        >
          <i className='fa-solid fa-ellipsis' />
        </button>
      </li>
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
};

Card.defaultProps = {
  card: {},
};
