
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2>{{title}}</h2>
    <img [src]="imageUrl"/> 
    <table>
            <tr>
                <td [attr.colspan] ="colSpan"></td>
            </tr>
    </table>
    <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Save</button>
    </div>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>

    <hr/><br/>

    <!-- {{course.title | uppercase | lowercase}}<br/>
    {{course.student | number}}<br/>
    {{course.raiting | number:'2.2-2'}}<br/>
    {{course.price | currency:'EUR':true:'3.2-2'}}<br/>
    {{course.releaseDate | date:'shortDate'}}<br/>

    <hr/><br/> -->

    {{text | summary:10}}


    <!-- <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button> -->
    <!-- <button class="btn btn-primary" [class.active]="isActive">Save</button> -->


    <!-- <h2 [textContent]="title"></h2> -->
    <!-- <img src="{{ imageUrl }}"/> -->

    <!-- <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul> -->
    `
})

export class CoursesComponent {
    
    
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = false;
    email="me@example.com";

    course ={
        title:"The Complete Angular Course",
        raiting: 4.9745,
        student: 235664,
        price: 190.95,
        releaseDate : new Date(2016,3,1)
    };

    text = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbb";

    onDivClicked(){
        console.log("Div was clicked");
    }

    onSave($event) {
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    onKeyUp(){
        console.log(this.email);
    }

    //Course Service
    /*
    courses;
    
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    */

}