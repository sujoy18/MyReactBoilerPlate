import {useState} from 'react';

const ToDo = ({toDoItem}) => {
    return (
        <div>
            <span>{toDoItem.item}</span>
            <span>{toDoItem.isCompleted}</span>
        </div>

    )
}

function ToDoForm({addItem}) {
    const [value,
        setItem] = useState("");

    const hadnleSubmit = e => {
        e.preventDefault();
        addItem(value);
        setItem("");
    };
    const handleChange = e => {
        setItem(e.target.value);
    }
    return (
        <form onSubmit={hadnleSubmit}>
            <input type="text" value={value} onChange={handleChange}></input>
        </form>
    );
}

function App() {
    const [myToDos,
        setTodo] = useState([
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

    const addTodo = item => {
        const newTodos = [
            ...myToDos, {
                item,
                isCompleted: false
            }
        ];
        setTodo(newTodos);
    }
    const renderTodo = myToDos.map((todo, index) => (< ToDo toDoItem = {
        todo
    } />));

    return (
        <div>
            {renderTodo}
            <ToDoForm addItem={addTodo}></ToDoForm>
        </div>
    )
}
export default App;
