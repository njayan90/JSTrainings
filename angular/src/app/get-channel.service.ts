import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetChannelService {
  
  channel=["abc-news-au", "bbc-news", "cnn", "usa-today", "espn-cric-info"];
  constructor() { }
}
