import { Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if(login) {
        login(email, password);
        navigate('/home');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField fullWidth label="Email" margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
      <TextField fullWidth label="Password" margin="normal" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>Login</Button>
    </Container>
  );
}