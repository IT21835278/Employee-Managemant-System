import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  
  id!:number;
  employee:Employee = new Employee();

  constructor(private empService:EmployeeService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empService.getEmployeeBYId(this.id).subscribe(data =>{
      this.employee=data;
    },
    error=>console.log(error));
  }

  goToEmployeeList(){
    Swal.fire({
      icon: 'success',
      title: 'Employee Update Successfully!',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigate(['/employees']);

  }

  onSubmit(){
    this.empService.updateEmployee(this.id,this.employee).subscribe(data =>{
      this.goToEmployeeList()

    },
    error=>console.log(error));
  }

}
