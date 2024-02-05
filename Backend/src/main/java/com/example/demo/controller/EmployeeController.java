package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	@Autowired
	private EmployeeRepository empRepositorty;
	
	//get all emp
	@GetMapping("/employee")
	public List<Employee> getAllEmployee(){
		return empRepositorty.findAll();
	}
	
	//create emp rest API
	@PostMapping("/employee")
	public Employee addEmployees(Employee emp) {
		System.out.println(emp);
		return empRepositorty.save(emp);
	}

}
