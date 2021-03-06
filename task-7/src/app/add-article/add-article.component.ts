import { Component, OnInit } from '@angular/core';
import { CurrentPageService } from '../current-page.service';
import { GetNewsService } from '../get-news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit{
  message:string="";
  channelName:string;
  addedArticles={
    source:"",
    title:"",
    description:"",
    publishedAt:"",
    urlToImage:"",
    comments:[],
    commentCount:0
  };
  constructor(private currentPage:CurrentPageService,
    private getNews:GetNewsService, private route:Router) { }

  ngOnInit() {
    
  }
  saveArticle(headline:string,description:string,date:string,img:string){
    if(headline && description && date && img){
      this.addedArticles.source=this.getNews.getChannelName();
      this.addedArticles.title=headline;
      this.addedArticles.description=description;
      this.addedArticles.publishedAt=date;
      this.addedArticles.urlToImage=img;
      this.getNews.setAddArticles(this.addedArticles);
      this.currentPage.addEmitter.next(false);
      this.message="";
      this.route.navigate(['/news']);
      
    }
    else{
     this.message="Incomplete fields";
    }
    return false;
  }
  returnMainPage()
  {
    this.currentPage.addEmitter.next(false);
  }
}
