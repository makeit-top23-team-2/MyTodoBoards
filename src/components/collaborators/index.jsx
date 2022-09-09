import React from 'react';
import PropTypes from 'prop-types';

function Collaborator({ collaborator }) {
  return (
    <li key={collaborator._id} className='board__collaborators'>
      <img
        src={collaborator.avatar}
        className='collaborators__avatar'
        alt={collaborator.userName}
      />
      <p className='userName__tooltip'>{collaborator.userName} Collab</p>
    </li>
  );
}

export default Collaborator;

Collaborator.propTypes = {
  collaborator: PropTypes.shape(),
};

Collaborator.defaultProps = {
  collaborator: {},
};
