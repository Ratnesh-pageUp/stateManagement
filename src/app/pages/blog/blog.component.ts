import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseClass } from 'src/app/classes/baseClass.class';
import { Select, Store } from '@ngxs/store';
import { AddBlog, GetAllBlogs } from 'src/app/store/actions/blog.action';
import { Observable, Subscription } from 'rxjs';
import { BlogState } from 'src/app/store/states/blog.state';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent extends BaseClass implements OnInit, OnDestroy {
  @Select(BlogState.getBlogList) allBlogs$?: Observable<any>;
  @Select(BlogState.blogLoaded) blogLoaded$?: Observable<boolean>;
  private loadedSubscription?: Subscription;
  private blogSubscription?: Subscription;
  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.setLoading(true);
    // this.getBlogs();
  }

  private getBlogs() {
    this.loadedSubscription = this.blogLoaded$?.subscribe((isBlogLoaded) => {
      if (!isBlogLoaded) {
        this.store.dispatch(new GetAllBlogs());
        this.setLoading(false);
      } else {
        this.setLoading(false);
      }
    });
  }

  public addBlog(): void {
    this.store.dispatch(new AddBlog({id:6,title:'beach holiday',description:'Qatar boasts more than 350 miles of unspoiled coastline, offering idyllic spots to enjoy the sunshine and relish the azure waters.'}))
  }

  ngOnDestroy(): void {
    this.loadedSubscription?.unsubscribe();
  }
}
