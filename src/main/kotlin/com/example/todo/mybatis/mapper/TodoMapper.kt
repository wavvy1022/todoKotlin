package com.example.todo.mybatis.mapper

import com.example.todo.endpoint.todo.domain.model.TodoDto
import org.apache.ibatis.annotations.Mapper

@Mapper
interface TodoMapper {
    fun getTodoList():MutableList<TodoDto>

    fun insertTodo(todoDto: TodoDto)

    fun deleteTodo(index:Int)
}