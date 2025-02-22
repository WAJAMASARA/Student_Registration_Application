package com.srsystem.studentregistrationsystem.controller;

import com.srsystem.studentregistrationsystem.model.Student;
import com.srsystem.studentregistrationsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String addStudent(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "Student added";
    }

    @GetMapping("getAll")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

}
