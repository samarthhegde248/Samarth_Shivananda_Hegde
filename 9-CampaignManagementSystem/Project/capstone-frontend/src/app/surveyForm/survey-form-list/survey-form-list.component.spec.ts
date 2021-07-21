import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormListComponent } from './survey-form-list.component';

describe('SurveyFormListComponent', () => {
  let component: SurveyFormListComponent;
  let fixture: ComponentFixture<SurveyFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
