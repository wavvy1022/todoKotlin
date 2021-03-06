import React, {useState, useEffect} from "react"
// Import custom react component
import Header from "./Header"
import TodoList from "./TodoList"


// App은 React Component 입니다.
function App(){

  return (
    <>
      <Header/>
      <TodoList/>
    </>
  )
}


export default App;