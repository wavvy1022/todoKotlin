package com.example.todo

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.servlet.http.HttpServletRequest

@CrossOrigin("http://localhost:3000", allowCredentials = "true")
@RestController
@RequestMapping("/todo/api")
class TodoApiController {

    @PostMapping( "/ip" )
    fun ip( req: HttpServletRequest) : ResponseEntity<String> {
        return ResponseEntity.ok( req.remoteAddr )
    }
}