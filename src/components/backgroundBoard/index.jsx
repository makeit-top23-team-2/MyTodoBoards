import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { setColorBoard } from '../../store/colorBoardSlice';
import { setSelectImgBool } from '../../store/selectImgBoolSlice';

function BackgroundBoard({ setFile }) {
  const [imgSelected, setImgSelected] = useState(
    'https://res.cloudinary.com/davpin/image/upload/v1662170583/fondo-trello_odps0n.png'
  );
  const [imgTrue, setImgTrue] = useState(false);
  const [isBorde, setIsBorde] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setColorBoard(imgSelected));
    dispatch(setSelectImgBool(imgTrue));
  }, [imgSelected, imgTrue]);

  const handleSelect1 = () => {
    setIsBorde({
      borde1: true,
      borde2: false,
      borde3: false,
      borde4: false,
      borde5: false,
      borde6: false,
      borde7: false,
      borde8: false,
    });
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662306862/backgroundImage1_rjljzl.jpg'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
    setFile(null);
  };

  const handleSelect2 = () => {
    setIsBorde({
      borde1: false,
      borde2: true,
      borde3: false,
      borde4: false,
      borde5: false,
      borde6: false,
      borde7: false,
      borde8: false,
    });
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662306862/backgroundImage2_xljc6j.jpg'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
    setFile(null);
  };

  const handleSelect3 = () => {
    setIsBorde({
      borde1: false,
      borde2: false,
      borde3: true,
      borde4: false,
      borde5: false,
      borde6: false,
      borde7: false,
      borde8: false,
    });
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662306861/backgroundImage3_rubxga.jpg'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
    setFile(null);
  };

  const handleSelect4 = () => {
    setIsBorde({
      borde1: false,
      borde2: false,
      borde3: false,
      borde4: true,
      borde5: false,
      borde6: false,
      borde7: false,
      borde8: false,
    });
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662306862/backgroundImage4_oyevnd.jpg'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
    setFile(null);
  };

  const handleSelect5 = () => {
    setIsBorde({
      borde1: false,
      borde2: false,
      borde3: false,
      borde4: false,
      borde5: true,
      borde6: false,
      borde7: false,
      borde8: false,
    });
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662346484/fondo_azul_zqhlgf.png'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
    setFile(null);
  };

  const handleSelect6 = () => {
    setIsBorde({
      borde1: false,
      borde2: false,
      borde3: false,
      borde4: false,
      borde5: false,
      borde6: true,
      borde7: false,
      borde8: false,
    });
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662170583/fondo-trello_odps0n.png'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
    setFile(null);
  };

  const handleSelect7 = () => {
    setIsBorde({
      borde1: false,
      borde2: false,
      borde3: false,
      borde4: false,
      borde5: false,
      borde6: false,
      borde7: true,
      borde8: false,
    });
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662346484/fondo_verde_ohddpa.png'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
    setFile(null);
  };

  const handleSelect8 = () => {
    setIsBorde({
      borde1: false,
      borde2: false,
      borde3: false,
      borde4: false,
      borde5: false,
      borde6: false,
      borde7: false,
      borde8: true,
    });
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662346484/fondo_naranjaRojo_zskqhc.png'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
    setFile(null);
  };

  return (
    <div>
      <ul className='board__ul'>
        <li className='board__li'>
          <button
            aria-label='1'
            type='button'
            className={
              isBorde.borde1
                ? 'board__li__button button1--selected'
                : 'board__li__button button1'
            }
            onClick={handleSelect1}
          />
        </li>
        <li className='board__li'>
          <button
            aria-label='2'
            type='button'
            className={
              isBorde.borde2
                ? 'board__li__button button2--selected'
                : 'board__li__button button2'
            }
            onClick={handleSelect2}
          />
        </li>
        <li className='board__li'>
          <button
            aria-label='3'
            type='button'
            className={
              isBorde.borde3
                ? 'board__li__button button3--selected'
                : 'board__li__button button3'
            }
            onClick={handleSelect3}
          />
        </li>
        <li className='board__li'>
          <button
            aria-label='4'
            type='button'
            className={
              isBorde.borde4
                ? 'board__li__button button4--selected'
                : 'board__li__button button4'
            }
            onClick={handleSelect4}
          />
        </li>
      </ul>
      <ul className='board__ul'>
        <li className='board__li'>
          <button
            aria-label='5'
            type='button'
            className={
              isBorde.borde5
                ? 'board__li__button button5--selected'
                : 'board__li__button button5'
            }
            onClick={handleSelect5}
          />
        </li>
        <li className='board__li'>
          <button
            aria-label='6'
            type='button'
            className={
              isBorde.borde6
                ? 'board__li__button button6--selected'
                : 'board__li__button button6'
            }
            onClick={handleSelect6}
          />
        </li>
        <li className='board__li'>
          <button
            aria-label='7'
            type='button'
            className={
              isBorde.borde7
                ? 'board__li__button button7--selected'
                : 'board__li__button button7'
            }
            onClick={handleSelect7}
          />
        </li>
        <li className='board__li'>
          <button
            aria-label='8'
            type='button'
            className={
              isBorde.borde8
                ? 'board__li__button button8--selected'
                : 'board__li__button button8'
            }
            onClick={handleSelect8}
          />
        </li>
      </ul>
    </div>
  );
}

export default BackgroundBoard;

BackgroundBoard.propTypes = {
  setFile: PropTypes.func,
};

BackgroundBoard.defaultProps = {
  setFile: () => null,
};
