import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router, ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      the id is {{departmentId}}!
    </p>
    <p>
      <button (click)="getOverview()">Overview</button>
      <button (click)="getContact()">Contact</button>
    </p>

    <router-outlet>

    <p>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
    </p>

    <div>
      <button (click) = "goToDepartments()">back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId

  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id')); this approach is flawed since snapshot wont reload the same view, the url will update but the view will remain the same.
    //this.departmentId = id;
    this.route.paramMap.subscribe((param :ParamMap)=>{
      let id = parseInt(param.get('id'));
      this.departmentId=id;

    });
  }

  goPrevious()
  {
    let previousId = this.departmentId-1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext()
  {
    let nextId = this.departmentId+1;
    this.router.navigate(['/departments', nextId]);
  }

  goToDepartments()
  {
    let selectedId= this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id : selectedId}]);
  }

  getOverview()
  {
    this.router.navigate(['overview'], {relativeTo: this. route});
  }

  getContact()
  {
     this.router.navigate(['contact'], {relativeTo: this. route});
  }

}
