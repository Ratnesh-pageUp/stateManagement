import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent { 
@Input()title:string='';
@Input()id:number=0;
@Input()description:string='';
@Input()link:string='';
@Output()readMore:EventEmitter<any>=new EventEmitter()
}
