export interface Post {
  post_path: string;
  post_name: string;
  like_user: string[];
}

export interface Comment {
  id: number;
  comment: string;
  parent_id: number | null;
  post_id: string;
  user_id: string;
  created_at: string;
}
