import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _baseLocalUrl = "http://localhost:5000";
  private _allCourses = this._baseLocalUrl + "/ecourse/all";
  private _getOneCourse = this._baseLocalUrl + "/ecourse/one/";
  private _addOneCourse = this._baseLocalUrl + "/ecourse/add";

  constructor(private http: HttpClient) { }

  allCourses() {
    return this.http.get<any>(this._allCourses);
  }
  getOneCourse(id) {
    return this.http.get<any>(this._getOneCourse + id);
  }
  addCourse(course: Course) {
    return this.http.post<any>(this._addOneCourse, course);
  }
}
