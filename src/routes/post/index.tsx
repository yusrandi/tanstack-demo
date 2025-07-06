import { createFileRoute } from '@tanstack/react-router';
import type { Post } from '@/domain/models/Post';
import { fetchPosts } from '@/domain/usecases/fetchPosts';
import PostPage from '@/pages/post';
import Loading from '@/components/Loading';

export const Route = createFileRoute('/post/')({
  component: () => {
    const posts: Post[] = Route.useLoaderData();
    return <PostPage posts={posts} />;
  },
  pendingComponent: Loading,
  loader: async () => {
    return await fetchPosts();
  },
});
