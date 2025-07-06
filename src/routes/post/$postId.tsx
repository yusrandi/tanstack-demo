import { createFileRoute } from '@tanstack/react-router';
import PostEdit from '@/pages/post/PostEdit';

export const Route = createFileRoute('/post/$postId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  return (
    <div>
      <PostEdit postId={postId} />
    </div>
  );
}
