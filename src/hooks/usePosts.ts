// src/hooks/usePosts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '@/domain/usecases/fetchPosts';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
};
