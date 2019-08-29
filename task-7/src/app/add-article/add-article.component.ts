import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { CurrentPageService } from '../current-page.service';
import { GetNewsService } from '../get-news.service';



@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit{
  message:string="";
  channelName:string=this.getNews.getChannelName();
  addedArticles={
    source:"",
    title:"",
    description:"",
    publishedAt:"",
    urlToImage:""
  };
  constructor(private currentPage:CurrentPageService,
    private getNews:GetNewsService) { }

  ngOnInit() {
  }
  saveArticle(headline:string,description:string,date:string,img:string){
    if(headline && description && date && img){
      this.addedArticles.source=this.channelName;
      this.addedArticles.title=headline;
      this.addedArticles.description=description;
      this.addedArticles.publishedAt=date;
      this.addedArticles.urlToImage=img;
      this.getNews.setAddArticles(this.addedArticles);
      this.currentPage.setAdd(false);
      this.message="";
    }
    else{
     this.message="Incomplete fields";
    }
    return false;
  }
  returnMainPage()
  {
    this.currentPage.setAdd(false);
  }

  
  

}
