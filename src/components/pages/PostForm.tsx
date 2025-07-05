import { useState } from 'react';
import type { Post } from '@/domain/models/Post';
import { Divide } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { useCreatePost } from '@/hooks/useCreatePost';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface PostFormProps {
  handleSubmit: (post: Post, e: React.FormEvent<HTMLFormElement>) => void;
  initialValue: Post;
}
export default function PostForm({
  handleSubmit,
  initialValue,
}: PostFormProps) {
  const [post, setPost] = useState<Post>({
    title: initialValue.title || '',
    body: initialValue.body || '',
    id: initialValue.id || uuidv4(),
  });

  function renderField<K extends keyof Post>(label: K) {
    return (
      <div className='grid w-full items-center gap-1'>
        <Label>{label.toUpperCase()}</Label>
        <Input
          onChange={(e) => setPost({ ...post, [label]: e.target.value })}
          type='text'
          name={label}
          value={post[label]}
        />
      </div>
    );
  }

  return (
    <form onSubmit={(e) => handleSubmit(post, e)} className='grid gap-3'>
      {renderField('title')}
      {renderField('body')}

      <Button type='submit' className='mt-5'>
        Submit
      </Button>
    </form>
  );
}
