package com.example.todo.endpoint.todo.domain.service

import com.example.todo.endpoint.todo.domain.model.TodoDto
import com.example.todo.endpoint.todo.domain.repository.TodoRepositoryImpl
import org.springframework.stereotype.Service

@Service
class TodoService(
    val todoRepositoryImpl: TodoRepositoryImpl
) {

    fun getTodoList():MutableList<TodoDto>{
        return todoRepositoryImpl.getTodoList()
    }

    fun insertTodo(todoDto: TodoDto):Int {
        return todoRepositoryImpl.insertTodo(todoDto)
    }

    fun updateTodo(todoDto: TodoDto): Int{
        return todoRepositoryImpl.updateTodo(todoDto)
    }

    fun deleteTodo(index:Int): Int {
        return todoRepositoryImpl.deleteTodo(index)
    }

}