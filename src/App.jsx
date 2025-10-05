import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PostList from './Pages/PostList';
import CreatePost from './Pages/CreatePost';
import EditPost from './Pages/EditPostList';

import Header from './Components/Header/header'; // Uso geral!!! | vai em tds as pages.

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