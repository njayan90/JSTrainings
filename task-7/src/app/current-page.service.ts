import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CurrentPageService {
  addEmitter=new Subject<boolean>();
  detailsEmitter=new Subject<boolean>();
  loginEmitter=new Subject<boolean>();
  constructor() { }
  }
