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
        
        setTodoList( todoList.filter( todo => todo.index !== index ))

        /* React가 useState로 관리하는 컴포넌트의 '상태'는 상태객체를 지정하는 변수로 접근하여 수정하면 안된다.
         setState로 업데이트하는 '상태'값은 변수로 접근하여 수정한 결과가 아닌, 변경된 값이 적용된 '새로운 값', '새로운 객체' 여야한다.
         ex) 상태로 관리하는 배열을 변수로 접근하여 splice,push 등 배열의 상태를 변경하는 행위를 하면, React가 관리하는 상태와 달라지기 때문에
             상태가 변경되더라도 DOM이 업데이트 되지 않는다.

        따라서 배열로 등록한 상태값을 변경할 때엔 상태객체에 직접 접근하여 push, splice로 요소를 편집해선 안되며
        요소를 추가/수정/삭제한 새로운 배열을 생성하여 setState해주어야 함.
        
        es6는 이러한 작업을 간결하게 표현할 수 있도록 다양한 표현을 지원한다.
        삭제 : Array.filter( elem => base != elem.value ) , 기준값이 아닌 데이터를 거른 새로운 배열을 생성하여 리턴한다. 즉 대상요소 삭제결과를 반환함.
        추가 : [ array... , newElem ] , 새로운 배열에 기존배열의 요소를 추가하고 새로운 배열을 맨 마지막에 추가하는 표현이다. 즉 새로운 요소를 추가한 배열을 반환함.
        수정 : ??  
        */
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