import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginuserService } from '../../loginuser.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as XLSX from 'xlsx'; 
import * as jsPDF from 'jspdf';
// import * as _ from 'lodash';
import html2canvas from 'html2canvas';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-survey-list-submission-details',
  templateUrl: './survey-list-submission-details.component.html',
  styleUrls: ['./survey-list-submission-details.component.css']
})

export class SurveyListSubmissionDetailsComponent implements OnInit {

  surveyTitleName;
  listOfUserResponse;
  listOfSurvey;
  surveyTitle;
  numberOfSurveyResponse = 0;
  creationDate;
  sorted;
  sortedNewArr = [];
  dataSorted: any [];
  newArrsubmission = [];
  dataForTable = [];

  labelData = [];
  chartData = [];
  labelSurvey = "";

  @ViewChild('htmlData', {static:false}) htmlData:ElementRef;

  pipe = new DatePipe('en-US');

  submissionDates;

  displayChart = false;
  

  constructor(private LoginuserService: LoginuserService,
        private activateRoute: ActivatedRoute, 
        private loc: Location,
        private _router: Router) { 
        }

  ngOnInit(){
    if(sessionStorage.getItem('role') == "admin"){
      this.surveyTitleName = this.activateRoute.snapshot.paramMap.get("title");
      console.log("Survey Title", this.surveyTitleName)

      this.labelSurvey = this.surveyTitleName;
      
      this.LoginuserService.getUserResponseList().subscribe(response =>{
        console.log("listOfUserResponse",response);
        this.listOfUserResponse = response;
        this.surveyTitle = this.listOfUserResponse.map(
          function(a) {
            return a["form_title"];
        });
    
        this.LoginuserService.getAllSurveyList().subscribe(response =>{
          console.log("listOfSurvey",response);
          this.listOfSurvey = response;
          this.getCreationDate();
        })
        this.grouping();

        // const groupBy = (array, key) => {
        //   // Return the end result
        //   return array.reduce((result, currentValue) => {
        //     // If an array already present for key, push it to the array. Else create an array and push the object
        //     (result[currentValue[key]] = result[currentValue[key]] || []).push(
        //       currentValue
        //     );
        //     // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        //     return result;
        //   }, {}); // empty object is the initial value for result object
        // };


        // const personGroupedByColor = groupBy(this.listOfUserResponse, 'form_title');
        // console.log("Sorted New", personGroupedByColor);
      });
    } else {
      this._router.navigate(['/login']);
    }
  }

  grouping(){
    let grouped = _.mapValues(_.groupBy(this.listOfUserResponse, 'form_title'),
    rlist => rlist.map(res => _.omit(res, 'form_title')));

    console.log("Group 1 \n",grouped);

    if(grouped[this.surveyTitleName] == undefined){
      this.numberOfSurveyResponse = 0;
    }else{
    this.numberOfSurveyResponse = grouped[this.surveyTitleName].length;
    }
    console.log("Number of Responses ",this.numberOfSurveyResponse);
    console.log("Sorted array", grouped[this.surveyTitleName]);
    this.dataForTable = grouped[this.surveyTitleName];
    let submission = _.mapValues(_.groupBy(grouped[this.surveyTitleName], 'submitdate'),
    dlist => dlist.map(res => _.omit(res,'submitdate')));

    console.log("Submission Dates", submission);
    // console.log(this.pipe.transform(submission, 'mediumDate'));

    let result = this.listOfUserResponse.map(a => this.pipe.transform(a.submitdate),'mediumDate');
    console.log("Result => ", result);

    let newArrresult = null;
    if(grouped[this.surveyTitleName] != undefined){
      newArrresult = grouped[this.surveyTitleName].map(a => this.pipe.transform(a.submitdate),'mediumDate');
      console.log("newArrresult => ", newArrresult);
    }
    //Sorting newArrresult
    let res = Array.from(new Set(newArrresult));
    for(let i=0; i< res.length; i++){
      this.sortedNewArr.push(res);
    }
    
    console.log("Sorted New Arr by sorting", this.sortedNewArr);
    let tempLabelData = [];
    this.sortedNewArr.forEach((item,index)=>{
      tempLabelData.push(item[index]);
      console.log(tempLabelData);
      this.labelData.push(tempLabelData);
      tempLabelData = [];
    });
    
    let results = _.mapValues(_.groupBy(newArrresult));
    if(results[this.sortedNewArr[0]] != undefined){
    console.log("new sorted new Arr", results[this.sortedNewArr[0]].length);
    this.newArrsubmission.push(results[this.sortedNewArr[0]].length);
    }

    
    // var newArrRes = [];

    // let newArr = grouped[this.surveyTitleName];
    // console.log("****", newArr);
    // for(let i=0; i<newArr.length; i++){
    //   console.log("Inside New Arr", newArr[i].submitdate);
    //   let res  = newArr.map(a => this.pipe.transform(a.submitdate),'mediumDate');
    //   newArrRes.push(res);
    // }
    // console.log("Formated date from new Arr", newArrRes);
    // let newArrsubmission = _.mapValues(_.groupBy(newArrRes));
    // console.log("new sorted new Arr", newArrsubmission);

    // for(let i=0; i<2; i++){
    //   console.log("new sorted new Arr", newArrsubmission.length);
    // }

    
    console.log("***********");
    if(grouped[this.labelSurvey] == undefined){
      this.labelData.forEach(item =>
        this.chartData.push(0))
    }else{
      this.labelData.forEach(item =>
        this.chartData.push(0));

      this.labelData.forEach((item, index) =>
        grouped[this.labelSurvey].forEach(element => {
          let checkDate = this.pipe.transform(element["submitdate"],'mediumDate');
          if(item[0] === checkDate){
            this.chartData[index] += 1; 
          }
        })

      );
    }
    console.log("LABEL DATA: ", this.labelData);
    console.log("CHART DATA: ", this.chartData);
    console.log("***********");

    // var map = {}; 
    //   this.listOfUserResponse.forEach(function(val){
    //   map[val.submitdate] = map[val.submitdate] || {};
    //   map[val.submitdate][val.type] = map[val.submitdate][val.form_title] || 0;
    //   map[val.submitdate][val.form_title]++;
    // });
    // console.log("Map", map);

    //Sorting for Table

  }

