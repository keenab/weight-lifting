import { Injectable } from '@angular/core';
import {WorkoutElement} from '../workout.table.interface';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ELEMENT_DATA: WorkoutElement[] = [
    {name: 'Arnold Shoulder Press', sets: 3, reps: 15, weight: '5-10 lbs'},
    {name: 'Lateral Raises', sets: 3, reps: 4, weight: '15-25 lbs'},
    {name: 'Lorem Ipsum', sets: 2, reps: 7, weight: '40-55 lbs'},
    {name: 'Ipsum Lorem', sets: 3, reps: 10, weight: '30-35 lbs'}
  ];
  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];
  
  constructor() { }

  getData(): Observable<WorkoutElement[]> {
    return of<WorkoutElement[]>(this.ELEMENT_DATA);
  }

  getCategories() {
    return this.categories;
  }

  addPost(data) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
