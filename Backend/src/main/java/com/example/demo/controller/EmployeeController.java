package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
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
	public Employee addEmployees(@RequestBody Employee emp) {
		System.out.println(emp);
		return empRepositorty.save(emp);
	}
	
	//get emp details by ID API
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
		Employee emp = empRepositorty.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exising in this ID"));
		return ResponseEntity.ok(emp);
	}
	
	//update emp API
	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee empDetails){
		Employee emp = empRepositorty.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not existin this ID"));
		
		emp.setName(empDetails.getName());
		emp.setAddress(empDetails.getAddress());
		emp.setEmailId(empDetails.getEmailId());
		
		Employee updateEmp = empRepositorty.save(emp);
		
		return ResponseEntity.ok(updateEmp);
	}

}
