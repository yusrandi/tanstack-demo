// src/domain/usecases/updatePost.ts
import { updatePostApi } from '@/api/postApi';
import type { Post } from '../models/Post';

export const updatePostUsecase = async (post: Post): Promise<Post> => {
  return await updatePostApi(post.id, post); // Menggunakan post.id sebagai id(post);
};
