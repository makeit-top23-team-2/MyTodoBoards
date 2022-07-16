import React from "react"
import  './mainboard.scss';

const MainBoard= () => {
  return(
    <div>
        <header className="headerBoard">
                <input className="nameBoard"  type="text"/>
                <a  href="/"> <img className="iconsBoard" src="..\img\star-regular.png" alt=""/></a>
                <a  href="/">Espacio de trabajo de Trello</a>   
                <a  href="/"><img className="iconsBoard" src="..\img\users-solid.png" alt="" /> Workspace visible</a>
                <a  href="/"><img className="iconsBoard" src="..\img\share-square-solid.png" alt="" />  Share</a>
                <a  href="/"><img className="iconsBoard" src="..\img\filter-solid.png" alt="" />  Filter</a>
                <a  href="/"><img className="iconsBoard" src="..\img\ellipsis-h-solid.png" alt="" />   Show menu</a>
        </header>

        </div>
)   

}

export default MainBoard;