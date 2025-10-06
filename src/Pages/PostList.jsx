import React, { useState, useEffect } from 'react';
import PostCard from '../Components/PostCard/PostCard';
import Modal from '../Components/Modal/Modal';
import Button from '../Components/Button/Button';
import './PostList.css';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


function PostList() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  const [posts, setPosts] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/posts`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error("Erro ao buscar posts:", error));
  }, []);

  const handleDeletePost = (postId) => {
    if (window.confirm('Tem certeza que deseja apagar este post?')) {
      fetch(`${import.meta.env.VITE_API_BASE_URL}/posts/${postId}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) {
          setPosts(posts.filter(post => post.id !== postId));
          handleCloseModal();
          alert('Post apagado com sucesso!');
        } else {
          alert('Falha ao apagar o post.');
        }
      })
      .catch(error => console.error("Erro ao apagar post:", error));
    }
  };

  const handleEditPost = (postId) => {
    navigate(`/edit-post/${postId}`);
  };

  const handleCardClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  }

  return (
    <div className="post-list-container">
      <h1 className='Titulo-PostList'>Confira todos os Posts!</h1>
      <div className="post-grid">
        {posts.map(post => (
          <PostCard
            key={post._id}
            title={post.title}
            author={post.author || 'Autor Desconhecido'} 
            summary={post.summary || post.body}
            onClick={() => handleCardClick(post)}
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedPost && (
          <div>
            <h2>{selectedPost.title}</h2>
            <p><em>Por: {selectedPost.author || 'Autor Desconhecido'}</em></p>
            <hr />
            <p>{selectedPost.content || selectedPost.body}</p>

            {isAuthenticated && (
              <div className="admin-actions">
                <Button onClick={() => handleEditPost(selectedPost._id)}>
                  Alterar
                </Button>
                <Button onClick={() => handleDeletePost(selectedPost._id)}>
                  Apagar
                </Button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default PostList;