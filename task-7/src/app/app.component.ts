import { Component,OnInit} from '@angular/core';
import { GetNewsService } from './get-news.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newsObject:object[]=[];
  constructor(private newsService:GetNewsService) {
  }
  ngOnInit() {
    this.getNewsObject();
  }
  getNewsObject() {
    this.newsObject = this.newsService.getNewsObject();
  }
}
 
