# Weight Lifing App

The Weight Lifing app serves the purpose of allowing Chadwick coaches and Chadwick students to communicate about their workouts. Coaches will have the ability to assign custom workouts to students, include commnts on the workouts, and check in on the progress students have been making. Students will be able to update coaches on their workouts. The app aims to make communication between coaches and students easier. 

--------------------

## Cloning the project

Run the following line in terminal:

`git clone https://github.com/ChadwickSchool/Weight-Lifting-App.git`

If not working on main, `git checkout` a new branch:

`git checkout -b [branch name here]`

If you want to work on existing branch run, `git checkout` a existing branch:

`git checkout [branch name here]`

This project was generated with Angular CLI version  8.0.4.

## Running the Project during Development
1) Navigate into the root directory of the Goal Management project
2) Run `ng serve`

## Deploying your changes
1) Run `ng build`
2) Run `firebase deploy`


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Components

### Navbar
This contains the Home button, Student's Workout History button (only on the admin side), and Logout/Login button

### Sidebar
This contains the Home button, Create Workout button, and Logout/Login button 

### Login  
This is the login page of the app. Allows for google sign in and sign up

### Admin Home
This is the home page of the app for the administrative side. Admins may create workouts for groups of students
Methods: 
```ts
// assigns a date to a workout
  createWorkout() 
  ```

### Student Home
This is the home page of the app for the student side. Students may choose a group and see that day's workout for the group
Methods: 
```ts
// displays the sports groups students may choose from
  showGroups()

// get the assigned workout for the selected group and display it in the table
  setCurrentGroupSelected(group: Group)
  
   ``` 

### Create Workout 
Admins can create workouts that are recommend to students
Methods: 
```ts 
// Saves newly created recommended exercises to a workout
   saveWorkout()

// Adds recommended exercises to the database when a workout is saved
  addRecExercise() 

// Allows coaches to delete recommended exercises 
 deleteRecExercise(recommendedExercise: RecommendedExercise): void
   
// Allows coaches to edit recommended exercises 
  openNewExerciseDialog(): void 
```

### Edit Exercise 
Admins can edit student exercises 
Methods: 
``` ts 
// Submits the edited exercises and closes the dialog
  submitForm() 

// Updates the previous excercises to the new excercises
  updateExercise()
``` 

### Edit Recommended Exercises
Admins can edit the recommended exercises 
Methods: 
``` ts 
// Submits the edited exercises and closes the dialog
  submitForm() 

// Updates the previous excercises to the new excercises
  updateExercise()
``` 
 
 ### Recommended Exercises Dialogue
Admins can edit the recommended exercises 
Methods: 
```ts
// Adds a new exercise to the local database
  addExercise()
// Submits the edited exercises and new exercise, and closes the dialog
  submitForm() 
// Updates the previous excercises to the new excercises
  updateExercise()
```

### Past Workouts
Retrieves and displays past recommended workouts 
Methods: 
```ts
// Fetches past workouts from the database 
  fetchExercises()
// Copies past workouts that has id i   
  copyWorkout()
``` 

## Services

### Auth
Provides current user data and methods for google auth, github signin, and update user

Methods:
```ts
// Signs user into google account and adds user to firebase
   async googleSignin()
  
// signs out user
   async signOut()
  
// gets the user's firebase id
   getFirebaseUserID()
  
// gets fire base user 
  getAuthenticatedUser()
  
  // adds user data to firebase after login
  private createStudentUser(user)
```


