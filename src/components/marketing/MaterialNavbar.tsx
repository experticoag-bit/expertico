"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function MaterialNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%', px: { xs: 2, sm: 3 } }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 800, color: '#111827' }}>
            Expertico
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button sx={{ textTransform: 'none', color: '#374151' }}>Produkt</Button>
            <Button sx={{ textTransform: 'none', color: '#374151' }}>Preise</Button>
            <Button sx={{ textTransform: 'none', color: '#374151' }}>Docs</Button>
            <Button
              variant="contained"
              href="/register"
              sx={{
                backgroundImage: 'linear-gradient(90deg,#E91E8C,#FF6B35)',
                boxShadow: '0 6px 18px rgba(233,30,140,0.18)',
                borderRadius: '10px',
                py: 1.2,
                px: 3,
                fontWeight: 700,
                textTransform: 'none',
              }}
            >
              Jetzt starten
            </Button>
          </Box>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setOpen(!open)} sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
