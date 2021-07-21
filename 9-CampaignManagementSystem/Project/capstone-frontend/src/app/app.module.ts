import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './Admin Module/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule, ThemeService } from 'ng2-charts';

import {CreateSurveyComponent} from './Admin Module/create-survey/create-survey.component';
import { SurveyFormComponent } from './Admin Module/survey-form/survey-form.component';
import { AdminHomeComponent } from './Admin Module/admin-home/admin-home.component';
import { UserHomeComponent } from './User/user-home/user-home.component';
import { LoginComponent } from './Login_Module/login/login.component';
import { LogoutComponent } from './Login_Module/logout/logout.component';
import { UserSurveyFormlistComponent } from './Admin Module/user-survey-formlist/user-survey-formlist.component';
import { SurveyFormListComponent } from './surveyForm/survey-form-list/survey-form-list.component';
import { RegistrationComponent } from './Login_Module/registration/registration.component';
import { UserSurveylistDetailsComponent } from './surveyForm/user-surveylist-details/user-surveylist-details.component';
import { SurveyListSubmissionDetailsComponent } from './surveyForm/survey-list-submission-details/survey-list-submission-details.component';
import { UserEmailComponent } from './Admin Module/user-email/user-email.component';
import { EditSurveyComponent } from './Admin Module/edit-survey/edit-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSurveyComponent,
    SurveyFormComponent,
    AdminHomeComponent,
    UserHomeComponent,
    LoginComponent,
    LogoutComponent,
    UserSurveyFormlistComponent,
    SurveyFormListComponent,
    RegistrationComponent,
    UserSurveylistDetailsComponent,
    SurveyListSubmissionDetailsComponent,
    UserEmailComponent,
    EditSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
