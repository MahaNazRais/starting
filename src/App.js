import React, { useState } from 'react';
import data from "./data.json";
import Header from "./Header";
import ToDoList from './ToDoList';
import ToDo from './ToDo';


function App() {

  //state
  const [ toDoList, setToDoList ] = useState(data);
  console.table(toDoList)
 
//function
const handleToggle = (id) => {
  let mapped = toDoList.map(task => { 
    return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
  });
  setToDoList(mapped);
}
//function 1
const handleFilter = () => {
  let filtered = toDoList.filter(task => {
    return !task.complete;

  });
  setToDoList(filtered);
}
const addTask = (userinput)=>{
  let copy = [...toDoList];
  copy=[...copy, {id: toDoList.length + 1, task: userinput, complete:false}];
  setToDoList(copy);
}
  return (
    <div className="App">
      <Header text="maha"/>
      
      <ToDoList ToDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      </div>
     
  
  );
}

export default App;
