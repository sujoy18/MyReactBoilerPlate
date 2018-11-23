import React from 'react';
const ToDo = ({toDoItem}) => {
    return (
        <div>
            <span>{toDoItem.item}</span>
            <span>{toDoItem.isCompleted}</span>
        </div>

    )
}

function App() {
    const myToDos = [
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
    ];
    const renderTodo = myToDos.map((todo, index) => (< ToDo toDoItem = {
        todo
    } />));

    return (
        <div>
            {renderTodo}
        </div>
    )
}
export default App;
