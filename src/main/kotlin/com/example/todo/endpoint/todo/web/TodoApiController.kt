package com.example.todo.endpoint.todo.web

import com.example.todo.endpoint.todo.domain.model.TodoDto
import com.example.todo.endpoint.todo.domain.service.TodoService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.http.HttpRequest
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest
import javax.validation.Valid
import javax.websocket.server.PathParam

@Api(description = "Todo list 관리")
@CrossOrigin("http://172.30.1.26:3000", allowCredentials = "true")
@RestController
@RequestMapping("/api/todo")
class TodoApiController(
    val todoService: TodoService
) {
    @ApiOperation(value = "todo 리스트 조회", notes = "todo 리스트 조회 GET API")
    @GetMapping("/todoList")
    fun getTodoList(): ResponseEntity<MutableList<TodoDto>> {
        val todoList = todoService.getTodoList()
        return ResponseEntity.ok(todoList)
    }

    @ApiOperation(value = "todo 생성", notes = "todo 생성 POST API(title만 작성해서 execute)")
    @PostMapping("/todo")
    fun insertTodo(@RequestBody todoDto: TodoDto): ResponseEntity<Any>{
        todoService.insertTodo(todoDto)
        return ResponseEntity.ok().build()
    }

    @ApiOperation(value = "todo 수정", notes = "todo 수정 PUT API")
    @PutMapping("/todo/index/{index}")
    fun updateTodo(@RequestBody todoDto: TodoDto, @PathVariable index: Int): ResponseEntity<Any>{
        todoDto.index = index
        todoService.updateTodo(todoDto)
        return ResponseEntity.ok().build()
    }

    @ApiOperation(value = "todo 삭제", notes = "todo 삭제 DELETE API")
    @DeleteMapping("/todo/index/{index}")
    fun deleteToto(@PathVariable index:Int){
        todoService.deleteTodo(index)
        //todoService.delete()
    }

    @PostMapping("/ip")
    fun getIp( request:HttpServletRequest): ResponseEntity<String>{
        return ResponseEntity.ok(request.remoteAddr)
    }
}