import { User } from './user.model';

export interface Exercise {
  name: string;
  setNumber: number;
  reps: number;
  weight: number;
  user: User;
  date: Date;
  userComment?: string;
}
