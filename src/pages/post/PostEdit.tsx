import type { Post } from '@/domain/models/Post';
import { useNavigate, useParams } from 'react-router-dom';
import { usePost } from '@/hooks/usePost';
import { useUpdatePost } from '@/hooks/useUpdatePost';
import { Button } from '@/components/ui/button';
import PostForm from '@/components/pages/PostForm';

interface props {
  postId: string;
}
export default function PostEdit({ postId }: props) {
  const updatePost = useUpdatePost();
  const { data, isLoading, isError } = usePost(postId ?? '0');

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  async function handleSubmit(post: Post, e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(post);

    updatePost.mutate({
      id: post.id,
      title: post.title,
      body: post.body,
    });
  }
  return (
    <div className='grid gap-3'>
      <Button
        // onClick={() => navigate('/')}
        className='max-w-[200px] cursor-pointer'
      >
        Back to list
      </Button>
      <div>
        <h2 className='mb-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
          Edit Post
        </h2>
        {data && <PostForm initialValue={data} handleSubmit={handleSubmit} />}
      </div>
    </div>
  );
}
