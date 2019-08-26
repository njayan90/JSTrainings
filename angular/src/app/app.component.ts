import { Component,OnInit, Input } from '@angular/core';
import { GetNewsService } from './get-news.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  channelName:string="abc-news-au";
  newsObject:Object;
  @Input() add:boolean=false;
  detailedTile:boolean=false;
  constructor(private newsEvent:GetNewsService){

  }
  ngOnInit(){
    
  }
  getChannelName(channel:string){
    this.channelName=channel;
    this.newsEvent.getNews(this.channelName).subscribe(news=>this.newsObject=news);
    this.add=false;
    this.detailedTile=false;
      
  }
  addArticle(addBoolean:boolean){
    this.add=addBoolean;
   
    
  }
  details(detailsBoolean:boolean){
    this.detailedTile=detailsBoolean;
  }
  
}
