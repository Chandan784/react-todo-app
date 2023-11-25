import { useState } from "react";
import React from "react";
import Item from "./component/item";
import Addtodo from "./component/Addtodo";
import Todoitem from "./component/Todoitem";
import WelcomeMsg from "./component/WelcomeMsg";

function App() {
  let [todoData, setTodoData] = useState([]);

  let handelAddTodoBtn = (todoname, tododate) => {
    console.log(todoname,tododate);
    let newTodoData = [...todoData,{
      todoname: todoname,
      tododate: tododate,
    }];
    setTodoData(newTodoData);
  };

  let handelDeleteTotoBtn =(todoname)=>{
console.log(todoname);

let newTodoItem = todoData.filter((element)=>{
  return element.todoname != todoname
})

setTodoData(newTodoItem)
  }



  return (
    <>
      <center>
        <div style={{border:"4px solid green",padding: "10px",width:"fit-content" }}>
        <h1  style={{marginBottom:"30px"}}>Todo App</h1>
        <Addtodo onAddTodoBtn={handelAddTodoBtn} />
        {todoData.length==0 && <WelcomeMsg></WelcomeMsg>}
        {todoData.map((data) => (
          <Todoitem todoData={data} deleteTodo={handelDeleteTotoBtn} />
        ))}
         </div>
      </center>
    </>
  );
}
export default App;
