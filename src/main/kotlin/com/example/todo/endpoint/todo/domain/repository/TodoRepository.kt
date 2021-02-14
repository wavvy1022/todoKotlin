package com.example.todo.endpoint.todo.domain.repository

import com.example.todo.endpoint.todo.domain.model.TodoDto

interface TodoRepository {

    fun getTodoList():MutableList<TodoDto>

    fun insertTodo(todoDto: TodoDto)
}