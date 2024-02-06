import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees!: Employee[];

  constructor(private empService:EmployeeService, private router:Router){}

  ngOnInit():void{
    this.getEmployees()
  }

  private getEmployees(){
    this.empService.getEmployeesList().subscribe(data =>{
      this.employees=data;
    })
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee-details',id])

  }

  deleteEmployee(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this employee!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Conform',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empService.deleteEmployee(id).subscribe(() => {
          Swal.fire('Deleted!', 'Your employee has been deleted.', 'success');
          this.getEmployees();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your employee is safe :)', 'info');
      }
    });
  }


  viewEmployee(id:number){
    this.router.navigate(['employee-details',id])
  }

}

