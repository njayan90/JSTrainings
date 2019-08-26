import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetNewsService {

  constructor(private http:HttpClient) { }
  
  getNews(channel:string){
    return this.http.get("https://newsapi.org/v1/articles?source="+channel+"&apiKey=63128184083f4ff4a674e1b52b964cd2");
  }
}
