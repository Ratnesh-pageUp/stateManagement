import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/dev.environment';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  public getBlogList(){
    return this.http.get(`${environment.host}/blogs`)
  }

  public getBlogById(id:number){
    return this.http.get<Blog>(`${environment.host}/blogs/${id}`)
  }

  public addBlog(data:Blog){
    return this.http.post<Blog>(`${environment.host}/blogs/`, data)
  }

}
