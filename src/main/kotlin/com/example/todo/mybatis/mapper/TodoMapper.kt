package com.example.todo.mybatis.mapper

import com.example.todo.endpoint.todo.domain.model.TodoDto
import org.apache.ibatis.annotations.Mapper

@Mapper
interface TodoMapper {
    fun getTodoList():MutableList<TodoDto>

    fun insertTodo(todoDto: TodoDto):Int

    fun updateTodo(todoDto: TodoDto):Int

    fun deleteTodo(index:Int):Int
}