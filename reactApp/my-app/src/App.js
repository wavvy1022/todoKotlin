import React, {useState, useEffect} from "react"
import "./App.css"
// Import custom react component
import customAxios from "./customAxios"
import TodoList from "./TodoList"


// App은 React Component 입니다.
function App(){
  // IP 주소 변수 선언
  const [ip, setIp] = useState('')

  // IP주소 값을 설정합니다.
  function callback(data) {
    setIp(data)
  }

  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect( 
    () => {
      //클라이언트의 IP주소를 알아내는 백엔드 함수를 호출합니다.
      customAxios( "POST", '/ip', callback );
    }, []
  )

  return (
    // 컴포넌트에서 리턴하는 JSX는 단일 태그를 리턴해야하는 원칙이 있나봅니다.
    <div className = "App">
      <div>접속 IP는 {ip} 입니다.</div> 
      <header className = "App-header">
        <TodoList/>
      </header>
    </div>
  )
}


export default App;