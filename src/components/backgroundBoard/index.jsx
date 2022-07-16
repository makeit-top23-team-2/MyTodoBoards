import './backgroundBoard.scss'

function BackgroundBoard() {
  return (
    <>
        <ul className="board__ul">
            <li className="board__li">
                <button className="board__li__button button1"></button>
            </li>
            <li className="board__li">
                <button className="board__li__button button2"></button>
            </li>
            <li className="board__li">
                <button className="board__li__button button3"></button>
            </li>
            <li className="board__li">
                <button className="board__li__button button4"></button>
            </li>                                  
        </ul>
        <ul className="board__ul">
            <li className="board__li">
                <button className="board__li__button button5"></button>
            </li>
            <li className="board__li">
                <button className="board__li__button button6"></button>
            </li>
            <li className="board__li">
                <button className="board__li__button button7"></button>
            </li>
            <li className="board__li">
                <button className="board__li__button button8"></button>
            </li>                                  
        </ul>
    </>
  )
}

export default BackgroundBoard;
