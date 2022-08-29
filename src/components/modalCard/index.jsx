import React from 'react'

function ModalCard() {
  return (    
    <div className='modal'>
      <main className='modal__card'>
        <header className='modal__header'>
          <button
            type='button'
            className='modal__button' 
          >
            <i className='fa-solid fa-xmark' />
          </button>   
          <textarea className='modal__textarea' placeholder='title'/>  
          <p className='modal__p'>in list ...</p>   
        </header> 

        <article className='modal__article'>
          <div>
            <h3 className='modal__h3'>Description</h3>
          </div>
          <div>
            <textarea placeholder='Add a more detailed description...' className='modal__text'/>
            <div>
              <input type='submit' value='Save'className='modal__save'/>
              <input type='submit' value='Cancel' className='modal__cancel'/>
            </div>
          </div>
        </article>

        <aside className='modal__aside'>
          <h3 className='modal__h3'>Add to card</h3>
          <div className='modal__aside__div'>
            <button type='button' className='modal__aside__button'>
              <span className="modal__aside__span">Members</span>
            </button>
            <button type='button' className='modal__aside__button'>
              <span className="modal__aside__span">Checklist</span>
            </button>
          </div>
        </aside>
      </main>    
    </div>
  )
}

export default ModalCard;