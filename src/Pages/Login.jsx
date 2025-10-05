import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '../Components/Button/Button';
import './CreatePost.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); // Limpa erros antigos

    const success = login(username, password);

    if (success) {
      navigate('/create-post');
    } else {
      setError('Usuário ou senha inválidos. Tente "admin".');
    }
  };

  return (
    <div className="create-post-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="post-form">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
}

export default Login;