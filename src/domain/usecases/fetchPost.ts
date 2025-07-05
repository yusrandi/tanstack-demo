import { getPost } from '@/api/postApi';
import type { Post } from '../models/Post';

export const fetchPost = async (id: string): Promise<Post> => {
  // Bisa tambahkan logic mapping atau validasi di sini
  return await getPost(id);
};
