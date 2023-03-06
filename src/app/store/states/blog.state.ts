import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Blog } from 'src/app/models/blog.model';
import { Injectable } from '@angular/core';
import { AddBlog, GetAllBlogs, GetBlog } from '../actions/blog.action';
import { BlogService } from 'src/app/services/blog.service';
import { tap } from 'rxjs/operators';

// state Model
export class BlogStateModel {
  blogs: Blog[] = [];
  blogsLoaded?: boolean;
  selectedBlog?: Blog;
}

// state
@State<BlogStateModel>({
  name: 'Blog',
  defaults: {
    blogs: [],
    blogsLoaded: false,
    selectedBlog: undefined,
  },
})
// injector
@Injectable()
export class BlogState {
  constructor(private blogService: BlogService) {}

  //#region selector

  // selector has logic to get state data
  @Selector() static getBlogList(state: BlogStateModel) {
    return state.blogs;
  }

  @Selector() static blogLoaded(state: BlogStateModel) {
    return state.blogsLoaded;
  }

  @Selector() static getBlog(state: BlogStateModel) {
    return state.selectedBlog;
  }

  //#endregion selector

  //#region actions 

  @Action(GetAllBlogs)
  getAllBlogs({ getState, setState }: StateContext<BlogStateModel>) {
    return this.blogService.getBlogList().pipe(
      tap((res: any) => {
        const state = getState();
        setState({
          ...state,
          blogs: res,
          blogsLoaded: true,
        });
      })
    );
  }

  @Action(GetBlog)
  getBlog(
    { getState, setState }: StateContext<BlogStateModel>,
    { id }: GetBlog
  ) {
    const state = getState();
    const blogList = state.blogs;
    const index = blogList?.findIndex((blog) => blog.id === id);
    if (index > 0) {
      return setState({
        ...state,
        selectedBlog: blogList[index],
      });
    } else {
      return this.blogService.getBlogById(id).pipe(
        tap((res: Blog) => {
          const blogList = [res];
          setState({
            ...state,
            blogs: blogList,
            selectedBlog: blogList[0],
          });
        })
      );
    }
  }

  @Action(AddBlog)
  addBlog({getState,patchState}:StateContext<BlogStateModel>,{payload}:AddBlog){
     return this.blogService.addBlog(payload).pipe(tap((res:Blog)=>{
      const state = getState();
      patchState({
        blogs:[...state.blogs,res],
      })
     }))
  }
  //#endregion action

}
