package com.example.todo.endpoint.todo.domain.model

import java.sql.Timestamp
import javax.validation.constraints.NotBlank

data class TodoDto (

    @field:NotBlank
    var title:String?=null,

    @field:NotBlank
    var schedule:String?=null,
    var description:String?=null,
    var createAt:Timestamp?=null,
    var updateAt:Timestamp?=null,
    var index:String?=null
)