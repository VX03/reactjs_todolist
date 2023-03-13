import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function NavToDo(){
    const [tasklistState, setTasklistState] = React.useState(0);
    const [activeAll, setActiveAll] = React.useState(true);
    const [activeAct, setActiveAct] = React.useState(false);
    const [activeComp, setActiveComp] = React.useState(false);
    const [list, setList] = React.useState([]);
    const [input, setInput] = React.useState("");
    
    const addTodo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo,
            todoState: 1
        }

        // add todo to the list
        setList([...list, newTodo]);

        // clear input box
        setInput("");
    };

    const deleteTodo = (id) => {
        // Filter out todo with the id
        const newList = list.filter((todo) => todo.id !== id);

        setList(newList);
    }

    

    const btnAllClick = () => {
        setActiveAll(true);
        setActiveAct(false);
        setActiveComp(false);
        setTasklistState(0);
        
        console.log(tasklistState)
    }

    const btnActClick = () => {
        setActiveAll(false);
        setActiveAct(true);
        setActiveComp(false);
        setTasklistState(1);
        console.log(tasklistState)
    }

    const btnCompClick = () => {
        setActiveAll(false);
        setActiveAct(false);
        setActiveComp(true);
        setTasklistState(2);
        
        console.log(tasklistState)
    }
    
    return(
        <div>
            <h1>Todo List</h1>
            <div id='buttonContainer'>
                <button 
                    id='btnNav'
                    onClick={btnAllClick}
                    style={{ backgroundColor: activeAll ? "red" : "white" }}
                    >All</button>
                <button
                    id='btnNav'
                    onClick={btnActClick}
                    style={{ backgroundColor: activeAct ? "red" : "white" }}
                    >Active</button>
                <button
                    id='btnNav'
                    onClick={btnCompClick}
                    style={{ backgroundColor: activeComp ? "red" : "white" }}
                    >Completed</button>
            </div>
            
            <div id='container'>
        <input 
            type = "text"
            value = {input}
            onChange = {(e) => setInput(e.target.value)}
        />    
        <button onClick={() => addTodo(input)}>Add</button>
            <ToDo 
                tasksState={tasklistState}
                deleteTodo={deleteTodo} 
                setList={setList}
                list={list.filter((todo) => 
                    todo.todoState === tasklistState || tasklistState === 0)}/>

    </div>
        </div>
    )
}
function ToDo({tasksState, list,setList, deleteTodo}){
    const toDoCompleted = (id) => {
        const objIndex = list.findIndex((obj => obj.id === id));
        let tasklist = list;
        tasklist[objIndex].todoState = 2;
        setList(tasklist);
    }
    return(
        <div>
        <ul>
            {list
                    .filter((todo) => 
                        todo.todoState === tasksState || tasksState === 0)
                    .map((todo) => (
                <li key={todo.id}>
                    {  
                        todo.todoState === 1 ?
                        <div>
                            {todo.todo}
                            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
                            <button onClick={() => toDoCompleted(todo.id)}>Completed?</button>
                        </div>:
                        <div>{todo.todo}</div>
                    }
                </li>
            ))}
        </ul>
    </div>
    )

}

  // ========================================
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<NavToDo />);
  