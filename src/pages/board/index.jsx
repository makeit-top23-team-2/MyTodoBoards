import React from "react"

const MainBoard= () => {
  return(
        <div>

          <div className="mainBoard">
                        <header className="headerBoard">
                                <input className="nameBoard"  type="text" placeholder=" Tittle"/>
                                <a  href="/"> <img className="iconsBoard" src="..\img\star-regular.png" alt=""/></a>
                                <a  href="/">Espacio de trabajo de Trello</a>
                                <a  href="/"><img className="iconsBoard" src="..\img\users-solid.png" alt="" /> Workspace visible</a>
                                <a  href="/"><img className="iconsBoard" src="..\img\share-square-solid.png" alt="" />  Share</a>
                                <a  href="/"><img className="iconsBoard" src="..\img\filter-solid.png" alt="" />  Filter</a>
                                <a  href="/"><img className="iconsBoard" src="..\img\ellipsis-h-solid.png" alt="" />   Show menu</a>
                        </header>
                </div>

                <div className="workSpace">
                        <div class="list">
                                <input type="text" class="textContent buttonCard " placeholder="+ Add a list"/>
                        </div>
                </div>


        </div>
)   

}

export default MainBoard;