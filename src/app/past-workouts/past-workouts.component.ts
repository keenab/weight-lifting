import { Component, OnInit } from '@angular/core';
import { ExerciseData} from 'src/app/create-workout/create-workout.component';
import { CurrentGroupSelectedService } from '../services/current-group-selected.service';
import { WorkoutService } from '../services/workout.service';
import GroupClass from '../shared/models/group';
import { Workout } from '../shared/models/workout.model';

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
  pastWorkouts: Workout[];
  constructor (private workoutservice: WorkoutService, private currentGroupService: CurrentGroupSelectedService) {

  }

ngOnInit() {
  //TODO Fetch past exercisess from database????
this.fetchExercises();
}

//TODO need new methods to fetch past exercises....
async fetchExercises() {
  const waterpolo = new GroupClass("Waterpolo", "QGVVfkGVL4fjyZI5lBfS");
   this.pastWorkouts = await this.workoutservice.getPastWorkouts(waterpolo);
   console.log(this.pastWorkouts);
}
}

// get workout to list
// get workout date to display
// save when clicked