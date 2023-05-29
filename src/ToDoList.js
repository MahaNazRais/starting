import React from "react";
import ToDo from './ToDo';

 
function ToDoList ({ToDoList,handleToggle,handleFilter}) {
return (
    <div id = 'container'>
        {ToDoList.map(todo => {
            return(
                <ToDo key={todo.id} todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
            )
})}
<button style={{margin: '20px'}} onClick={handleFilter}>Clear complete</button>
 </div>

)
}
export default ToDoList;