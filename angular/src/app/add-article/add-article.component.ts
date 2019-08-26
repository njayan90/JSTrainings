import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit{
  @Output() addEvent = new EventEmitter();
  @Input() channelName:string;
  @Output() addedNewsEvent=new EventEmitter();
  addedArticles={
    source:"",
    title:"",
    description:"",
    publishedAt:"",
    urlToImage:""
  };
  constructor() { }

  ngOnInit() {
  }
  saveArticle(headline:string,description:string,date:string,img:string){
    this.addedArticles.source=this.channelName;
    this.addedArticles.title=headline;
    this.addedArticles.description=description;
    this.addedArticles.publishedAt=date;
    this.addedArticles.urlToImage=img;
    this.addedNewsEvent.emit(this.addedArticles);
    this.addEvent.emit(false);
  }
  returnMainPage()
  {
    this.addEvent.emit(false);
  }

  

}
