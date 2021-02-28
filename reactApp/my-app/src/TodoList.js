import React, {useState, useEffect} from "react"

import customAxios from "./customAxios"
import TodoItem from "./TodoItem"
import AddTodoForm from "./AddTodoForm"



function TodoList(){

    const [ todoList, setTodoList ] = useState([])
    const [ comment, setComment ]   = useState('')
    const [ showAddForm , setShowAddForm ] = useState(false)

    function getTodoList(){
        setComment(" TodoList 불러오는 중... ")
        customAxios( "get", '/todoList', ( data ) => {
            setTodoList(data)
            setComment("TodoList 입니다")
        } );
    }

    function onTodoDeleted( index ) {
        
        let newArr = [];
        let findIdx = -1
        console.log( todoList )
        todoList.forEach( ( todo , idx ) => {
            if( todo.index == index ){
                findIdx = idx 
            }else{
                newArr.push(todo)
            }
        })
        
        // 이건 안되고
        // todoList.splice( findIdx, 1 );
        // setTodoList( todoList )

        // 아래 두가지는 된다  
        // setTodoList( newArr )
        setTodoList( todoList.filter( todo => todo.index !== index ))

        // 추측 : 아무래도 바인딩한 객체를 직접 수정하면 binding이 해제되거나 추적이 안되는 것 같다.
        // useState로 할당받은 바인딩 객체들은 state 수정시 setState로만 바인딩객체를 수정할 수 있는 것 같다.
        // 자세한건 리액트 구조를 좀 알아야 해석이 가능할듯.
        
    }

    function toggleAddTodoForm(){
        setShowAddForm( !showAddForm )
    }

    function onTodoAdded( ) {
        getTodoList()
    }

    useEffect( 
       () => getTodoList() , []
    )

    // return 문 안에는 주석을 달 수 없다.
    // 배열을 렌더링 할땐, 요소 컴포넌트에 key라는 prop을 할당해줘야한다.
    // key는 유일한 값이여야한다.
    // key는 리스트형 바인딩을 빠르게 하기위해 필요하다. ( key가 없으면 view의 변경이 비효율적으로 일어난다. )
    return (
    <div>
        {comment}
        <ol>
            {todoList.map( ( todo ) => <TodoItem key={todo.index} todo={todo} onDeleted={onTodoDeleted} />)}
        </ol> 
        <button id="new" onClick={ toggleAddTodoForm }> { showAddForm ? "닫기" : "추가" } </button>
        <button id="refresh" onClick={getTodoList}> 새로고침 </button>
        <AddTodoForm isShow={showAddForm} onAddTodo={onTodoAdded} />
    </div>
    )
}


export default TodoList;