package com.example.todo.endpoint.todo.domain.model

import io.swagger.annotations.ApiModelProperty
import java.sql.Timestamp

data class TodoDto (

    @field:ApiModelProperty(
        value = "todo index",
        required = false
    )
    var index:Int,

    @field:ApiModelProperty(
        value = "todo 제목",
        example = "12시 스타벅스 스터디",
        required = true
    )
    var title:String,

    @field:ApiModelProperty(
        value = "완료 여부",
        required = false
    )
    var completeStat:Boolean,

    @field:ApiModelProperty(
        value = "생성일자",
        required = false
    )
    var createAt:Timestamp?=null,

    @field:ApiModelProperty(
        value = "수정일자",
        required = false
    )
    var updateAt:Timestamp?=null

        )