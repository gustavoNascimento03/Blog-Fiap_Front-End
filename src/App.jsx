import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PostList from './pages/PostList';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPostList';

import Header from './Components/Header/Header'; // Uso geral!!! | vai em tds as pages.

function App() {
  return (
    <>
      <Header /> 

      {/* Pages para renderizar... */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
      </Routes>

      {/* Talvez um footer no futuro... */}
    </>
  )
}

export default App