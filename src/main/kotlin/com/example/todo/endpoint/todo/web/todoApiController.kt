package com.example.todo.endpoint.todo.web

import com.example.todo.endpoint.todo.domain.model.TodoDto
import com.example.todo.endpoint.todo.domain.service.TodoService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/todo")
class todoApiController(
    val todoService: TodoService
) {

    @GetMapping("/getTodoList")
    fun getTodoList(): ResponseEntity<MutableList<TodoDto>> {
        val todoList = todoService.getTodoList()
        return ResponseEntity.ok(todoList)
    }
}