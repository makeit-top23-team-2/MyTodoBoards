import React from "react"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import ToDo from "../../components/TodoCards"
import { useState } from "react"
const MainBoard= () => {

// Este useState es para agregar cada columna de las tarjetas. Usa props para colocar el nombre 
const [columns, setColums]= useState([])

const handleSubmit = (event)=>{
	   if(event.code === "Enter" && event.target.value !== "" ){
		  if(event.target.value.length < 20){
			  const newColumn = {
          name: event.target.value,
          id: Date.now(),
          tasks: []
			};
		    setColums([...columns, newColumn]);
        event.target.value = "";
		  }else{
		    alert("The column name is too long")
		  }
	}
}

  return(
    <div>
      <NavBar/>
        <div className="mainBoard">
          <header className="headerBoard">
          <input className="nameBoard"  type="text" placeholder=" Tittle"/>
          <a  href="/"> <img className="iconsBoard" src="..\img\star-regular.png" alt=""/></a>
          <a  href="/">Workspace's name</a>
          <a  href="/"><img className="iconsBoard" src="..\img\users-solid.png" alt="" /> Workspace visible</a>
          <a  href="/"><img className="iconsBoard" src="..\img\share-square-solid.png" alt="" />  Share</a>
          <a  href="/"><img className="iconsBoard" src="..\img\filter-solid.png" alt="" />  Filter</a>
          <a  href="/"><img className="iconsBoard" src="..\img\ellipsis-h-solid.png" alt="" />   Show menu</a>
          </header>
        </div>

        <div className="workSpace">
          
          <div>
            <div>
              <input type="text" className="textContent buttonCard " onKeyDown={handleSubmit} placeholder="+ Add a list"/>
                <div>
                    <ul className="list__Columns__Board">
                      {columns.map((column)=>{
                        return(
                          <li key={column.id} className="colums">
                            <ToDo column= {column}/>
                          </li>
                        )
                      })}
                    </ul>

                </div>
                  
            </div>
          </div>
        </div>

      <Footer/>
    </div>
  )
}

export default MainBoard;