import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../Components/Button/Button';
import './CreatePost.css';

function EditPost() {
  const { id } = useParams();
  const { fetchPosts } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setContent(data.content);
        setIsLoading(false);
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedPost = {
      title: title,
      content: content,
    };

    fetch(`${import.meta.env.VITE_API_BASE_URL}/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao atualizar o post');
        }
        return response.json();
      })
      .then(async (data) => {
        console.log('Post atualizado com sucesso:', data);
        alert('Post atualizado com sucesso!');

        await fetchPosts();

        navigate('/posts');
      });
  };

  if (isLoading) {
    return <div>Carregando dados do post...</div>;
  }

  return (
    <div className="create-post-container">
      <h1>Editar Post</h1>
      <p>Altere os campos abaixo para salvar as modificações.</p>

      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="title">Título do Post</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Conteúdo do Post</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="10"
            required
          />
        </div>

        <Button type="submit">
          Salvar Alterações
        </Button>
      </form>
    </div>
  );
}

export default EditPost;