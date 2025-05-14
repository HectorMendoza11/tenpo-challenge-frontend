import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  token: string | null;
  login: (email: string, password: string) => void | null;
  logout: () => void | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem('fake-token'));

  const login = (email: string, password: string) => {
    if (email && password) {
      const fakeToken = 'fake-token-123';
      console.log({ response: { status: 200, token: fakeToken, message: "Success" } });
      setToken(fakeToken);
      sessionStorage.setItem('fake-token', fakeToken);
    }
  };

  const logout = () => {
    setToken(null);
    sessionStorage.removeItem('fake-token');
  };

  const value = { token, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    return {token: null, login: null, logout: null}
  }
  return context;
};