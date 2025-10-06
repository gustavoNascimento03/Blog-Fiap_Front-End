import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const FAKE_USER = 'Professor_001';
  const FAKE_PASSWORD = 'escola456';

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const [isLoadingPosts, setIsLoadingPosts] = useState(true);

  const fetchPosts = async () => {
    setIsLoadingPosts(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/posts`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      setPosts([]);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const login = (username, password) => {
    if (username === FAKE_USER && password === FAKE_PASSWORD) {
      setUser({ name: FAKE_USER });
      return true; // Sucesso!
    }
    return false; // Falhou!
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    isAuthenticated: !!user,
    user,
    login,
    logout,
    posts,
    setPosts,
    fetchPosts,
    isLoadingPosts,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};