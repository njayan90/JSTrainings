import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { CurrentPageService } from 'src/app/current-page.service';
import { GetNewsService } from 'src/app/get-news.service';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.css']
})
export class HeaderBottomComponent implements OnInit {
  channel:string[]=[];
  channelName:string='abc-news-au';
  constructor(private currentPage:CurrentPageService, private get:GetNewsService , private authService:AuthService) { }

  ngOnInit() {
    this.channel=this.get.channel;
    this.get.setChannelName(this.channelName);
  }
  getChannelName(chName:string){
    this.get.setChannelName(chName);
    this.currentPage.addEmitter.next(false);
  }
  
  filter(filterWord:string){
    this.get.filterWordEmitter.next(filterWord);
  }
  setAdd(){
   this.currentPage.addEmitter.next(true);
    }
 

}
