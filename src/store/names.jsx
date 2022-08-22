/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './namesSlice';

function Names() {
  const [text, setText] = useState('');
  const names = useSelector(state => state.names.value);
  const dispatch = useDispatch();

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type='text' onChange={handleChange} />
      <button type='button' onClick={() => dispatch(add(text))}>
        add
      </button>
      <ul>
        {names.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
    </div>
  );
}

export default Names;
