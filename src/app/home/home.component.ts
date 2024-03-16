import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "../services/courses.service";
import {map, tap} from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { CoursesCardListComponent } from '../courses-card-list/courses-card-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Title } from '@angular/platform-browser';
import { AppShellNoRenderDirective } from '../directives/app-shell-no-render.directive';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [MatTabsModule, CoursesCardListComponent, AsyncPipe, AppShellNoRenderDirective]
})
export class HomeComponent implements OnInit {

    courses$: Observable<Course[]>;

    constructor(private coursesService: CoursesService, private title: Title) {

    }

    ngOnInit() {
        this.title.setTitle("Home of All courses")

        this.courses$ = this.coursesService.findAllCourses()
            .pipe(
                map(Object.values)
            );
    }

}
