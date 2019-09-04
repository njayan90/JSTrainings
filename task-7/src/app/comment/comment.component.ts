import { Component, OnInit } from '@angular/core';
import { GetNewsService } from '../get-news.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  detailedNews:any;
  user:string;
  constructor(private newsService:GetNewsService,private auth:AuthService) { }

  ngOnInit() {
    this.detailedNews=this.newsService.getDetailedNews();
    }
  addComment(comment:string){
    this.detailedNews=this.newsService.commentUpdate(this.detailedNews.title,comment);
    }
}
