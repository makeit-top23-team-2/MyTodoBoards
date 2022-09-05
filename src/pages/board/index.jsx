import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactSortable } from 'react-sortablejs';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ToDo from '../../components/TodoCards';
import { getBoardById, updateBoard } from '../../services/boards';
import { setSingleBoard } from '../../store/singleBoardSlice';
import { setColumns } from '../../store/columnsSlice';
import { createColumnByBoardId } from '../../services/columns';
import ChangeColorBoard from '../../components/modalChangeColorBoard';

function MainBoard() {
  const [titleBoard, setTitleBoard] = useState('');
  const [columns, setColumns1] = useState([]);
  const dispatch = useDispatch();
  const singleBoard = useSelector(state => state.singleBoard.value);
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpened(true);
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const board = await getBoardById(id);
      setTitleBoard(board.title);
      const boardColumns = board.columns;
      dispatch(setSingleBoard(board));
      dispatch(setColumns(boardColumns));
      setColumns1(boardColumns.map(column => ({ ...column, id: column._id })));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const boardUpdate = async () => {
      await updateBoard(id, { columns });
      const columnsOrdered = columns.map(column => ({
        ...column,
        chosen: false,
      }));
      dispatch(setColumns(columnsOrdered));
      dispatch(setSingleBoard(singleBoard));
    };
    if (columns.length) {
      boardUpdate();
    }
  }, [columns]);

  const handleSubmit = async event => {
    if (
      (event.code === 'NumpadEnter' || event.code === 'Enter') &&
      event.target.value !== ''
    ) {
      if (event.target.value.length < 20) {
        const columnTitle = event.target.value;
        const newColumn = await createColumnByBoardId(id, {
          title: columnTitle,
        });
        newColumn.id = newColumn._id;
        setColumns1([...columns, newColumn]);
        event.target.value = '';
      } else {
        event.preventDefault();
        Swal.fire({
          title: 'The column title is too long!',
          text: 'Introduce a title less than 19 characters long.',
          icon: 'warning',
          confirmButtonText: 'Got it!',
        });
      }
    }
  };

  const handleChangeTitleBoard = async e => {
    await updateBoard(id, { title: e.target.value });
  };

  return (
    <div>
      <NavBar />
      <div
        className='container__workspace'
        style={{
          backgroundImage: `url("${singleBoard.color}")`,
        }}
      >
        <div className='mainBoard'>
          <header className='headerBoard'>
            <input
              className='nameBoard'
              type='text'
              placeholder=' Write a title for this board'
              defaultValue={titleBoard}
              onBlur={handleChangeTitleBoard}
            />
            {/*           <a href='/'>
            {' '}
            <img className='iconsBoard' src='..\img\star-regular.png' alt='' />
          </a> */}
            <div className='button__options'>
              <button type='button' {...buttonProps}>
                Options
                <img
                  className='iconsBoard'
                  src='..\img\bars-solid.png'
                  alt=''
                />{' '}
              </button>
            </div>
            <div className='dropDown'>
              <div className={isOpen ? 'visible' : ''} role='menu'>
                <button
                  {...itemProps[0]}
                  href='https://example.com'
                  type='button'
                  onClick={handleOpenModal}
                >
                  Change background
                </button>
                <button
                  type='button'
                  {...itemProps[1]}
                  href='https://example.com'
                >
                  Share
                </button>
              </div>
            </div>
          </header>
        </div>

        <div className='workSpace'>
          <div>
            <div>
              <input
                type='text'
                className='textContent buttonCard '
                onKeyDown={handleSubmit}
                placeholder='+ Add a list'
              />
              <div>
                <ReactSortable
                  list={columns}
                  setList={setColumns1}
                  group='group'
                  animation={150}
                  className='list__Columns__Board'
                  delay={20}
                  chosenClass='sortable-chosen'
                  dragClass='sortable-drag'
                  ghostClass='sortable-ghost'
                  tag='ul'
                  handle='.columns__handler'
                >
                  {columns?.map(column => (
                    <li key={column.id} className='columns'>
                      <ToDo column={column} />
                    </li>
                  ))}
                </ReactSortable>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChangeColorBoard
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />
      <Footer />
    </div>
  );
}

export default MainBoard;
