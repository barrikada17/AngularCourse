import { Component } from '@angular/core';



interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = {
    title: 'Review applications',
    assigne: {
      name: null
    }
  }


  canSave = true;
  viewMode = 'map';

  courses; 

  onAdd(){
    this.courses.push({id: 4, name: 'course4'})
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);

  }

  onChange(course){
    course.name = 'UPDATED';
  }
  loadCourses(){
    this.courses =  [
      {id: 1, name:'course1'},
      {id: 2, name:'course2'},
      {id: 3, name:'course3'},
  
    ];
  }
  trackCourse(index, course){
    return course ? course.id : undefined;
  }
}
