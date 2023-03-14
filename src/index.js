import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToDo from './Todo';

const style = {
    backgroundColor:'pink',
    margin:20,
    borderRadius:10
}



function NavToDo(){
    const [tasklistState, setTasklistState] = React.useState(0);
    const [activeAll, setActiveAll] = React.useState(true);
    const [activeAct, setActiveAct] = React.useState(false);
    const [activeComp, setActiveComp] = React.useState(false);
    const [list, setList] = React.useState([]);
    const [input, setInput] = React.useState("");
    const inputReference = useRef(null);
    
    React.useEffect(() => {
        // set focus to input field
        inputReference.current.focus();
    }, []);
    
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
            <div style={style}>
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
            ref = {inputReference}
            value = {input}
            onChange = {(e) => setInput(e.target.value)}
        />    
        <button class="add" onClick={() => addTodo(input)}>Add</button>
           

    </div>
    </div>
     <ToDo 
        tasksState={tasklistState}
        deleteTodo={deleteTodo} 
        setList={setList}
        list={list.filter((todo) => 
            todo.todoState === tasklistState || tasklistState === 0)}/>

        </div>
    )
}



  // ========================================
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<NavToDo />);
  