import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginuserService } from '../../loginuser.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // registrationForm: FormGroup;
  checkEmail = false;
  userRole = '';

  constructor(private LoginService: LoginuserService,
        private router: Router,
        private loc: Location) { }

  ngOnInit() {
    if(sessionStorage.getItem('role') == "admin"){
      this.userRole = 'admin';
    } else {
      this.userRole = 'user';
    }
  }
  
  registrationForm = new FormGroup({
    'firstname': new FormControl('', [Validators.required]),
    'lastname': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required, Validators.pattern("[^ @]*.[^ @]*@[^ @]*.com")]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
    'role': new FormControl(this.userRole)
  });

  onSubmit(){
    console.log("Form Data", this.registrationForm.value);
    var data = {
      firstname: this.registrationForm.controls.firstname.value,
      lastname: this.registrationForm.controls.lastname.value,
      email: this.registrationForm.controls.email.value,
      password: this.registrationForm.controls.password.value,
      role: this.userRole    }
    console.log(data);
  
    this.LoginService.registration(data).subscribe(
      response =>{
        if(response != null){
          console.log("User Registered Successfully" +response);
          if(this.userRole == "admin"){
            console.log("To admin");
            this.router.navigateByUrl("/admin");
          } else{
            this.router.navigate(['/login']);
          }
          
        }
        this.checkEmail = true;
        // console.log("User already exists");
      }
    )
  }

  navigateBack() {
    this.loc.back();
  }
}
