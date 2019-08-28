import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { GetChannelService } from 'src/app/get-channel.service';
import { CurrentPageService } from 'src/app/current-page.service';
import { GetNewsService } from 'src/app/get-news.service';


@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.css']
})
export class HeaderBottomComponent implements OnInit {
  channel:string[]=[];
  channelName:string;
  constructor(private getChannel:GetChannelService,
    private currentPage:CurrentPageService, private get:GetNewsService) { }

  ngOnInit() {
    this.channel=this.getChannel.channel;
  }
  getChannelName(channel:string){
    this.get.setChannelName(channel);
    this.currentPage.setAdd(false);
    this.currentPage.setDetails(false);
  }
  
  filter(filterWord:string){
    this.get.setFilterWord(filterWord);
  }
  setAdd(){
    this.currentPage.setAdd(true);
    }
 

}
