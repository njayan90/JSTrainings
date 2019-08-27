import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  channelName:string="abc-news-au";
  add:boolean;
  @Output() channelEvent=new EventEmitter();
  @Output() addArticleEvent=new EventEmitter();
  @Output() filterEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 getChannelName(channel:string){
  this.channelName=channel;
  this.channelEvent.emit(this.channelName);
 }
 addArticle(addBoolean:boolean,channel:string){
  this.add=addBoolean;
  this.addArticleEvent.emit(this.add);
   }
filter(filterWord:string){
  this.filterEvent.emit(filterWord);
}
}
