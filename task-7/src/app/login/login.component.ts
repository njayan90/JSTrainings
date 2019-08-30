import { Component, OnInit } from '@angular/core';
import { CurrentPageService } from '../current-page.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;
  constructor(private currentPage:CurrentPageService, private auth:AuthService) { }

  ngOnInit() {
  }
  checkLogin(username:string, password:string){
    if(username==="admin" && password==="admin"){
    this.currentPage.setLogin(false);
    this.auth.login();
    this.message="";
    }
    else{
      this.message="Invalid Username/Password";
    }
    return false;
  }

}
