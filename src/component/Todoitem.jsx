import React from "react"
import styles from "./Todoitem.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function Todoitem(props){




return (
 <>
 <div  className={styles.todoItem}>
 <p>{props.todoData.todoname}</p>
 <p>{props.todoData.tododate}</p>
 <button type="button" class="btn btn-danger" onClick={()=>props.deleteTodo(props.todoData.todoname)}>Delete</button>
 </div>


 </>
)

}

export default Todoitem