import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExerciseService } from '../services/exercise.service';
import { DataService } from '../data/data.service';
import ExerciseClass from '../shared/models/exercise';

// tells this page which html, scss to use, etc.
@Component({
  selector: 'wla-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['./edit-exercise.component.scss']
})

// constructur for editing the excercises
export class EditExerciseComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditExerciseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService,
    private exerciseService: ExerciseService
  ) {}

  // creates excercise type that takes in name, reps, weights, and comments
  exercise = {
    name: this.data.name,
    reps: this.data.reps,
    weight: this.data.weight,
    comment: this.data.userComment,

  };

  ngOnInit() {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  // this is submitting the changes to the excercises
  submitForm() {
    this.dialogRef.close();
  }

  // changes the previous excercises to the new excercises, updates it
  updateExercise() {
    this.exerciseService.updateExercise(new ExerciseClass(
      this.data.id,
      this.exercise.name,
      this.data.setNumber,
      this.exercise.reps,
      this.exercise.weight,
      this.data.userID,
      this.data.date,
      this.exercise.comment));
  }
}
