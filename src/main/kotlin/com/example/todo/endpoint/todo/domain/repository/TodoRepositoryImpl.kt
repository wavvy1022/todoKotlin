package com.example.todo.endpoint.todo.domain.repository

import com.example.todo.endpoint.todo.domain.model.TodoDto
import com.example.todo.mybatis.mapper.TodoMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class TodoRepositoryImpl :TodoRepository{

    @Autowired
    private lateinit var todoMapper: TodoMapper

    override fun getTodoList(): MutableList<TodoDto> {
        return todoMapper.getTodoList()
    }

    override fun insertTodo(todoDto: TodoDto) {
        todoMapper.insertTodo(todoDto)
    }

    override fun updateTodo(todoDto: TodoDto) {
        todoMapper.updateTodo(todoDto)
    }

    override fun deleteTodo(index: Int) {
        todoMapper.deleteTodo(index)
    }

}