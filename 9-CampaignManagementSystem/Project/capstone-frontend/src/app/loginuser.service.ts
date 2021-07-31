import { SaveResponse } from './model/response-data';
import { CreatedFormDetail } from './model/data-models';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {LoginDetails} from './model/login-model';
import { Observable } from 'rxjs';
import { SurveyInfo } from './model/userdata';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl = 'http://192.168.10.41:8088/api/';

  constructor(private http: HttpClient) { }

  authenticateUser(theLoginBean : LoginDetails ): Observable<any> {
    console.log(theLoginBean);
    return this.http.post(`${this.baseUrl}`+"login", theLoginBean);
  }

  logoutUser(){
    console.log("I am sending logout() to spring");
    return this.http.get(`${this.baseUrl}`+"logout");
  }

  registration(formData){
    return this.http.post(`${this.baseUrl}`+"registration", formData);
  }

  saveFormFormat(theCreatedFormDetail: CreatedFormDetail){
    console.log(theCreatedFormDetail);
    return this.http.post(`${this.baseUrl}`+"dynamicform", theCreatedFormDetail);
  }

  // getSurveyList(){
  //   return  this.http.get(`${this.baseUrl}`+"surveyList");
  // }

  getSurveyList(user: string):Observable<any>{
    let requestedUser = {user: user};
    return  this.http.post(`${this.baseUrl}`+"surveyList", requestedUser);
  }

  getAllSurveyList(){
    return this.http.get(`${this.baseUrl}`+"getAllSurveyList");
  }

  getSurveyForm(id: number){
    return this.http.get(`${this.baseUrl}`+"survey/"+id);
  }

  saveResponseData(theData: SaveResponse){
    console.log(JSON.stringify(theData));
    return this.http.post(`${this.baseUrl}`+"saveResponse", theData);
  }

  getUserResponseList(){
    return this.http.get(`${this.baseUrl}`+"userresponseList");
  }

  publishSurvey(id: number){
    return this.http.get(`${this.baseUrl}`+"surveyList/"+id);
  }

  deleteSurvey(id: number){
    return this.http.delete(`${this.baseUrl}`+"delete/"+id);
  }

  inviteForRegistration(id: number, sendingList){
    return this.http.post(`${this.baseUrl}`+"invite/"+id, sendingList);
  }

  editSurveyForm(id: number, theCreatedFormDetail: CreatedFormDetail){
    return this.http.post(`${this.baseUrl}`+"editSurveyForm/"+id, theCreatedFormDetail);
  }

}









