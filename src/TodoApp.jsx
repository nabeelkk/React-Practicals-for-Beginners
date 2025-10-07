import React, { useState } from 'react'
import './TodoApp.css'

const TodoApp = () => {

    const [todos , setTodo] = useState([])
    const [newTask, setNewTask] = useState('')
    const [addPending, setAddPending] = useState([])
    const [addComplete, setAddComplete] = useState([])
    const [editTodos, setEditTodo] = useState('')

    const handleInputVal = (e)=>{
        setNewTask(e.target.value)
    }
    const addTodo = ()=>{
        setTodo(t=>[...t,newTask])
        setNewTask('')

    }
    const deleteTodo = (index)=>{
        setTodo(todos.filter((_,i)=> i !== index))
    }

    const pendingTodos = (index)=>{
        setTodo(todos.filter((_,i)=> i !== index))
        setAddPending(p=>[...p,todos[index]])
    }

    const addToComplete = (index)=>{
        setTodo(todos.filter((_,i)=> i !== index))
        setAddComplete(p=>[...p,todos[index]])
    }
    const editTodo = ()=>{
        
    }


  return (
    <div className='main-cont'>
        <div>
            <h1>Todo App</h1>
            
             {/* Input and Button  */}
            <div className="todo-input">
                <input type="text" value={newTask} onChange={handleInputVal} placeholder="Enter your todo..."/>
                <button onClick={addTodo}>Add</button>
            </div>
        
            <div className="column-Todo">
                <h2>Added Todos</h2>
                {todos.map((todo,index)=>
                    <div key={index} className="todo-item-m">
                        <p style={{width:"30%"}}>{todo}</p> 
                        <div>
                            {/* Edit  */}
                            <button title="Edit" onClick={editTodo}>
                            <i className="fa-solid fa-pen-to-square"></i>
                            </button>

                            {/* Delete  */}
                            <button title="Delete" onClick={()=>deleteTodo(index)}>
                            <i className="fa-solid fa-trash"></i>
                            </button>

                            {/* Complete  */}
                            <button title="Complete" onClick={()=>addToComplete(index)}>
                            <i className="fa-solid fa-check-circle"></i>
                            </button>

                            {/* Pending */}
                            <button title="Pending" onClick={()=>pendingTodos(index)}>
                            <i className="fa-solid fa-hourglass-half"></i>
                            </button>

                        </div>
                    </div>
                )}

            </div>
        </div>
        <div>
             {/* Three Columns  */}
            {/* <div className='columns-cont'> */}
                 <div className="columns-p">
                    <div className="column">
                        <h2>Pending Todos</h2>
                        {addPending.map((item,index)=><div key={index} className="todo-item">{item}</div>)}
                    </div>
                </div>
                <div className="columns">
                    <div className="columncomplete">
                        <h2>Completed Todos</h2>
                        {addComplete.map((item,index)=><div key={index} className="todo-item">{item}</div>)}
                    </div>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default TodoApp