import { Component, OnInit } from '@angular/core';
import { CurrentPageService } from '../current-page.service';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { FnParam } from '@angular/compiler/src/output/output_ast';


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
onSubmit(form: NgForm){
   if(this.auth.checkCredentials(form.value.username,form.value.password)){
      this.currentPage.setLogin(false);
      this.message="";
      }
      else{
        this.message="Invalid UserName/Password";
      }
     
  }

}
