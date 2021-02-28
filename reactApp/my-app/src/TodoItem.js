import React, {useState} from "react"
import "./TodoItem.css"
import customAxios from "./customAxios"

// Property로 의존성을 주입받을 때엔, {}로 감싸면 prop name으로 직접 접근할 수 있고
// {} 로 감싸지 않으면 props가 한개의 Object로 전달된다.
function TodoItem( { todo , onDeleted } ){
    const   [ mode, setMode ]= useState("plain"),
            [ index ] = useState(todo.index),
            [ title, setTitle ] = useState(todo.title),
            [ completeStat, setCompleteStat ] = useState(todo.completeStat),
            [ createAt ] = useState(todo.createAt),
            [ updateAt, setUpdateAt ] = useState(todo.updateAt)
    
    const   [ editTitle , setEditTitle ] = useState(title)
    const   deleteCallback = onDeleted
    
    const update = ( data , callback ) => {
        
        let param = {
            completeStat : completeStat,
            title : title
        }
        Object.assign( param, data )

        customAxios( "PUT", `/todo/index/${index}`, callback, param )
    }


    const edit = () => {
            setMode("edit")
        },
        del = () => {
            customAxios( "DELETE" , `/todo/index/${index}`, ( data ) => {
                deleteCallback( index )
             } )
        },
        changeState = ( evt ) => {
            let changed  = evt.target.checked
            update( { completeStat    : changed }, (data) => setCompleteStat( changed ) )
        },
        changeTitle = ( ) => {
            let changed = editTitle
            update( { title    : changed }, (data) =>{
                    setTitle( changed )  
                    setMode("plain")
                }  
            );
        },
        updateEditTitle = ( evt ) =>{
            setEditTitle(  evt.target.value )
        }
    
    return (
        <li className = { `todo-list-item ${mode} ${ completeStat ? "completed" : "" }`  } >
            <span   className = "plain-title">{title}</span>
            <input  className = "edit-title"        onChange={updateEditTitle} type="text" value={editTitle}></input>
            <button className = "edit-btn"          onClick={edit} >수정</button>
            <button className = "update-btn"        onClick={changeTitle} >완료</button>
            <button className = "delete-btn"        onClick={del} >삭제</button>
            <input  className = "complete-check"    onChange={changeState} type="checkbox" checked={completeStat}/>
        </li>
    )
}


export default TodoItem