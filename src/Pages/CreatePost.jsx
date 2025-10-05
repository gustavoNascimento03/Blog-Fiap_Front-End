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

    console.log("Enviando para a API (no futuro):", newPost);
    alert('Post criado com sucesso! (Verifique o console do navegador)');

    setTitle('');
    setProfessor('');
    setContent('');
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