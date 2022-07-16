//import './createBoard.css'
import BackgroundBoard from '../../components/backgroundBoard';
import './createBoard.scss'

function CreateBoard () {
    return (
        
        <main className="board">
            <header className="board__header">
                <div className="board__header__div">Create Board</div>
                <button className="board__header__button">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </header>

            <section className="board__section">                
                <div className="board__section__div">
                    <img className="board__section__image" src="..\img\image_boardPreview.jpg" alt="image_board-preview"/>                                        
                </div>

                <div className="board__section__background">
                    <div>
                        <label className="board__section__background__label">Background</label>
                    </div>
                    <div>
                        <BackgroundBoard />                        
                    </div>
                </div>

                <form className='board__section__form'>
                    <div>
                        <label className="board__section__label">                            
                            Board Title <span className="board__section__span">*</span>
                        </label> 
                        <input className="board__section__input" type="text" required/>
                        <span className="board__section__span--2">👋 Board title is required</span>                        
                        <button className="board__section__button">Create</button> 
                    </div>
                </form>
                
                <div className="board__section__footer">
                    <div className="board__section__text">By using images from Unsplash, you agree to their
                        <a className="board__section__a" href="https://unsplash.com/license" target='_blank' rel='noreferrer'>license</a>
                        and
                        <a className="board__section__a" href="https://unsplash.com/terms" target='_blank' rel='noreferrer'>Terms of Service</a>
                    </div>
                </div>
            </section>
        </main>
        
    )
}

export default CreateBoard;