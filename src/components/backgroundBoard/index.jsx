import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setColorBoard } from '../../store/colorBoardSlice';
import { setSelectImgBool } from '../../store/selectImgBoolSlice';

function BackgroundBoard() {
  const [imgSelected, setImgSelected] = useState(
    'https://res.cloudinary.com/davpin/image/upload/v1662170583/fondo-trello_odps0n.png'
  );
  const [imgTrue, setImgTrue] = useState(false);
  const [isBorde, setIsBorde] = useState({})


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setColorBoard(imgSelected));
    dispatch(setSelectImgBool(imgTrue));
  }, [imgSelected, imgTrue]);

  const handleSelect1 = () => {
    setIsBorde({borde1:true, borde2:false, borde3:false, borde4:false, borde5:false, borde6:false, borde7:false, borde8:false })
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662306862/backgroundImage1_rjljzl.jpg'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
  };

  const handleSelect2 = () => {
    setIsBorde({borde1:false, borde2:true, borde3:false, borde4:false, borde5:false, borde6:false, borde7:false, borde8:false })
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662306862/backgroundImage2_xljc6j.jpg'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
  };

  const handleSelect3 = () => {
    setIsBorde({borde1:false, borde2:false, borde3:true, borde4:false, borde5:false, borde6:false, borde7:false, borde8:false })
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662306861/backgroundImage3_rubxga.jpg'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
  };

  const handleSelect4 = () => {
    setIsBorde({borde1:false, borde2:false, borde3:false, borde4:true, borde5:false, borde6:false, borde7:false, borde8:false })
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662306862/backgroundImage4_oyevnd.jpg'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
  };

  const handleSelect5 = () => {
    setIsBorde({borde1:false, borde2:false, borde3:false, borde4:false, borde5:true, borde6:false, borde7:false, borde8:false })
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662346484/fondo_azul_zqhlgf.png'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
  };

  const handleSelect6 = () => {
    setIsBorde({borde1:false, borde2:false, borde3:false, borde4:false, borde5:false, borde6:true, borde7:false, borde8:false })
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662170583/fondo-trello_odps0n.png'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
  };

  const handleSelect7 = () => {
    setIsBorde({borde1:false, borde2:false, borde3:false, borde4:false, borde5:false, borde6:false, borde7:true, borde8:false })
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662346484/fondo_verde_ohddpa.png'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
  };

  const handleSelect8 = () => {
    setIsBorde({borde1:false, borde2:false, borde3:false, borde4:false, borde5:false, borde6:false, borde7:false, borde8:true })
    setImgSelected(
      'https://res.cloudinary.com/davpin/image/upload/v1662346484/fondo_naranjaRojo_zskqhc.png'
    );
    dispatch(setColorBoard(imgSelected));
    setImgTrue(true);
    dispatch(setSelectImgBool(imgTrue));
  };

  return (
    <div>
      <ul className='board__ul'>
        <li className='board__li'>
          <button
            label
            type='button'
            className={ isBorde.borde1 ? 'board__li__button button1--selected' : 'board__li__button button1'}
            onClick={handleSelect1}
          />
        </li>
        <li className='board__li'>
          <button
            label
            type='button'
            className={ isBorde.borde2 ? 'board__li__button button2--selected' : 'board__li__button button2'}
            onClick={handleSelect2}
          />
        </li>
        <li className='board__li'>
          <button
            label
            type='button'
            className={ isBorde.borde3 ? 'board__li__button button3--selected' : 'board__li__button button3'}
            onClick={handleSelect3}
          />
        </li>
        <li className='board__li'>
          <button
            label
            type='button'
            className={ isBorde.borde4 ? 'board__li__button button4--selected' : 'board__li__button button4'}
            onClick={handleSelect4}
          />
        </li>
      </ul>
      <ul className='board__ul'>
        <li className='board__li'>
          <button
            label
            type='button'
            className={ isBorde.borde5 ? 'board__li__button button5--selected' : 'board__li__button button5'}
            onClick={handleSelect5}
          />
        </li>
        <li className='board__li'>
          <button
            label
            type='button'
            className={ isBorde.borde6 ? 'board__li__button button6--selected' : 'board__li__button button6'}
            onClick={handleSelect6}
          />
        </li>
        <li className='board__li'>
          <button
            label
            type='button'
            className={ isBorde.borde7 ? 'board__li__button button7--selected' : 'board__li__button button7'}
            onClick={handleSelect7}
          />
        </li>
        <li className='board__li'>
          <button
            label
            type='button'
            className={ isBorde.borde8 ? 'board__li__button button8--selected' : 'board__li__button button8'}
            onClick={handleSelect8}
          />
        </li>
      </ul>
    </div>
  );
}

export default BackgroundBoard;
