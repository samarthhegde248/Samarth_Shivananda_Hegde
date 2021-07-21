import { Component, OnInit } from '@angular/core';
import { SurveyInfo } from '../../model/userdata';
import { LoginuserService } from '../../loginuser.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-survey-form-list',
  templateUrl: './survey-form-list.component.html',
  styleUrls: ['./survey-form-list.component.css']
})
export class SurveyFormListComponent implements OnInit {

  email = [];
  todayDate;

  // listOfSurvey: Array<SurveyInfo>;
  listOfSurvey;
  constructor(private theLoginService: LoginuserService,
    private router: Router, private loc: Location) { }

  ngOnInit() {
    if(sessionStorage.getItem('role') == "admin"){
      this.getSurvey();
    }else {
      this.router.navigate(['/login']);
    }
  }

  getSurvey(){
    this.theLoginService.getAllSurveyList().subscribe(response =>{
      console.log(response);
      this.listOfSurvey = response;
    })
    this.todayDate = new Date();
    console.log(this.todayDate);
  }

  PublishSurvey(id){
    console.log("Publshing Survey "+id);
    // console.log("Email ->"+ this.email);
    this.theLoginService.publishSurvey(id).subscribe(
      response =>{
        console.log("Survey Published");
        this.getSurvey();
        this.router.navigate(['email', id]);
      }
    )
  }

  deleteSurvey(id: number){
    console.log("In Deleting Survey=====> "+id);
    this.theLoginService.deleteSurvey(id).subscribe(
      response => {
        console.log("Deleted the survey");
        this.getSurvey();
      })
  }

  navigateBack() {
    this.loc.back();
  }
}
