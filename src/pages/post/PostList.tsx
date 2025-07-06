import { Link } from '@tanstack/react-router';
import { useDeletePost } from '@/hooks/useDeletePost';
import { usePosts } from '@/hooks/usePosts';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AddPost from '@/components/pages/AddPost';
import PostForm from '@/components/pages/PostForm';

export default function PostList() {
  const { data, isLoading, isError } = usePosts();
  const deletePost = useDeletePost();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;
  return (
    <div className='grid gap-3 md:grid-cols-2'>
      <AddPost />
      {data?.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.body}</p>
          </CardContent>
          <CardFooter>
            <div className='grid w-full grid-cols-2 gap-3 border-t-2 py-2'>
              <Link
                to={'/post/$postId'}
                params={{ postId: post.id }}
                className='bg-primary hover:bg-primary/90 cursor-pointer rounded-md px-4 py-2 text-center text-white'
                // onClick={() => navigate(`/post/${post.id}/edit`)}
                // variant={'default'}
              >
                Edit
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
