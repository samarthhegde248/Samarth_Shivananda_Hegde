import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListSubmissionDetailsComponent } from './survey-list-submission-details.component';

describe('SurveyListSubmissionDetailsComponent', () => {
  let component: SurveyListSubmissionDetailsComponent;
  let fixture: ComponentFixture<SurveyListSubmissionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyListSubmissionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyListSubmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
