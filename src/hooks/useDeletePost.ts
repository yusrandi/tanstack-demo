// src/hooks/useDeletePost.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '../domain/usecases/deletePost';

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
