import React, {useState, useEffect} from "react"
import customAxios from "./customAxios"
import Hello from "./Hello"


function Header( todoModel ){
    
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
      // 컴포넌트가 리턴하는 DOM은 한 개여야합니다.
      <div>
          <Hello/>
          <div> 접속한 IP는 {ip} 입니다</div>
      </div>
  )

}


export default Header