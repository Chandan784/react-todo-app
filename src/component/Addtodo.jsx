import { useState } from "react";
import styles from "./Addtodo.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function Addtodo({onAddTodoBtn}){


    let [todoName,setTodoName]=useState("")
    let [dateName,setDateName]=useState("")

    let handelNameChange=(event)=>{
       
       setTodoName(event.target.value)
       console.log(event.target.value);
    }
    let handelDateChange=(event)=>{
        setDateName(event.target.value)
        console.log(event.target.value);
     }

     let handelAddTodoBtn = ()=>{
                 onAddTodoBtn(todoName,dateName)
                 setDateName("")
                 setTodoName("")
     }
 
    return (
        <>
        <div className={styles.addTodo} >
        <input 
        type="text" 
        placeholder="Enter todo..."
        value={todoName}
        onChange={handelNameChange}
        />
       <input type="date"
       value={dateName}
       onChange={handelDateChange}
       />

        <button type="button" className="btn btn-success" onClick={handelAddTodoBtn}>ADD</button>
        </div>
        


        </>
    )
}

export default Addtodo