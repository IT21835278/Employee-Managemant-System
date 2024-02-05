import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  employee:Employee = new Employee();

  //its noly need one parameter but 2c=nd use to navigate after create procesws
  constructor(private empService:EmployeeService,private router:Router){}

  ngOnInit(): void {
    
  }

  saveEmployee(emp:Employee){
    this.empService.createEmployee(emp).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
      
    },
    error=>console.log(error))
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);

  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee(this.employee);
  }

}
