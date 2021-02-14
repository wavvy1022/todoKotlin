import axios from 'axios' 

export default function customAxios( url, callback ){
    axios(
        {
            url : `/todo/api${url}`,
            method : 'post',

            // 크로스도메인 이슈 제거를 위한 설정
            baseURL : 'http://localhost:8080',
            withCredentials:true
        }
    ).then( function ( response ) { 
        callback( response.data )
    })
}