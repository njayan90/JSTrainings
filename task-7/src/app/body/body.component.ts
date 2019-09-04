import { Component, OnInit } from '@angular/core';
import { GetNewsService } from '../get-news.service';
import { CurrentPageService } from '../current-page.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  newsObject: object[];
  add: boolean = false;
  filterWord: string;
  details: boolean;
  addedArticles = this.newsService.getAddArticles();
  constructor(private newsService: GetNewsService,
    private currentPage: CurrentPageService) { }

  ngOnInit() {
    this.getNewsObject();
    this.currentPage.addEmitter.subscribe(addBoolean => this.add = addBoolean);
    this.newsService.filterWordEmitter.subscribe(filter => this.filterWord = filter);
    this.currentPage.detailsEmitter.subscribe(details => this.details = details);
  }
  getNewsObject() {
    this.newsObject = this.newsService.getNewsObject();
  }

  fullDetails(news: object) {
    this.currentPage.detailsEmitter.next(true);
    this.newsService.setDetailedNews(news);

  }
  returnMainPage(){
    this.currentPage.detailsEmitter.next(false);
  }
}
