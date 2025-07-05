// src/hooks/useUpdatePost.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePostUsecase } from '@/domain/usecases/updatePost';

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePostUsecase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
