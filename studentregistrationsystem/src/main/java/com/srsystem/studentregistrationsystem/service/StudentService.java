package com.srsystem.studentregistrationsystem.service;

import com.srsystem.studentregistrationsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
