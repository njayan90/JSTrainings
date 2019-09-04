import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetNewsService {
  channel=["abc-news-au", "bbc-news", "cnn", "usa-today", "espn-cric-info","all-sources"];
  addedArticles=[];
  channelName:string;
  newsObject:object[]=[];
  detailedNews:object;
  filterWordEmitter=new Subject<string>();
  detailedNewsEmitter=new Subject<any>();
  constructor(private http:HttpClient) { }
  
  getNews(channel:string){
    return this.http.get("https://newsapi.org/v1/articles?source="+channel+"&apiKey=22353fef06da4464962eb721b7c78cb6");
  }
  getNewsObject(){
    for(let i=0;i<this.channel.length;i++){
      if(this.channel[i]!="all-sources"){
       this.getNews(this.channel[i]).subscribe(news=>this.newsObject[i]=news);
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
    return this.channelName;
  }
  setDetailedNews(news:object){
    this.detailedNews=news;
  }
  getDetailedNews(){
    return this.detailedNews;
  }
    }
