import { Component, OnInit } from '@angular/core';
import { CurrentPageService } from '../current-page.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;
  constructor(private currentPage:CurrentPageService) { }

  ngOnInit() {
  }
  checkLogin(username:string, password:string){
    if(username==="admin" && password==="admin"){
    this.currentPage.setLogin(false);
    
    }
    else{
      this.message="Invalid Username/Password";
    }
    return false;
  }

}
