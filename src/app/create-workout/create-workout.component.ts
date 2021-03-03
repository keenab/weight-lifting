import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { RecommendedExerciseService } from '../services/recommended-exercise.service';
import { DataService } from '../data/data.service';
import { RecommendedExercisesDialogComponent } from '../recommended-exercises-dialog/recommended-exercises-dialog.component';
import { Router } from '@angular/router';
import { Group } from '../shared/models/group.model';
import TestUtils from '../shared/utils/test-utils';
import { Observable } from 'rxjs';
import { CurrentGroupSelectedService } from '../services/current-group-selected.service';
import { CurrentDateSelectedService } from '../services/current-date-selected.service';
import { RecommendedExercise } from '../shared/models/recommended-exercise.model';
import { WorkoutService } from '../services/workout.service';
import { EditRecommendedExerciseComponent } from '../edit-recommended-exercise/edit-recommended-exercise.component';

// object exercisedata which takes in names, sets, reps, etc.
export interface ExerciseData {
  name: string;
  sets: string;
  reps: string;
  weight: string;
  rest: string;
  coachComment: string;
}

// tells this page where to get its html and scss from
@Component({
  selector: 'wla-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.scss']
})

export class CreateWorkoutComponent implements OnInit {
  recExercises$: Observable<Array<RecommendedExercise>>;
  date: Date;
  group: Group;
  displayedColumns = [
    'name',
    'sets',
    'reps',
    'weight',
    'rest',
    'comments',
    'edit'
  ];

  constructor(
    public newExerciseDialog: MatDialog,
    private recExerciseService: RecommendedExerciseService,
    private router: Router,
    private groupSelectedService: CurrentGroupSelectedService,
    private dateSelectedService: CurrentDateSelectedService,
    private workoutService: WorkoutService
  ) {}

  ngOnInit() {
    this.recExercises$ = this.recExerciseService.getAddedExercises();
    this.group = this.groupSelectedService.getCurrentGroup();
    this.date = this.dateSelectedService.getCurrentDate();
  }

  openNewExerciseDialog(): void {
    const dialogRef = this.newExerciseDialog.open(
      RecommendedExercisesDialogComponent,
      {
        width: '600px',
        data: 'Add Exercise'
      }
    );
  }

  openEditExerciseDialog(recommendedExercise: RecommendedExercise): void {
    const dialogRef = this.newExerciseDialog.open(
      EditRecommendedExerciseComponent,
      {
        width: '600px',
        data: recommendedExercise
      }
    );
  }

  // method for saving workout
  saveWorkout() {
    this.workoutService.saveWorkout(
      this.recExerciseService.recommendedExercises$.value,
      this.date,
      this.group
    );
    this.addRecExercise();
    this.recExerciseService.clearExerciseLocal();
    // this.router.navigate(['']);
  }

 // method for recommending workout?
  addRecExercise() {
    this.recExerciseService.addExerciseDatabase(this.recExerciseService.recommendedExercises$.value);
  }

  deleteRecExercise(recommendedExercise: RecommendedExercise): void {
    this.recExerciseService.deleteRecommendedExercise(recommendedExercise);
  }
}
