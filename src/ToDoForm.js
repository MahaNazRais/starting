import React, {usestate } from 'React';

const ToDoForm = ({ task }) => {
    const [ userinput, setUserInput ] = usestate('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)

    }
    const handleSubmit = (e) => {
        setUserInput(e.currentTarget.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");

    }
    return
    ] (
        <form onSubmit={handleSubmit}>
            <input value={userinput}
            
        
        
        
        
        </form>
    )
}