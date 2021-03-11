import { RecommendedExercise } from './recommended-exercise.model';
import { User } from './user.model';
import { Group } from './group.model';

export default class WorkoutClass {
  name: string;
  id: string;
  recExercise: Array<RecommendedExercise>;
  date: Date;
  dateCreated: Date;
  group: Group;

  constructor(
    name: string,
    id: string,
    recExercise: Array<RecommendedExercise>,
    date: Date,
    dateCreated: Date,
    group: Group
  ) {
      this.name = name;
      this.id = id;
      this.recExercise = recExercise;
      this.date = date;
      this.dateCreated = dateCreated;
      this.group = group;
  }
}
