import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PostList from './pages/PostList';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPostList';
import ProtectedRoute from './Components/ProtectedRoute';

import Header from './Components/Header/Header'; // Uso geral!!! | vai em tds as pages.

function App() {
  return (
    <>
      <Header />
      <main className="main-container">
        {/* Pages para renderizar... */}
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<PostList />} />

          {/* Rota Protegida */}
          <Route
            path="/create-post"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />

          <Route path="/edit-post/:id" element={<EditPost />} />
        </Routes>
      </main>
      {/* Talvez um footer no futuro... */}
    </>
  )
}

export default App