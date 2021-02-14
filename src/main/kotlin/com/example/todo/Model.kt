package com.example.todo

import java.time.LocalDateTime
import javax.persistence.*

class Model {
    @Entity
    data class Article(
            val title: String,
            val headline : String,
            val content : String,
            @ManyToOne @JoinColumn val author : User,
            @Id @GeneratedValue val id : Long?  = null,
            val addedAt : LocalDateTime = LocalDateTime.now()
    )

    @Entity
    data class User(
            @Id val login : String,
            val firstname : String,
            val lastname : String,
            val description : String? = null
    )

}