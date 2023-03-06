import { Blog } from 'src/app/models/blog.model';

export class AddBlog {
  static readonly type = '[Blog] Add';
  constructor(public payload: Blog) {}
}

// export class UpdateBlog{
//     static readonly type = '[Blog] Update'
//     constructor(public payload:Blog){}
// }

// export class DeleteBlog{
//     static readonly type = '[Blog] Delete'
//     constructor(public id:number){}
// }

export class GetAllBlogs {
  static readonly type = '[Blog] GetAllBlogs';
}

export class GetBlog {
  static readonly type = '[Blog] GetBlog';
  constructor(public id: number) {}
}
