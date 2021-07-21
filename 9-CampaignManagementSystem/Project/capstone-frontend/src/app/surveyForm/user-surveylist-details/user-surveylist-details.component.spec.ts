import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveylistDetailsComponent } from './user-surveylist-details.component';

describe('UserSurveylistDetailsComponent', () => {
  let component: UserSurveylistDetailsComponent;
  let fixture: ComponentFixture<UserSurveylistDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSurveylistDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveylistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
