import { SurveyInfo } from '../../model/userdata';
import { LoginuserService } from '../../loginuser.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  listOfSurvey: Array<SurveyInfo>;
  data;

  constructor(private theLoginService: LoginuserService,
    private _router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('role') == "user"){
      let user = sessionStorage.getItem("email");
      this.theLoginService.getSurveyList(user).subscribe(response =>{
        console.log(response['surveylist']);
        this.listOfSurvey = response['surveylist'];
        // this.data = response['surveylist'].
      })
    }else {
      this._router.navigate(['/login']);
    }
    
  }

}
