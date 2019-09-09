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
  message:string;
  user:string;
  button:any;
  constructor(private newsService:GetNewsService,private auth:AuthService) { }

  ngOnInit() {
    this.detailedNews=this.newsService.getDetailedNews();
    }
  addComment(comment:string){
    if(comment){
    this.detailedNews=this.newsService.commentUpdate(this.detailedNews.title,comment);
    this.button=document.getElementById('comment');
    this.button.value='';
    this.message="";
    }
    else{ 
      this.message="No Comment Found"
    }
    }
}
