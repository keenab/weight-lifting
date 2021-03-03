import { Component, OnInit } from '@angular/core';
import { ExerciseData} from 'src/app/create-workout/create-workout.component';

export interface PastWorkouts {
  name: string;
  sets: string;
  reps: string;
  weight: string;
  rest: string;
  coachComment: string;
}

@Component({
  selector: 'wla-past-workouts',
  templateUrl: './past-workouts.component.html',
  styleUrls: ['./past-workouts.component.scss']
})

export class PastWorkoutsComponent implements OnInit {

ngOnInit() {
  //TODO Fetch past exercisess from database????
  this.recExercises$ = this.recExerciseService.getAddedExercises(); 
  this.group = this.groupSelectedService.getCurrentGroup();
  this.date = this.dateSelectedService.getCurrentDate();
}

//TODO need new methods to fetch past exercises....
fetchExercises() {
  
}
}