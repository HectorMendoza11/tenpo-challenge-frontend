import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PrivateLayout from './layouts/PrivateLayout';
import { useAuth } from './auth/AuthContext';

export default function App() {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={token ? <PrivateLayout><Home /></PrivateLayout> : <Navigate to="/login" replace />}
      />
      <Route path="*" element={<Navigate to={token ? '/home' : '/login'} replace />} />
    </Routes>
  );
}