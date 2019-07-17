<<<<<<< Updated upstream
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
=======
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from '@angular/core/testing';
>>>>>>> Stashed changes

import { TodayWorkoutComponent } from './today.workout.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { RecommendedExerciseService } from '../services/recommended-exercise.service';
import { of, Observable } from 'rxjs';
import { ExerciseService } from '../services/exercise.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import TestUtils from '../shared/utils/test-utils';
<<<<<<< Updated upstream

describe('TodayWorkoutComponent', () => {
  let component: TodayWorkoutComponent;
  let fixture: ComponentFixture<TodayWorkoutComponent>;
=======
import { browser, element } from 'protractor';
import { GroupService } from '../services/groups.service';
import { SelectMenuTestHelper } from '../shared/utils/select-menu-helper';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TodayWorkoutComponent', () => {
  let component: TodayWorkoutComponent;
  let fixture: ComponentFixture<any>;
  let componentDebug: DebugElement;
  let componentElement: HTMLElement;

  let options: HTMLElement[];
  let selectMenu: SelectMenuTestHelper;
>>>>>>> Stashed changes

  const recExercisesStub = {
    getAddedExercises(): Observable<any> {
      return of([
        TestUtils.getTestRecommendedExercise(
          undefined,
          'squats',
          undefined,
          undefined,
          undefined,
          undefined
        ),
        TestUtils.getTestRecommendedExercise(
          undefined,
          'bench press',
          undefined,
          undefined,
          undefined,
          undefined
        )
      ]);
    }
  };

  const exercisesStub = {
    getAddedExercises(): Observable<any> {
      return of([TestUtils.getTestExercise(), TestUtils.getTestExercise()]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule, NoopAnimationsModule],
      declarations: [TodayWorkoutComponent],
      providers: [
        {
          provide: RecommendedExerciseService,
          useValue: recExercisesStub
        },
        {
          provide: ExerciseService,
          useValue: exercisesStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayWorkoutComponent);
    component = fixture.componentInstance;
    componentDebug = fixture.debugElement;
    componentElement = componentDebug.nativeElement;
    fixture.detectChanges();
    selectMenu = new SelectMenuTestHelper(fixture);
  });

  beforeEach(fakeAsync(() => {
    selectMenu.triggerMenu();
    options = selectMenu.getOptions();
  }));

  afterEach(() => {
    selectMenu.cleanup();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< Updated upstream
=======

  it('should display the dropdown', () => {
    const d = componentElement.querySelector('mat-form-field');
    expect(d.textContent).toContain('Select Your Current Exercise');
  });

  it('should display exercises correctly in the dropdown', () => {
    const squatsElement = selectMenu.getOptionByKey(options, 'squats');
    const benchPressElement = selectMenu.getOptionByKey(options, 'bench press');
    expect(squatsElement).not.toBeNull();
    expect(benchPressElement).not.toBeNull();
  });
>>>>>>> Stashed changes
});
