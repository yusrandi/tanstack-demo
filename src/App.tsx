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
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/post' element={<PostList />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/:id/edit' element={<PostEdit />} />
      </Routes>
    </div>
  );
}

export default App;
