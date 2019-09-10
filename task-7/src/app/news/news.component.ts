import { Component, OnInit,Input } from '@angular/core';
import { GetNewsService } from '../get-news.service';
import { CurrentPageService } from '../current-page.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() news:any;
  add:boolean;
  details:boolean;
  filterWord:string;
  constructor(private newsService: GetNewsService,
    private currentPage: CurrentPageService) { }

  ngOnInit() {
   this.currentPage.addEmitter.subscribe(addBoolean => this.add = addBoolean);
   this.newsService.filterWordEmitter.subscribe(filter => this.filterWord = filter);
   this.currentPage.detailsEmitter.subscribe(details => this.details = details);
  }
  fullDetails(news: object) {
    this.currentPage.detailsEmitter.next(true);
    this.newsService.setDetailedNews(news);
   
  }
}
