import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  saveEmployee(){
    this.empService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Employee Added Successfully!',
        showConfirmButton: false,
        timer: 1500
      });
      this.goToEmployeeList();
      
    },
    error=>console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);

  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