  getCreationDate(){
    console.log("Hello");
    this.listOfSurvey.forEach((item, index) => {
      console.log(item);
      if(item.form_title == this.surveyTitleName)
        this.creationDate = item.created_date;
    });
    // for(var item in this.listOfSurvey){
      
    //   if(this.listOfSurvey[item].form_title == this.surveyTitleName)
    //     this.creationDate = this.listOfSurvey[item].created_date;
    //   }
  }
  

  navigateBack() {
    this.loc.back();
  }
  
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[]= this.labelData;
  public pieChartData: ChartDataSets[]= this.chartData;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public chartColors: any[] = [
    { 
      backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"] 
    }];
    // events
  // public chartClicked(e: any): void {
  //   console.log(e);
  // }

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }

  // public randomize(): void {
  //   let data = [
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.random() * 100,
  //     Math.round(Math.random() * 100),
  //     Math.random() * 100,
  //     Math.round(Math.random() * 100)
  //   ];
  //   let clone = JSON.parse(JSON.stringify(this.pieChartData));
  //   clone[0].data = data;
  //   this.pieChartData = clone;
  // }

  
//////////////////////////////////////////////////////////////////////////////////////////

  //   public barChartOptions:any = {
  //     scaleShowVerticalLines: false,
  //     responsive: true
  //   };
    
  //   public mbarChartLabels:string[] = this.labelData;
  //   public barChartType:string = 'bar';
  //   public barChartLegend:boolean = true;
  
  //   public barChartColors:Array<any> = [
  //   {
  //     backgroundColor: 'rgba(105,159,177,1)',
  //     borderColor: 'rgba(105,159,177,1)',
  //     pointBackgroundColor: 'rgba(105,159,177,1)',
  //     pointBorderColor: '#fafafa',
  //     pointHoverBackgroundColor: '#fafafa',
  //     pointHoverBorderColor: 'rgba(105,159,177)'
  //   },
  //   { 
  //     backgroundColor: 'rgba(77,20,96,0.8)',
  //     borderColor: 'rgba(77,20,96,1)',
  //     pointBackgroundColor: 'rgba(77,20,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,20,96,1)'
  //   }
  // ];
  //   public barChartData:any[] = [
  //     {data: this.chartData, label: this.labelSurvey}
  //   ];
  
  //   // events
  //   public chartClicked(e:any):void {
  //     console.log(e);
  //   }
  
  //   public chartHovered(e:any):void {
  //     console.log(e);
  //   }
  
  //   public randomize():void {
  //     let data = [
  //       Math.round(Math.random() * 100),
  //       Math.round(Math.random() * 100),
  //       Math.round(Math.random() * 100),
  //       (Math.random() * 100),
  //       Math.round(Math.random() * 100),
  //       (Math.random() * 100),
  //       Math.round(Math.random() * 100)];
  //     let clone = JSON.parse(JSON.stringify(this.barChartData));
  //     clone[0].data = data;
  //     this.barChartData = clone;
  //   }







///////////////////////////////////////////////////////////////////////////////

  // barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // barChartLabels: Label[] = this.sortedNewArr;
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];

  // barChartData: ChartDataSets[] = [
  //   { data: this.newArrsubmission, label: 'Best Fruits' }
  // ];

  displaychart() {
    this.displayChart = !this.displayChart;
  }
  
  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, `${this.surveyTitleName}.xlsx`);
			
    }

    public downloadPDF():void {
      let DATA = this.htmlData.nativeElement;
      // https://stackoverflow.com/questions/55019343/how-to-generate-a-pdf-using-angular-7
      let doc = new jsPDF('p','pt', 'a4');
  
      let handleElement = {
        '#editor':function(element,renderer){
          return true;
        }
      };
      doc.fromHTML(DATA.innerHTML,15,15,{
        'width': 200,
        'elementHandlers': handleElement
      });
  
      doc.save(`${this.surveyTitleName}.pdf`);
    }

}
