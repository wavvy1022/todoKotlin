import React, {useState, useEffect} from "react"

import customAxios from "./customAxios"
import Hello from "./Hello"


function TodoList(){

    const [ todoList, setTodoList ] = useState([])
    const [ comment, setComment ]   = useState('')

    function callback( data ){
        setTodoList(data)
        setComment("TodoList 입니다")
    }

    function getTodoList(){
        customAxios( "get", '/todoList', callback );
    }

    useEffect( 
       () => getTodoList() , []
      )


    return (
    <div>
        <Hello/>
        {comment}
        <ol>
            {todoList.map( ( todo ) => <li className = "">{todo.title}</li>)}
        </ol> 

        <button id="refresh" onClick={getTodoList}> 새로고침 </button>
    </div>
    )
}


export default TodoList;