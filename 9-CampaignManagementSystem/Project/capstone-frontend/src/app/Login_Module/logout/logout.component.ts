import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../../loginuser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private theLoginService: LoginuserService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.clearSession();
  }

  clearSession(){
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("role");
      this.theLoginService.logoutUser().subscribe(response => {
        console.log("logout respoonse", response);
        this._router.navigateByUrl("/login");
      });
  }

}
