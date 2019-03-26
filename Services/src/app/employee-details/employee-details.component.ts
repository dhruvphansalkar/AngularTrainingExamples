import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: 
  `
    <h1> Employee Details List</h1>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}  {{employee.name}}  {{employee.age}}</li>
    </ul>
  `,
  styles: [``]
})
export class EmployeeDetailsComponent implements OnInit {

  public employees =[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }

}
