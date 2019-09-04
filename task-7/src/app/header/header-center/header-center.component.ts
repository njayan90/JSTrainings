import { Component, OnInit, Input } from '@angular/core';
import { GetNewsService } from 'src/app/get-news.service';

@Component({
  selector: 'app-header-center',
  templateUrl: './header-center.component.html',
  styleUrls: ['./header-center.component.css']
})
export class HeaderCenterComponent implements OnInit {
  constructor(private newsService:GetNewsService) { }
  ngOnInit() {
   
  }

}
