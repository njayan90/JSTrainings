import { Component, OnInit } from '@angular/core';
import { CurrentPageService } from 'src/app/current-page.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  constructor(private currentPage:CurrentPageService) { }

  ngOnInit() {
  }
logout(){
  this.currentPage.setLogin(true);

}
}
