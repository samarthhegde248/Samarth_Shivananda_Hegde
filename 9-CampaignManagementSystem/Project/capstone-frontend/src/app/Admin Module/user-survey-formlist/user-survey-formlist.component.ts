import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginuserService } from '../../loginuser.service';
import * as XLSX from 'xlsx'; 
import * as jsPDF from 'jspdf';
import autoTable from  'jspdf-autotable';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { List } from 'material-ui';

@Component({
  selector: 'app-user-survey-formlist',
  templateUrl: './user-survey-formlist.component.html',
  styleUrls: ['./user-survey-formlist.component.css']
})
export class UserSurveyFormlistComponent implements OnInit {
  listOfUserResponse;
  displayResponse;
  surveyName:any;
  surveyDate;
  surveyUser;
  fileName= 'ExcelSheet.xlsx';

  newResponseList = [];

  startdate;
  enddate;

  surveyTitle;

  pipe = new DatePipe('en-US');

  @ViewChild('htmlData', {static:false}) htmlData:ElementRef;

  constructor(private LoginuserService: LoginuserService,
    private loc: Location,
    private _router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('role') == "admin"){
    this.LoginuserService.getUserResponseList().subscribe(response =>{
      console.log("Response",response);
      this.listOfUserResponse = response;
      this.surveyTitle = this.listOfUserResponse.map(
        function(a) {
          return a["form_title"];
      });

      for(var item in this.listOfUserResponse){
        console.log("item =>"+this.listOfUserResponse[item].submitdate);
        this.surveyName = this.listOfUserResponse[item].form_title;
        this.surveyDate = this.pipe.transform(this.listOfUserResponse[item].submitdate, 'mediumDate');
        this.surveyUser = this.listOfUserResponse[item].usermail;
        console.log(this.surveyDate +"\t"+ this.surveyName +"\t" +this.surveyUser);
      }
      this.displayResponse = this.listOfUserResponse
      console.log(this.surveyName);
      this.grouping();
    })
  } else {
    this._router.navigate(['/login']);
  }
  }

  grouping(){
    let grouped = _.mapValues(_.groupBy(this.listOfUserResponse, 'form_title'),
    rlist => rlist.map(res => _.omit(res, 'form_title')));

    let sorted = this.surveyTitle.filter((item, index) => this.surveyTitle.indexOf(item) === index);

    // console.log("Group 1 \n",grouped);
    // console.log("Survey Name", sorted);
    // console.log("Sort \n",grouped[this.surveyName].length);
    // console.log("Sorting");
    // for(var item in grouped){
    //   console.log("item =>",grouped[item]);
    // }
  }
  
  filter(){
    this.newResponseList.splice(0,this.newResponseList.length);

    console.log("StartDate=>",this.startdate);
    console.log("EndDate=>",this.enddate);

    for(let item in this.listOfUserResponse){
      let formData = this.listOfUserResponse[item]

      this.surveyDate = this.pipe.transform(this.listOfUserResponse[item].submitdate, 'yyyy-MM-dd');
    console.log("forDate=>",this.surveyDate);

      let start = this.listOfUserResponse[item].submitdate;
      let end = this.listOfUserResponse[item].submitdate

      if((this.surveyDate >= this.startdate) && (this.surveyDate <= this.enddate))  {
        this.newResponseList.push(formData);
      }
      
    } console.log("New Response List", this.newResponseList);
    this.displayResponse = this.newResponseList;
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
       XLSX.writeFile(wb, this.fileName);
			
    }

    // public downloadPDF():void {
    //   let DATA = this.htmlData.nativeElement;
    //   let doc = new jsPDF('p','pt', 'a4');
  
    //   let handleElement = {
    //     '#editor':function(element,renderer){
    //       return true;
    //     }
    //   };
    //   doc.fromHTML(DATA.innerHTML,15,15,{
    //     'width': 100,
    //     'elementHandlers': handleElement
    //   });
  
    //   doc.save('angular-demo.pdf');
    // }

    // public downloadPDF(){
    //   const doc = new jsPDF();
    //   autoTable(doc,{html: '#excel-table'})
    //   doc.save('table.pdf');
    // }
    
    navigateBack() {
      this.loc.back();
    }
}
