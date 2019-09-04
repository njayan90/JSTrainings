import { Component, OnInit } from '@angular/core';
import { CurrentPageService } from '../current-page.service';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string="";
  login:boolean=true;
  constructor(private currentPage:CurrentPageService, private auth:AuthService) { }

  ngOnInit() {
    this.currentPage.loginEmitter.subscribe(loginBoolean=>this.login=loginBoolean);
  }
onSubmit(form: NgForm){
   if(this.auth.checkCredentials(form.value.username,form.value.password)){
      this.currentPage.loginEmitter.next(false);
      this.message="";
      }
      else{
        this.message="Invalid UserName/Password";
      }
     
  }

}
