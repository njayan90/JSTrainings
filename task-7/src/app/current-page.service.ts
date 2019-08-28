import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentPageService {
  add:boolean=false;
  details:boolean=false;
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
}
