// First 리액트 컴포넌트! 

// Javascript 문법에서 모듈을 만들때 export 를 씁니다. 
// 각 js파일은 모듈입니다.

// 리액트 컴포넌트를 만들 때엔, React 를 불러와줘야합니다.
import React from 'react';


// 리액트 컴포넌트는 함수형태로 작성할 수도 있고 클래스형태로 작성할 수 있습니다.
function Hello(){
    // 리액트 컴포넌트는 XML형식의 값을 '반환' 해줄 수 있는데 이를 JSX라고 부릅니다.
    return <div>안녕하세요</div>
}


// 리액트 컴포넌트( 모듈 )를 등록합니다. 
// 필요한 파일에서 모듈을 import하면 생성한 모듈을 import하면 Hello 모듈이 리턴하는 Template를 삽입할 수 있습니다.

export default Hello;