// src/hooks/usePosts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchPost } from '@/domain/usecases/fetchPost';
import { fetchPosts } from '@/domain/usecases/fetchPosts';

export const usePost = (id: string) => {
  return useQuery({
    queryKey: ['posts', id],
    queryFn: () => fetchPost(id),
  });
};
