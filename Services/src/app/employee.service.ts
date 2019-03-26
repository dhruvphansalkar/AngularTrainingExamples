import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmployee} from './employee'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployee ()
  {
    return [
      {"id":1, "name":"Dhruv", "age":22},
      {"id":2, "name":"Saurabh", "age":23},
      {"id":3, "name":"Kunal", "age":24},
      {"id":4, "name":"Mohit", "age":22},
    ];
  }

}
