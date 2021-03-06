import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { CurrentPageService } from 'src/app/current-page.service';
import { GetNewsService } from 'src/app/get-news.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.css']
})
export class HeaderBottomComponent implements OnInit {
  channel:string[]=[];
  button:any;
  channelName:string='abc-news-au';
  filterword:string="";
  constructor(private currentPage:CurrentPageService, private get:GetNewsService , private authService:AuthService, private router: Router) { }

  ngOnInit() {
    this.channel=this.get.channel;
    this.get.setChannelName(this.channelName);
  }
  getChannelName(chName:string){
    this.router.navigate(["/news"]);
    this.get.setChannelName(chName);
    this.get.getSourceNews();
    this.currentPage.addEmitter.next(false);
    this.currentPage.detailsEmitter.next(false);
  }
  
  filter(filterWord:string){
      this.filterword=filterWord;
      this.get.filterWordEmitter.next(filterWord);
      this.button=document.getElementById("filter");
      this.button.value="";
      
  }
  setAdd(){
   this.currentPage.addEmitter.next(true);
    }
  clearFilter(){
    this.get.filterWordEmitter.next("");
    this.filterword="";
  }
 }
