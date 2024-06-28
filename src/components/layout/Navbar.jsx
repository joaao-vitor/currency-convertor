import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import './Navbar.css'
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import Historic from '../Historic';

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer =
        (open) =>
            (event) => {
                if (
                    event.type === 'keydown' &&
                    (event.key === 'Tab' ||
                        event.key === 'Shift')
                ) {
                    return;
                }

                setDrawerOpen(open);
            };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='navbar'>
                    <CurrencyExchangeIcon />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Conversor de Moedas
                    </Typography>
                    <Button color="inherit" onClick={toggleDrawer(true)}>Histórico</Button>
                    <Drawer anchor='bottom' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                        <Historic toggleDrawer={toggleDrawer} />

                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
