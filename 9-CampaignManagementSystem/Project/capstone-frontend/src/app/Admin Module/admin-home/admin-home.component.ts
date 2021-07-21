import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginuserService } from '../../loginuser.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  listOfAvailableSurvey;
  
  constructor(private theLoginService: LoginuserService,
    private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('role') == "admin"){
      this.getAllSurvey();
    }else {
      this._router.navigate(['/login']);
    }
  }

  getAllSurvey(){
    this.theLoginService.getAllSurveyList().subscribe(response =>{
      console.log(response);
      this.listOfAvailableSurvey = response;
    })
  }

}
