import React from 'react';

function BackgroundBoard() {
  return (
    <div>
      <ul className='board__ul'>
        <li className='board__li'>
          <button label type='button' className='board__li__button button1' />
        </li>
        <li className='board__li'>
          <button label type='button' className='board__li__button button2' />
        </li>
        <li className='board__li'>
          <button label type='button' className='board__li__button button3' />
        </li>
        <li className='board__li'>
          <button label type='button' className='board__li__button button4' />
        </li>
      </ul>
      <ul className='board__ul'>
        <li className='board__li'>
          <button label type='button' className='board__li__button button5' />
        </li>
        <li className='board__li'>
          <button label type='button' className='board__li__button button6' />
        </li>
        <li className='board__li'>
          <button label type='button' className='board__li__button button7' />
        </li>
        <li className='board__li'>
          <button label type='button' className='board__li__button button8' />
        </li>
      </ul>
    </div>
  );
}

export default BackgroundBoard;
