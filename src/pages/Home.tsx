import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useAuth } from '../auth/AuthContext';
import { Box, Grid, Paper, Typography } from '@mui/material';

export default function Home() {
  const { token } = useAuth();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?token=${token}`)
      .then(res => setItems(res.data.slice(0, 2000)))
      .catch(console.error);
  }, [token]);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" sx={{ alignContent: "start" }}>Home List Elements</Typography>
      <Grid container spacing={2} sx={{ mt: 2, width: "100%", flexDirection: "column" }}>
        {items.map((item, index) => (
        <Grid key={index}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">{index+1} - {item.title}</Typography>
            <Typography variant="body2">{item.url}</Typography>
          </Paper>
        </Grid>
        ))}
      </Grid>
    </Box>
  );
}