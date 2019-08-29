import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentPageService {
  add:boolean;
  details:boolean;
  login:boolean=true;
  constructor() { }

  setAdd(value:boolean){
    this.add=value;
  }
  setDetails(value:boolean){
    this.details=value;
}
  getAdd(){
    return(this.add);
  }
  getDetails(){
    return(this.details);
  }
  setLogin(value:boolean){
    this.login=value;
  }
  getLogin(){
    return(this.login);
  }
}
