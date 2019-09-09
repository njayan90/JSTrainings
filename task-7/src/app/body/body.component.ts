import { Component, OnInit } from '@angular/core';
import { GetNewsService } from '../get-news.service';
import { CurrentPageService } from '../current-page.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  add: boolean = false;
  details: boolean;
  constructor(private newsService: GetNewsService,
    private currentPage: CurrentPageService) { }

  ngOnInit() {
   this.currentPage.addEmitter.subscribe(addBoolean => this.add = addBoolean);
   this.currentPage.detailsEmitter.subscribe(details => this.details = details);
  }
 
 fullDetails(news: object) {
    this.currentPage.detailsEmitter.next(true);
    this.newsService.setDetailedNews(news);

  }
  returnMainPage(){
    this.currentPage.detailsEmitter.next(false);
  }
}
