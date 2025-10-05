import React, { useState } from 'react';
import PostCard from '../Components/PostCard/PostCard';
import Modal from '../Components/Modal/Modal';
import './PostList.css';

const postsData = [
  // ... seus dados de post aqui
  { id: 1, title: 'Introdução ao React', professor: 'João da Silva', summary: 'Neste post, vamos explorar...', content: 'Este é o conteúdo completo do post sobre React. Blá blá blá...' },
  { id: 2, title: 'CSS Moderno', professor: 'Maria Oliveira', summary: 'Aprenda sobre Flexbox, Grid...', content: 'O conteúdo completo sobre CSS moderno é bem extenso e detalhado. Blá blá blá...' },
  { id: 3, title: 'JavaScript Avançado', professor: 'Carlos Pereira', summary: 'Vamos mergulhar em Promises...', content: 'Promises, Async/Await são a base do JS moderno. Blá blá blá...' }
];

function PostList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

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
        {postsData.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            professor={post.professor}
            summary={post.summary}
            onClick={() => handleCardClick(post)}
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedPost && (
          <div>
            <h2>{selectedPost.title}</h2>
            <p><em>Por: {selectedPost.professor}</em></p>
            <hr />
            <p>{selectedPost.content}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default PostList;