import React, {useState, useEffect} from "react"
import "./App.css"
// Import custom react component
import Header from "./Header"
import TodoList from "./TodoList"


// App은 React Component 입니다.
function App(){

  return (
    <div className = "App">
      <Header/>
      <header className = "App-header">
        <TodoList/>
      </header>
    </div>
  )
}


export default App;