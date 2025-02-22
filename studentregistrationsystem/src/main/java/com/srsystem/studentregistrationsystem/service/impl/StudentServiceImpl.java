package com.srsystem.studentregistrationsystem.service.impl;

import com.srsystem.studentregistrationsystem.model.Student;
import com.srsystem.studentregistrationsystem.repository.StudentRepository;
import com.srsystem.studentregistrationsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }
    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

}
