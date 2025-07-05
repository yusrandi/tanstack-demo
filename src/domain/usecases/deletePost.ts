// src/domain/usecases/deletePost.ts
import { deletePostApi } from '../../api/postApi';

export const deletePost = async (id: string): Promise<void> => {
  await deletePostApi(id);
};
