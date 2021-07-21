import { LoginuserService } from './../../loginuser.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { LoginDetails } from '../../model/login-model';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidUser = false;
  surveyList;
  filteredSurveyList = [];

  constructor(private theLoginService: LoginuserService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.initForm();
    this.getSurvey();
  }

  private initForm() {
    let username = '';
    let password = '';

    this.loginForm = new FormGroup({
      'username': new FormControl(username, [Validators.required]),
      'password': new FormControl(password, [Validators.required]),
    });

  }

  getSurvey(){
    this.theLoginService.getAllSurveyList().subscribe(
      response => { 
        console.log("SurveyList", response);
        this.surveyList = response;
        this.filterSurveyList();
      });
  }

  filterSurveyList(){
    let pipe = new DatePipe('en-US');
    let now = Date.now();
    let nowDate = pipe.transform(now, "yyyy-MM-dd hh:mm:ss");
    this.surveyList.forEach((element, index) => {
      if(element.available == true && pipe.transform(element.end_date, "yyyy-MM-dd hh:mm:ss") > nowDate){
        this.filteredSurveyList.push(element);
      }
    });
  }

  doLogin(){
    let loginData = this.loginForm.value;
    console.log(loginData);
    let username = loginData.username;
    let password = loginData.password;
    let sessionRole: string = "failed";
    console.log(username);
    console.log(password);
    this.theLoginService.authenticateUser(loginData).subscribe( response =>
      {
        console.log("Authentication doLogin()", response);
        sessionRole = response.access;
        console.log(sessionRole);
        if(!(sessionRole === "failed")){
          this.invalidUser = false;
          let email : string = username
          sessionStorage.setItem("role", sessionRole);
          sessionStorage.setItem("email", email);
          if(sessionRole == "admin"){
            this._router.navigateByUrl("/admin");
          }else{
            this._router.navigateByUrl("/user");
          }
        }else {
          this.invalidUser = true;
        }
      });
  }

}
