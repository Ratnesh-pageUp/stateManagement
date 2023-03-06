import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog.model';
import { GetBlog } from 'src/app/store/actions/blog.action';
import { BlogState } from 'src/app/store/states/blog.state';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

 @Select(BlogState.getBlog)blog$?:Observable<Blog>

  constructor(private store:Store,private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res:any)=>this.store.dispatch(new GetBlog(parseInt(res.id))))
  }

}
