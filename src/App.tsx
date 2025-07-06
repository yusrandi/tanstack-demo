import { Route, Routes } from 'react-router-dom';
import './App.css';
import Post from './pages/post/Post';
import PostEdit from './pages/post/PostEdit';
import PostList from './pages/post/PostList';

function App() {
  return (
    <div className='App gap-3'>
      <h1 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        App
      </h1>
      <PostList />
    </div>
  );
}

export default App;
