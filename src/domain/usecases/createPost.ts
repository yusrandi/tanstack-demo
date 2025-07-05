import { createPostApi } from '@/api/postApi';
import type { Post } from '../models/Post';

export const createPostUsecase = async (newPost: Post): Promise<Post> => {
  // Bisa tambahkan logic mapping atau validasi di sini
  return await createPostApi(newPost);
};
