import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.3.8.RELEASE"
	id("io.spring.dependency-management") version "1.0.11.RELEASE"
	id("org.jetbrains.kotlin.plugin.noarg") version "1.3.72"
	kotlin("jvm") version "1.3.72"
	kotlin("plugin.spring") version "1.3.72"
	kotlin("plugin.jpa") version "1.3.72"
	kotlin("kapt") version "1.3.72"
}

group = "com.example"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_1_8
var kotlinVersion = "1.4.21"

repositories {
	mavenCentral()
}


dependencies {

	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.springframework.boot:spring-boot-starter-validation")
	//mybatis dependencies
	implementation("org.mybatis.spring.boot:mybatis-spring-boot-starter:2.1.4")
	//postgresql
	implementation("org.postgresql:postgresql:42.2.18")
	//swagger dependencies
	implementation("io.springfox:springfox-swagger-ui:2.9.2")
	implementation("io.springfox:springfox-swagger2:2.9.2")
	//사용하는 dependencies


	//implementation("org.springframework.boot:spring-boot-starter-security")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.springframework.integration:spring-integration-http")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	implementation("com.googlecode.log4jdbc:log4jdbc:1.2")

	implementation("android.arch.persistence.room:runtime:1.1.1")
	annotationProcessor("android.arch.persistence.room:compiler:1.1.1")
	developmentOnly("org.springframework.boot:spring-boot-devtools")
	runtimeOnly("com.h2database:h2")
	testImplementation("org.springframework.boot:spring-boot-starter-test") {
		exclude(group = "org.junit.vintage", module = "junit-vintage-engine")
	}


	// For markdown convert ( From atlassian(jira/confluence) library )
	implementation("com.atlassian.commonmark:commonmark:0.11.0")
	implementation("com.atlassian.commonmark:commonmark-ext-autolink:0.11.0")
	// For use user defined configuration kotlin file
	kapt("org.springframework.boot:spring-boot-configuration-processor")
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "1.8"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}
