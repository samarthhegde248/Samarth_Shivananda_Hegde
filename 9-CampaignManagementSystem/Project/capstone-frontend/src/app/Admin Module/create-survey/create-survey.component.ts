import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Survey, Question, Option, CreatedFormDetail } from '../../model/data-models';
import { LoginuserService } from '../../loginuser.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

// import { StateService, State } from './state.service';

export interface QuestionType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  surveyTitleDuplicate=false;

  surveyFormName ="";
  surveyList;
  SurveytitleName;
  surveyListData;
  surveyForm: FormGroup;

  selectedOption = [];
  editMode = false;
  count = 0;
  urlid;
  todayDate;

  questions: QuestionType[] = [
    { value: 'radio', viewValue: 'Single choice(radio)' },
    { value: 'checkbox', viewValue: 'Multi choice(checkbox)' },
    { value: 'text', viewValue: 'Single line(text)' },
    { value: 'textarea', viewValue: 'Multiline(textarea)' }
  ];


  constructor(private theLoginService: LoginuserService, 
    private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('role') == "admin"){
      this.initForm();
      // this.surveyList = this.theLoginService.getAllSurveyList();
      // console.log("SurveyNames", this.surveyList);
      // this.getSurveytitleName();
      this.getSurvey();
    }else {
      this._router.navigate(['/login']);
    }
  }

  getSurvey(){
    this.theLoginService.getAllSurveyList().subscribe(response =>{
      console.log(response);
      this.surveyListData = response
      this.surveyList = this.surveyListData.map(
        function(a) {
          return a["form_title"];
      });
      console.log(this.surveyList);
      this.getSurveytitleName();
    })
  }

  getSurveytitleName(){
  
    for(let item in this.surveyList) {
      this.SurveytitleName = String(this.surveyList[item]);
      // console.log("Survey title names = > ", this.SurveytitleName);
    }
    
  }

  checkduplicateName(){
    console.log("Inside checking");
    for(let item in this.surveyList) {
      this.SurveytitleName = String(this.surveyList[item]);
      if(this.surveyForm.value.surveyTitle == this.SurveytitleName){
        this.surveyTitleDuplicate = true;
        console.log("Survey title names = > ", this.SurveytitleName);
        break;
      } else {
        this.surveyTitleDuplicate = false;
      }
    }
  }

  private initForm() {
    let surveyTitle = '';
    let surveyQuestions = new FormArray([]);

    this.surveyForm = new FormGroup({
      'surveyTitle': new FormControl(surveyTitle, [Validators.required]),
      'surveyQuestions': surveyQuestions,
      'availability': new FormControl(false),
      'endDatePicker': new FormControl()
    });

    this.onAddQuestion();

  }

  onAddQuestion() {
    console.log(this.surveyForm);
    this.count = this.surveyForm.controls.surveyQuestions['value'].length;
    
    const surveyQuestionItem = new FormGroup({
      'questionTitle': new FormControl('', Validators.required),
      'questionType': new FormControl('', Validators.required),
      'questionGroup': new FormGroup({})
    });
    
    console.log("Array size",this.surveyForm.controls.surveyQuestions['value'].length);
    (<FormArray>this.surveyForm.get('surveyQuestions')).push(surveyQuestionItem);
    
  }

  onRemoveQuestion(index) {
    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup = new FormGroup({});
    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionType = new FormControl({});

    (<FormArray>this.surveyForm.get('surveyQuestions')).removeAt(index);
    this.selectedOption.splice(index,1)
    console.log(this.surveyForm);

  }


  onSeletQuestionType(questionType, index) {
    if (questionType === 'radio' || questionType === 'checkbox') {
      this.addOptionControls(questionType, index)
    }
  }

  addOptionControls(questionType, index) {

    let options = new FormArray([]);
    // let showRemarksBox = new FormControl(false);

    (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('options', options);
    // (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('showRemarksBox', showRemarksBox);

    this.clearFormArray((<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options));

    this.addOption(index);
    this.addOption(index);
  }


  private clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }


  addOption(index) {
    const optionGroup = new FormGroup({
      'optionText': new FormControl('', Validators.required),
    });
    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options).push(optionGroup);
  }

  removeOption(questionIndex, itemIndex) {
    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][questionIndex].controls.questionGroup.controls.options).removeAt(itemIndex);
  }

  postSurvey() {

    let formData = this.surveyForm.value;
    console.log(formData);

    console.log();
    let ID = 0;
    let Type = formData.surveyType;
    let Title = formData.surveyTitle;
    let IsDeleted = formData.availability;
    let IsAnonymous = formData.IsAnonymous;
    let expiry = formData.endDatePicker;
    //  let Question: Question[] = [];
    let Questions = [];

    let surveyQuestions = formData.surveyQuestions;
    // let optionArray = formData.surveyQuestions[0].questionGroup.options[0].optionText
    // let survey = new Survey(ID, Type, Title, IsDeleted, IsAnonymous, Questions);
    let survey = new Survey(ID, Title, IsDeleted, expiry, Questions);


    surveyQuestions.forEach((question, index, array) => {


      let questionItem = {
        'ID': 0,
        "Type": question.questionType,
        "Text": question.questionTitle,
        "options": [],
        "Required": false,
        "Remarks": "",
        "hasRemarks": false

      }
      // if (question.questionGroup.hasOwnProperty('showRemarksBox')) {
      //   questionItem.hasRemarks = question.questionGroup.showRemarksBox;
      // }


      if (question.questionGroup.hasOwnProperty('options')) {
        question.questionGroup.options.forEach(option => {
          let optionItem: Option = {
            "ID": 0,
            "OptionText": option.optionText,
            "OptionColor": "",
            "hasRemarks": false
          }
          questionItem.options.push(optionItem)
        });
      }
      survey.Question.push(questionItem)
    });

    console.log('posting survey', survey);

    let pipe = new DatePipe('en-US');
    let now = Date.now();
    let createDate = pipe.transform(now, "yyyy-MM-dd hh:mm:ss");
    let endDate;
    if(survey.expiry == null){
      endDate = '';
    }else{
      endDate = pipe.transform(survey.expiry, "yyyy-MM-dd hh:mm:ss");
    }
    
    let theCreatedForm : CreatedFormDetail = new CreatedFormDetail(
      survey.Title, createDate, endDate, survey.IsDeleted, survey);
      this.surveyFormName=survey.Title;
    console.log(theCreatedForm);
    let receiveSave = this.theLoginService.saveFormFormat(theCreatedForm);
    receiveSave.subscribe(response => {
      console.log("After saving dynamic form", response['response']);
      this.urlid = response['response'];
      this.todayDate = new Date();
      let d1 = Date.parse(formData.endDatePicker)
      console.log("End date", formData.endDatePicker);
      console.log("Date", this.todayDate);

      if(formData.availability && ((d1 > this.todayDate)||(d1 == this.todayDate))){
        this._router.navigate(['email', this.urlid]);
      } else {
        this._router.navigate(['/admin']);
      }
      
    });
    
  }
  
  onSubmit() {

    this.postSurvey();

  }
}
