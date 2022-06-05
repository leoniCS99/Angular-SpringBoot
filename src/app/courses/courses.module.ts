import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CourseComponent } from './course/course.component';
import { CoursesRoutingModule } from './courses-routing.module';



@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule
  ]
})
export class CoursesModule { }
