import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginuserService } from '../../loginuser.service';

@Component({
  selector: 'app-user-email',
  templateUrl: './user-email.component.html',
  styleUrls: ['./user-email.component.css']
})
export class UserEmailComponent implements OnInit {

  surveyId: number;
  isAdmin: boolean= false;
  email: string;
  sendingList = {
    listOfEmail: ""
  }
  errorMsg = false;

  constructor(private theLoginService: LoginuserService,
    private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('role') == "admin"){
      this.isAdmin = true;
    }
    this.surveyId = parseInt(this.route.snapshot.paramMap.get("p1"));
    console.log("Survey name from id =>", this.surveyId);
  }
  goToAdmin(){
    console.log("goToAdmin Cicked");
    this.router.navigateByUrl('/admin');
  }

  onSubmit(){
    if(this.email == null || this.email == undefined){
      this.errorMsg = true;
    }else if(this.email.trim()==""){
      this.errorMsg = true;
    }else{

    console.log("Email id's =>", this.email);
    console.log("path id", this.surveyId);
    this.sendingList.listOfEmail = this.email.trim();
    this.theLoginService.inviteForRegistration(this.surveyId, this.sendingList).subscribe(
      response =>{
        console.log(response);
        // this.router.navigateByUrl("/admin");
        // alert("Your form is published successfully");
      }
      );
      this.router.navigateByUrl("/admin");
  }
  }

}
