import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginuserService } from '../../loginuser.service';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-surveylist-details',
  templateUrl: './user-surveylist-details.component.html',
  styleUrls: ['./user-surveylist-details.component.css']
})
export class UserSurveylistDetailsComponent implements OnInit {

  listOfUserResponse;
  surveyName:any;
  surveyDate;
  surveyUser;
  listOfSurvey;

  surveyTitle;
  surveyLen = [];
  sorted = [];

  testdata = [];
  pipe = new DatePipe('en-US');

  displayChart = false;

  constructor(private LoginuserService: LoginuserService,
    private loc: Location,
    private _router: Router) { }

  ngOnInit(){
    if(sessionStorage.getItem('role') == "admin"){
      this.LoginuserService.getUserResponseList().subscribe(response =>{
      console.log(response);
      this.listOfUserResponse = response;
      this.  surveyTitle = this.listOfUserResponse.map(
        function(a) {
          return a["form_title"];
      });

      this.LoginuserService.getAllSurveyList().subscribe(response =>{
        console.log(response);
        this.listOfSurvey = response;
      })
      
      this.grouping();
    })
  } else {
    this._router.navigate(['/login']);
  }
}

grouping(){
  let grouped = _.mapValues(_.groupBy(this.listOfUserResponse, 'form_title'),
  rlist => rlist.map(res => _.omit(res, 'form_title')));

  this.sorted = Array.from(new Set(this.surveyTitle));

  console.log("Group 1 \n",grouped);

  console.log("Survey Name", this.sorted);
  console.log("Surey Test", this.testdata);
  // console.log("TEsting ===>", this.sorted[0]);
  for(let item in this.sorted){
    let x: string = String(this.sorted[item]);
    this.testdata.push(x);
    let xlen = grouped[x].length;
    this.surveyLen.push(xlen);
    console.log("Loop name"+ x +"Length "+xlen);
    console.log("Looping",grouped[x]);
  }
  console.log("Survey Length", this.surveyLen);
}

//Chart
// Bar Chart
public barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};

public barChartLabels = this.testdata;
public barChartType = 'bar';
public barChartLegend = true;
public barChartData = [
  {data: this.surveyLen, label: 'Number of Submissions'}
];

// public pieChartLabels = this.testdata;
// public pieChartData = this.surveyLen;
// public pieChartType = 'pie';

displaychart(){
  this.displayChart = !this.displayChart;
}

navigateBack() {
  this.loc.back();
}
}
