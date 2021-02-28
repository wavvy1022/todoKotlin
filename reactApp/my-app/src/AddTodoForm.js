import React, {useState} from "react"
import "./AddTodoForm.css"
import customAxios from "./customAxios"


// 외부에서 바인딩한 모델을 속성으로 주입하면 모델의 변경에 따라 속성 값도 변경된다.
// ex ) isShow는 TodoList에서 binding된 showAddForm을 속성으로 주입받은 값인데, TodoList에서 showAddForm을 변경하면 isShow도 변경된다.
//      이 모듈에서는 TodoList에서 추가/닫기 버튼을 누를때 showAddForm을 변경하고, showAddForm이 변경됨에따라 AddTodoForm이 보인다.
function AddTodoForm( { isShow , onAddTodo } ){
    
    const [ title, setTitle ] = useState("")

    function addTodo() {
        customAxios( "POST" , "/todo" , ( data ) => {
            // Init title after add success
            setTitle("")
            onAddTodo()
        }, { title : title } );
    }

    function updateTitle( evt ) {
        setTitle( evt.target.value ) 
    }
    
    return (
        <div className={`add_todo_form ${ isShow ? "show" : "" }`} >
            <div className="row">
                <h3> Add Todo </h3>
            </div>
            <div className="row">
                <input type="text" onChange={updateTitle} value={title} placeholder="Title" />
            </div>
            <div className="row right">
                <button onClick={addTodo}>ADD</button>
            </div>
        </div>
    )
}


export default AddTodoForm