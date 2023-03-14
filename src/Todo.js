import React from 'react';
import './index.css';

const Style = {
    fontSize: 25,
    backgroundColor:'#f4f8fc',
    marginRight: 35,
    borderRadius: 15,
    padding:5,
    paddingLeft:10,
    width:'100%'
}

const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBlock:15
}

const olStyle = {
    listStyleType:'none',
    backgroundColor: "lightblue",
    marginLeft:20,
    marginRight:20,
    marginTop:0,
    borderRadius:10,
    paddingTop:30,
    paddingBottom:30,

}

function ToDo({tasksState, list,setList, deleteTodo}){
    const toDoCompleted = (id) => {
        const objIndex = list.findIndex((obj => obj.id === id));
        let tasklist = list;
        tasklist[objIndex].todoState = 2;
        setList(tasklist);
    }
    return(
        <>
        <br></br>
        <br></br>
        <ul style={olStyle}>
            {list
                .filter((todo) => 
                    todo.todoState === tasksState || tasksState === 0)
                .map((todo) => (<div style={divStyle}>
                    <li key={todo.id} style={Style}>{todo.todo}</li>
                        {  
                            todo.todoState === 1 ?
                            <>
                                <button class="add" id="btn" onClick={() => toDoCompleted(todo.id)}>Completed?</button>
                                <button class="add" id="btn" onClick={() => deleteTodo(todo.id)}>&times;</button>
                            </>:
                            null
                        }
                                <br></br>

                    </div>
                ))}
        </ul>
    </>
    )

}

export default ToDo;