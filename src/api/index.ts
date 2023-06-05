import axios, { AxiosResponse } from 'axios';
import { IResponsePostList } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://34.22.77.64:8080',
});

export const getPostList = (): Promise<AxiosResponse<IResponsePostList>> => {
  return instance.get('/posts');
};

export const createPost = (title: string, contents: string, tag: string) => {
  return instance.post('/posts', {
    title,
    contents,
    tag,
  });
};

export const getPostById = (id: number) => {
  return instance.get(`/posts/${id}`);
};

export const updatePostById = (id: number, title: string, content: string, tag: string) => {
  return instance.put(`/posts/${id}`, {
    title,
    content,
    tag,
  });
};

export const deletePostById = (id: number) => {
  return instance.delete(`/posts/${id}`);
};
