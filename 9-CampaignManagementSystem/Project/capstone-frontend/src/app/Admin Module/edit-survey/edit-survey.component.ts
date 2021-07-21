import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Survey, Question, Option, CreatedFormDetail } from '../../model/data-models';
import { LoginuserService } from '../../loginuser.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

export interface QuestionType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.css']
})
export class EditSurveyComponent implements OnInit {
  finalTitleName: string;
  savedForm;
  savedQuestions;
  surveyTitleDuplicate=false;

  surveyFormName ="";
  surveyList;
  SurveytitleName;
  surveyListData;

  surveyForm: FormGroup;

  selectedOption = [];

  editMode = true;

  count = 0;

  urlid: number;

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
      this.urlid = parseInt(this._route.snapshot.paramMap.get('id'));
      console.log(this.urlid);
      this.getSurvey();
      this.initForm();
      this.editForm();
    }else {
      this._router.navigate(['/login']);
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

  editForm(){
    
      this.theLoginService.getSurveyForm(this.urlid).subscribe(response =>{
        if(response['IsDeleted'] === false){
          this.savedForm = response;
            this.initSavedForm();
            this.savedQuestions = this.savedForm.Question;
            this.createExstingSurvey();
            console.log("Saved Questions", this.savedQuestions);
        } else {
          this._router.navigate(['admin']);
        }
        
            
      });
  }



  getSurvey(){
    this.theLoginService.getAllSurveyList().subscribe(response =>{

      for(let item in response){
        if(response[item].id == this.urlid){
          this.finalTitleName = response[item].form_title;
          console.log("Final title name =>", this.finalTitleName);
        }
      }

      console.log("GET SURVEY RESPONSE=> ",response);
      this.surveyListData = response
      this.surveyList = this.surveyListData.map(
        function(a) {
          return a["form_title"];
      });
  
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

  private initSavedForm() {
    let surveyTitle = this.savedForm.Title;
    let surveyQuestions = new FormArray([]);

    this.surveyForm = new FormGroup({
      'surveyTitle': new FormControl({value: this.finalTitleName, disabled: true}, [Validators.required]),
      'surveyQuestions': surveyQuestions,
      'availability': new FormControl(this.savedForm.IsDeleted),
      'endDatePicker': new FormControl(this.savedForm.expiry)
    });

    // this.onEditQuestion();



  }

  // onEditQuestion(){
  //   this.savedForm.Question.forEach(element => {
  //     // console.log("Questions =>",element);
  //   });
  // }

  createExstingSurvey(){
    for(let i=0; i<this.savedQuestions.length; i++){
      this.onAddSavedQuestion(this.savedQuestions[i].Text,this.savedQuestions[i].Type, i);
    }
  }

  onAddSavedQuestion(title, type, indexNo) {
    console.log(this.surveyForm);
    this.count = this.surveyForm.controls.surveyQuestions['value'].length;
    
    const surveyQuestionItem = new FormGroup({
      'questionTitle': new FormControl(title, Validators.required),
      'questionType': new FormControl(type, Validators.required),
      'questionGroup': new FormGroup({})
    });
    
    
    (<FormArray>this.surveyForm.get('surveyQuestions')).push(surveyQuestionItem);
    console.log("Array size",this.surveyForm.controls.surveyQuestions['value'].length);
    this.selectedOption.push(type);
    this.onSavedQuestionType(this.selectedOption[indexNo], indexNo);
    
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

  onSavedQuestionType(questionType, index) {
    if (questionType === 'radio' || questionType === 'checkbox') {
      this.savedOptionControls(questionType, index)
      
    }
  }

  savedOptionControls(questionType, index) {

    let options = new FormArray([]);
    // let showRemarksBox = new FormControl(false);

    (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('options', options);
    // (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('showRemarksBox', showRemarksBox);
    console.log("Checking here", this.surveyForm)
    for(let i=0; i<this.savedQuestions[index].options.length; i++){
      this.savedaddOption(index, this.savedQuestions[index].options[i].OptionText);
    }
    // this.clearFormArray((<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options));
    
  }

  addOptionControls(questionType, index) {

    let options = new FormArray([]);
    let showRemarksBox = new FormControl(false);

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

  savedaddOption(index, value) {
    
    const optionGroup = new FormGroup({
      'optionText': new FormControl(value, Validators.required),
    });
    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options).push(optionGroup);
    console.log("I AM IN savedOptionControls()", optionGroup['optionText']);
  }

  removeOption(questionIndex, itemIndex) {
    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][questionIndex].controls.questionGroup.controls.options).removeAt(itemIndex);
  }

  postSurvey() {

    let formData = this.surveyForm.value;
    console.log("Final form data=>",formData);

    console.log();
    let ID = 0;
    let Type = formData.surveyType;
    let Title = this.finalTitleName;
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
    let receiveSave = this.theLoginService.editSurveyForm(this.urlid, theCreatedForm);
    receiveSave.subscribe(response => {
      console.log("After saving dynamic form", response['response']);
      // this.urlid = response['response'];
      if(formData.availability){
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
