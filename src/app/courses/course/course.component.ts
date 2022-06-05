import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';

import { Course } from './../model/course';
import { first, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

 Courses$: Observable <Course[]>;
 displayedColumns = ['name', 'categoria'];


  constructor(private coursesService: CoursesService) {
   //this.courses = [];

     this.Courses$ = this.coursesService.findAll();
  }

  ngOnInit(): void {

  }

}
