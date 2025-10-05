import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const FAKE_USER = 'admin';
  const FAKE_PASSWORD = 'password123';

  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === FAKE_USER && password === FAKE_PASSWORD) {
      setUser({ name: FAKE_USER });
      return true;
    }

    // Se não for igual, o login falha.
    return false;
  };

  // A função de logout
  const logout = () => {
    setUser(null);
  };

  const value = {
    isAuthenticated: !!user,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};