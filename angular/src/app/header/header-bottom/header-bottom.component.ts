import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { GetChannelService } from 'src/app/get-channel.service';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.css']
})
export class HeaderBottomComponent implements OnInit {
  channel:string[]=[];
  channelName:string;
  add:boolean=false;
  @Output() channelEvent=new EventEmitter();
  @Output() addEvent=new EventEmitter();
  constructor(private getChannel:GetChannelService) { }

  ngOnInit() {
    this.channel=this.getChannel.channel;
  }
  getChannelName(channel:string){
    this.channelName=channel;
    this.channelEvent.emit(this.channelName);
  }
  addArticle(){
    this.add=true;
    this.addEvent.emit(this.add);
  }
 

}
