import { Drawer, List, ListItemButton, ListItemText, Box, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../auth/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

export default function Sidebar() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleDrawer = () => setMobileOpen(!mobileOpen);

    const handleLogout = () => {
        if(logout) {
            logout(); 
            navigate('/login'); 
        }
    };

    const drawerContent = (
        <Box sx={{ width: drawerWidth, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <List>
                <ListItemButton 
                    selected={location.pathname === '/home'} 
                    onClick={() => {
                        navigate('/home'); 
                        if (isMobile) toggleDrawer();
                    }}>
                    <ListItemText primary="Home" />
                </ListItemButton>
                {/* Futuras secciones */}
            </List>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ p: 2 }}>
                <Button variant="outlined" fullWidth onClick={handleLogout}>Logout</Button>
            </Box>
        </Box>
    );

    return (
        <>
        {isMobile && (
            <Box sx={{ position: 'fixed', top: 8, left: 8, zIndex: 1300 }}>
                <IconButton onClick={toggleDrawer} color="inherit">
                    <MenuIcon />
                </IconButton>
            </Box>
        )}
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={isMobile ? mobileOpen : true}
                onClose={toggleDrawer}
                ModalProps={{ keepMounted: true }}
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                }}
            >
                <Toolbar />
                {drawerContent}
            </Drawer>
        </>
    );
}