import { getPosts } from '@/api/postApi';
import type { Post } from '../models/Post';

export const fetchPosts = async (): Promise<Post[]> => {
  // Bisa tambahkan logic mapping atau validasi di sini
  return await getPosts();
};
