import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-employee-name-list',
  template: 
  `
    <h1> Employee Name List</h1>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
    
  `,
  styles: [``]
})
export class EmployeeNameListComponent implements OnInit {

  public employees =[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
    
  }

}

