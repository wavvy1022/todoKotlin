package com.example.todo.endpoint.todo.domain.model

import java.sql.Timestamp

data class TodoDto (

    var index:Int,
    var title:String,
    var completeStat:Boolean,
    var createAt:Timestamp?=null,
    var updateAt:Timestamp?=null

        )