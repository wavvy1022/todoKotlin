import axios from 'axios' 

export default function customAxios( method, url, callback ){
    axios(
        {
            url : `/api/todo${url}`,
            method : method,

            // 크로스도메인 이슈 제거를 위한 설정
            baseURL : 'http://172.30.1.41:8080',
            withCredentials:true
        }
    ).then( function ( response ) { 
        callback( response.data )
    })
}