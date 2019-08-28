import { Component, OnInit, Input, Output, EventEmitter, DefaultIterableDiffer } from '@angular/core';
import { GetNewsService } from '../get-news.service';
import { CurrentPageService } from '../current-page.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  newsObject:object[];
  addedArticles=this.newsService.getAddArticles();
  detailedNews:Object;
   constructor(private newsService:GetNewsService,
    private currentPage:CurrentPageService) { }

  ngOnInit() {
  this.getNewsObject();
   
  }
  fullDetails(news:Object){
    this.detailedNews=news;
    this.currentPage.setDetails(true);
 }
  returnMainPage(){
    this.currentPage.setDetails(false);
   
  }
  getNewsObject(){
    this.newsObject=this.newsService.getNewsObject();
  }
}
