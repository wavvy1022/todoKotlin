import axios from 'axios' 

export default function customAxios( method, url, callback, data ){
    axios(
        {
            url : `/api/todo${url}`,
            method : method,
            data    : data,
            // 크로스도메인 이슈 제거를 위한 설정
            baseURL : 'http://localhost:8080',
            withCredentials:true
        }
    ).then( function ( response ) { 
        if( response.status == 200 )
            callback( response.data )
    })
}