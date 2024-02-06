import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employee"

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(emp: Employee): Observable<Employee> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<Employee>(`${this.baseURL}`, emp, { headers });
  }

  getEmployeeBYId(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, emp: Employee): Observable<Employee> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<Employee>(`${this.baseURL}/${id}`, emp, { headers });
  }
}
