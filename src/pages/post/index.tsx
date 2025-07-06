import { useRouteContext } from '@tanstack/react-router';
import type { Post } from '@/domain/models/Post';

interface PostPageProps {
  posts: Post[];
}
export default function PostPage({ posts }: PostPageProps) {
  return <div>PostPage {JSON.stringify(posts)}</div>;
}
