import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h2> Departments List </h2>
    <ul class = "items">
      <li (click) = "onSelect(department)" [class.selected]="isSelected(department)" *ngFor = "let department of departments">
        <span class = "badge">{{department.id}}</span>   {{department.name}}
      </li>
    </ul>

  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

public highlightId;
  constructor(private router: Router, private route : ActivatedRoute) { }

public selectedId;
 public departments = [
    {"id":1 ,"name":"Angular"},
    {"id":2 ,"name":"Node"},
    {"id":3 ,"name":"Java"},
    {"id":4 ,"name":"CSS"},
  ]

  ngOnInit() {
     this.route.paramMap.subscribe((param :ParamMap)=>{
      let id = parseInt(param.get('id'));
      this.selectedId=id;
     });
  }

  onSelect(department)
  {
      //this.router.navigate(['/departments', department.id]); example of absolute path. 
      this.router.navigate([department.id],{relativeTo: this.route})
  }

  isSelected(department)
  {
    return department.id === this.selectedId;
  }

}
