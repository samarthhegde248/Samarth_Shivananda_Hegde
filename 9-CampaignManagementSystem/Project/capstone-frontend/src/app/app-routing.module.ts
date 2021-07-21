import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSurveyComponent } from './Admin Module/create-survey/create-survey.component';
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

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminHomeComponent},
  { path: 'user', component: UserHomeComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'createform', component: CreateSurveyComponent },
  { path: 'editform/:id',component: EditSurveyComponent },
  { path: 'usersurvey', component: UserSurveyFormlistComponent},
  { path: 'survey/:id', component: SurveyFormComponent },
  { path: 'surveylistdetails', component: UserSurveylistDetailsComponent },
  { path: 'surveylistdetails/:title', component: SurveyListSubmissionDetailsComponent},
  { path: 'editsurvey', component: SurveyFormListComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'email/:p1', component: UserEmailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
