import { Component, OnInit, Input, Output, EventEmitter, DefaultIterableDiffer } from '@angular/core';
import { GetNewsService } from '../get-news.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Output() addEvent = new EventEmitter();
  @Output() detailedEvent=new EventEmitter();
  @Input() detailedTile:boolean;
  addedArticles=[];
  detailedNews:Object;
  @Input() add:boolean;
  @Input() channelName:string;
  @Input() newsObject:Object;
  
  constructor(private newsService:GetNewsService) { }

  ngOnInit() {
   this.newsService.getNews(this.channelName).subscribe(news=>this.newsObject=news);
   
  }
  fullDetails(news:Object){
    this.detailedNews=news;
    this.detailedTile=true;
    this.detailedEvent.emit(this.detailedTile);
  }
  returnMainPage(addBoolean:boolean){
    this.add=addBoolean;
    this.detailedTile=addBoolean;
    this.addEvent.emit(addBoolean);
  }
  addedNews(addedArticle){
    this.addedArticles.push(addedArticle);
    
  }

}
