import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-center',
  templateUrl: './header-center.component.html',
  styleUrls: ['./header-center.component.css']
})
export class HeaderCenterComponent implements OnInit {
  @Input() channelName:string;
  constructor() { }

  ngOnInit() {
  }

}
