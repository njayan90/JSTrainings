import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:string;
  users= [{
    username:"admin",
    password:"admin"
  },
  {
  username:"user",
  password:"user"
  }]
  loggedIn:boolean= false;
  constructor() { }

  login(){
    this.loggedIn=true;
  }
  logout(){
    this.loggedIn=false;
  }

  isAuthenticated(){
    return(this.loggedIn);
  }

  checkCredentials(uName:string,pwd:string){
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].username===uName){
        if(this.users[i].password===pwd){
          this.user=uName;
          this.login();
          }
      }
    }
    return this.isAuthenticated();
  }
}
