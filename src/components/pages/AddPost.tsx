import type { Post } from '@/domain/models/Post';
import { v4 as uuidv4 } from 'uuid';
import { useCreatePost } from '@/hooks/useCreatePost';
import PostForm from './PostForm';

export default function AddPost() {
  const createPost = useCreatePost();
  async function handleSubmit(post: Post, e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(post);

    createPost.mutate({
      id: uuidv4(),
      title: post.title,
      body: post.body,
    });
  }
  return (
    <div className='grid gap-3'>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        Add Post
      </h2>
      <PostForm
        handleSubmit={handleSubmit}
        initialValue={{
          title: '',
          body: '',
          id: '',
        }}
      />
    </div>
  );
}
