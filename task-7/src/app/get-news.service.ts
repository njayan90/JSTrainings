import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetNewsService {
  channel = ["abc-news-au", "bbc-news", "cnn", "usa-today", "espn-cric-info", "all-sources"];
  channelName: string;
  newsObject: any[] = [];
  news: any;
  detailedNews: object;
  filterWordEmitter = new Subject<string>();
  detailedNewsEmitter = new Subject<any>();
  constructor(private http: HttpClient, private auth: AuthService) { }

  getNews(channel: string) {
    return this.http.get("https://newsapi.org/v1/articles?source=" + channel + "&apiKey=abeed8e8d0574328bcaf7c46abe12d90");
  }
  getNewsObject() {
    for (let i = 0; i < this.channel.length; i++) {
      if (this.channel[i] != "all-sources") {
        this.getNews(this.channel[i]).subscribe((news) => {
          news['articles'].forEach(element => {
            element.comments = [];
            element.commentCount = 0;
          });
          this.newsObject[i] = news;
        });
      }
    }
    return (this.newsObject);
  }
  setAddArticles(addedArticle: any) {
    for (let i = 0; i < this.newsObject.length; i++) {
      if (addedArticle.source === this.newsObject[i].source) {
        this.newsObject[i].articles.push(addedArticle);
        break;
      }
    }
  }

  setChannelName(channel: string) {
    this.channelName = channel;
   }
  getChannelName() {
    return this.channelName;
  }
  setDetailedNews(news: object) {
    this.detailedNews = news;
  }
  getDetailedNews() {
    return this.detailedNews;
  }

  commentUpdate(title: string, comment: string) {
    for (let i = 0; i < this.newsObject.length; i++) {
      if (this.newsObject[i].source === this.getChannelName()) {
        for (let j = 0; j < this.newsObject[i].articles.length; j++) {
          if (this.newsObject[i].articles[j].title === title) {
            this.newsObject[i].articles[j].comments[this.newsObject[i].articles[j].commentCount] = { 'user': this.auth.user, 'comment': comment };
            this.newsObject[i].articles[j].commentCount++;
            return this.newsObject[i].articles[j];
          }

        }
      }
    }
  }
  getSourceNews() {
    if (this.getChannelName() != 'all-sources') {
      this.news = this.newsObject.find(news => news.source === this.getChannelName())
      return (this.news);
    }
    else {
      return (this.newsObject);
    }
  }
}

