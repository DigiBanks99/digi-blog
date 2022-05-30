export interface Post {
  id: string;
  title: string;
  content: string;
  comments: PostComment[];
  author: PostAuthor;
  date: Date;
  tags: string[];
}

export interface PostSummary {
  id: string;
  title: string;
  tags: string[];
  author: PostAuthor;
  date: Date;
  summary: string;
}

export interface PostAuthor {
  id: string;
  firstName: string;
  lastName: string;
}

export interface PostComment {
  id: string;
  content: string;
  author: CommentAuthor;
  date: Date;
}

export interface CommentAuthor {
  id: string;
  firstName: string;
  lastName: string;
}
