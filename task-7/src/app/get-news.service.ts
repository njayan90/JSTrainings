import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetChannelService } from './get-channel.service';

@Injectable({
  providedIn: 'root'
})
export class GetNewsService {
  addedArticles=[];
  newsObject:object[]=[];
  channelName:string="abc-news-au";
  filterWord:string;
  constructor(private http:HttpClient,
    private getChannel:GetChannelService ) { }
  
  getNews(channel:string){
    return this.http.get("https://newsapi.org/v1/articles?source="+channel+"&apiKey=7fb5947dd79d4f14a11e0b19cca679d2");
  }
  getNewsObject(){
    for(let i=0;i<this.getChannel.channel.length;i++){
      if(this.getChannel.channel[i]!="all-sources"){
       this.getNews(this.getChannel.channel[i]).subscribe(news=>this.newsObject[i]=news);
      }
     }
   return(this.newsObject);
  }
  setAddArticles(addedArticle:any){
    this.addedArticles.push(addedArticle);
      }
  getAddArticles(){
    return(this.addedArticles);
  }
  setChannelName(channel:string){
    this.channelName=channel;
  }
  getChannelName(){
    return(this.channelName);
  }
  setFilterWord(filterWord:string){
    this.filterWord=filterWord;
    
  }
  getFilterWord(){
    return(this.filterWord);
  }
}
