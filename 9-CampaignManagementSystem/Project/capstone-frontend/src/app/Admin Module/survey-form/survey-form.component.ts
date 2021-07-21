import { SendingResponse, SaveResponse } from '../../model/response-data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { LoginuserService } from '../../loginuser.service';
import {Router, ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  id: number;

  userForm = new FormGroup({
    Que0: new FormControl(),
    Que1: new FormControl(),
    Que2: new FormControl(),
    Que3: new FormControl(),
    Que4: new FormControl(),
    Que5: new FormControl(),
    });

  jsonData = {
    surveyTitle: '',
    surveyQuestions: ''
  }

  submitted = false;

  constructor(private fb: FormBuilder, private theLoginService: LoginuserService,
    private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('role') == "user"){
      this.initializeValueOnStartUp();
    } else {
      this._router.navigate(['/login']);
    }
    
  }

  initializeValueOnStartUp(){
    this._route.params.subscribe(params => {
      this.id = params['id'];
     console.log('Url Id: ',this.id); });
   this.theLoginService.getSurveyForm(this.id).subscribe(response =>{
     console.log(response);
    const jsonData = {
      surveyTitle: response['Title'],
      surveyQuestions: response['Question']
    }
    this.jsonData = jsonData;
    //  jsonData.surveyTitle = response['Title'];
    //  jsonData.surveyQuestions=response['Question'];
     console.log("After getting from backend", this.jsonData);
   });
  }

  onSubmit(){
    this.submitted = true;
    // console.log(this.jsonData.surveyQuestions['0']['Text']);
    // console.log("Form Submitted");
    // console.log(this.userForm.value);
    let theResponse : Array<SendingResponse>= [];

    for(var item of this.jsonData.surveyQuestions){
      // console.log("ITEM",this.jsonData.surveyQuestions.indexOf(item), item['Text']);
      // console.log("ITEM ANS", this.userForm.value["Que"+this.jsonData.surveyQuestions.indexOf(item)]);
      let itemPush: SendingResponse = new SendingResponse(item['Text'],
      this.userForm.value["Que"+this.jsonData.surveyQuestions.indexOf(item)])
      console.log(itemPush);
      theResponse.push(itemPush);
    }

    // theResponse.question0 = this.jsonData.surveyQuestions['0']['Text'];
    // theResponse.answer0 = this.userForm.value['Que0'];
    // console.log("Sending Response",theResponse);
    let pipe = new DatePipe('en-US');
    let now = Date.now();
    let createDate = pipe.transform(now, "yyyy-MM-dd hh:mm:ss");
    let usermail: string = sessionStorage.getItem("email");
    let theSaveResponse : SaveResponse = new SaveResponse(usermail, createDate,this.jsonData.surveyTitle, theResponse);
    this.theLoginService.saveResponseData(theSaveResponse).subscribe(response=>{
      console.log(response);
      this._router.navigateByUrl("/user");
    });
  }

  onChange(opt, evnt){
    console.log(opt);
    console.log(evnt.name);
    console.log(evnt.checked);
    
    let opts = new Array();
    let savedOpts: string = this.userForm.get(evnt.name).value;
    let newOpts: string;
    if(savedOpts != null && savedOpts != undefined && savedOpts != ""){
      opts = savedOpts.split(",");
    }
    
    if(evnt.checked) {
      opts.push(opt);
    } else {
      opts = this.removeElement(opts, opt);
    }
    console.log("Already stored: ", opts);
    newOpts = opts.join(",");
    this.userForm.controls[evnt.name].setValue(newOpts);
    console.log("Final storing :",this.userForm.controls[evnt.name].value);
  }

  removeElement(opts: Array<any>, opt:string): Array<any> {
    let newOpts : string[] = [];
    for(var index in opts)
      { 
           if(opt !== opts[index] ){
             newOpts.push(opts[index]);
           }
      }
    return newOpts;
  }




}

