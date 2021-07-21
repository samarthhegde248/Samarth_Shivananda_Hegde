import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveyFormlistComponent } from './user-survey-formlist.component';

describe('UserSurveyFormlistComponent', () => {
  let component: UserSurveyFormlistComponent;
  let fixture: ComponentFixture<UserSurveyFormlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSurveyFormlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveyFormlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
