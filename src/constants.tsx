export const URL = "https://jsonplaceholder.typicode.com/posts";

export type objType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type commentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
