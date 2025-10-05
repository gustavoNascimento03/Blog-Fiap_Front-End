import React, { useState } from 'react';
import Button from '../Components/Button/Button';
import './CreatePost.css';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [professor, setProfessor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      title: title,
      professor: professor,
      content: content,
    };

    fetch(`${import.meta.env.VITE_API_BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao criar o post');
        }
        return response.json();
      })
      .then(data => {
        console.log('Post criado com sucesso no backend:', data);
        alert('Post criado com sucesso!');

        setTitle('');
        setProfessor('');
        setContent('');
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao criar o post.');
      });
  };

  return (
    <div className="create-post-container">
      <h1>Criar Novo Post</h1>
      <p>Preencha os campos abaixo para publicar um novo post no blog.</p>

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
          <label htmlFor="professor">Nome do Professor</label>
          <input
            type="text"
            id="professor"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
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
          Criar Post
        </Button>
      </form>
    </div>
  );
}

export default CreatePost;