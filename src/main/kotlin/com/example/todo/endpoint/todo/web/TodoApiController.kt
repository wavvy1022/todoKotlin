package com.example.todo.endpoint.todo.web

import com.example.todo.endpoint.todo.domain.model.TodoDto
import com.example.todo.endpoint.todo.domain.service.TodoService
import org.springframework.http.HttpRequest
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest
import javax.validation.Valid

@CrossOrigin("http://localhost:3000", allowCredentials = "true")
@RestController
@RequestMapping("/api/todo")
class TodoApiController(
    val todoService: TodoService
) {
    @GetMapping("/getTodoList")
    fun getTodoList(): ResponseEntity<MutableList<TodoDto>> {
        val todoList = todoService.getTodoList()
        return ResponseEntity.ok(todoList)
    }

    @PostMapping("/insertTodo")
    fun insertTodo(@RequestBody todoDto: TodoDto): ResponseEntity<Any>{
        todoService.insertTodo(todoDto)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/ip")
    fun getIp( request:HttpServletRequest): ResponseEntity<String>{
        return ResponseEntity.ok(request.remoteAddr)
    }
}