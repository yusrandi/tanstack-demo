// src/api/postApi.ts
import type { Post } from '@/domain/models/Post';

const BASE_URL = 'http://localhost:3000';

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/posts`);
  return response.json();
};
export const getPost = async (id: string): Promise<Post> => {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  return response.json();
};

export const createPostApi = async (post: Post): Promise<Post> => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const updatePostApi = async (id: string, post: Post): Promise<Post> => {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const deletePostApi = async (id: string): Promise<void> => {
  await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  });
};
