import { Component, OnInit } from '@angular/core';
import { CurrentPageService } from 'src/app/current-page.service';
import { AuthService } from 'src/app/auth.service';
import { GetNewsService } from 'src/app/get-news.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  constructor(private currentPage:CurrentPageService, private auth: AuthService, private newsService:GetNewsService) { }

  ngOnInit() {
  }
logout(){
  this.newsService.setChannelName("abc-news-au");
  this.currentPage.loginEmitter.next(true);
  this.auth.logout();
}
}
