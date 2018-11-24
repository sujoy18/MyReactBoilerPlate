import React, {useState} from 'react';
const ToDo = ({toDoItem}) => {
    return (
        <div>
            <span>{toDoItem.item}</span>
            <span>{toDoItem.isCompleted}</span>
        </div>

    )
}

function ToDoForm(addTodo){
    cosnt [value,setItem]=useState("");

    const hadnleSubmit=e=>{
        e.preventDefault();
        addTodo(value)
        setItem("");
    };
    const handleChange=e=>{
        useState(e.target.value);
    }
    return (<form onSubmit={hadnleSubmit} >
        <input type="text" onChange={handleChange}></input>
    </form>);
}


function App() {
    const [myToDos,setTodo] =useState( [
        {
            item: "Check mail",
            isCompleted: true
        }, {
            item: "Browse facebook",
            isCompleted: false
        }, {
            item: "Watch out boss",
            isCompleted: false
        }, {
            item: "Learn about react",
            isCompleted: false
        }
    ]);
    const addTodo =item=>{
        const newTodos= [...myToDos,{item,isCompleted:false}];
        useState(newTodos);
    }
    const renderTodo = myToDos.map((todo, index) => (< ToDo toDoItem = {
        todo
    } />));

    return (
        <div>
            {renderTodo}
            <ToDoForm addTodo={addTodo}></ToDoForm>
        </div>
    )
}
export default App;
