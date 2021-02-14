package com.example.todo

import com.example.todo.Model.*
import org.springframework.data.repository.CrudRepository

class Repositories {

}

interface ArticleRepository : CrudRepository<Article, Long > {
    fun findAllByOrderByAddedAtDesc() : Iterable<Article>
}

interface UserRepository : CrudRepository<User, String>