import React, {Component} from 'react';

const ToDo = ({toDoItem}) => {
    return (
        <div>
            <span>{toDoItem.item}</span>
            <span>{toDoItem.isCompleted}</span>
        </div>

    )
}

 const renderTodo =()=> {
    const todos = myToDos.map((todo, index) => (< ToDo toDoItem = {
        todo
    } />));
    return todos;
}

class ToDoForm extends Component{
    constructor(props){
        super(props);
        this.state={value:""};
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo(this.state.value)
        this.setState({value:""});

    }
    handleChange(e){
        this.setState({value:e.target.value});
    }
    render(){
        const userInput = this.state==null?"":this.state.value;
        return(<form onSubmit={this.handleSubmit}>
            <input type="text" value={userInput} onChange={this.handleChange}></input>
        </form>)
    }
}
class App  extends Component {
    constructor(props){
        super(props);
        this.state= {
            todos:[
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
        ]};
        this.addTodo=this.addTodo.bind(this);
    };

    addTodo(text){
        const newToDos = [...this.state.todos,{item:text,isCompleted:false}];
        this.setState({todos:newToDos});
    };
    render(){
        const todos = this.state==null?[]:this.state.todos;
        return (
            <div>
                {todos.map((todo, index) => (< ToDo toDoItem = {
        todo
    } />))}
    <ToDoForm addTodo = {this.addTodo} >

    </ToDoForm>
            </div>
        )
    }
   
}
export default App;
