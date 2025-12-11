"use client";

import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function MaterialHero() {
  return (
    <Box component="section" sx={{ bgcolor: '#ffffff', py: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Chip label="Expertico · Swiss SaaS" sx={{ mb: 2, fontWeight: 700, bgcolor: '#fff0f6', color: '#b91c6b' }} />
            <Typography variant="h2" component="h1" sx={{ fontWeight: 900, mb: 3, lineHeight: 1.05, fontSize: { xs: '2rem', md: '3rem' } }}>
              KI-Agenten für Schweizer KMU — Verlässlich, transparent, sofort einsetzbar
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Erhalten Sie ein digitales Team für Telefon, E‑Mail, Leads und Backoffice — DSGVO-konform und sofort produktiv.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
              <Button
                variant="contained"
                href="/register"
                size="large"
                aria-label="Kostenlose Demo anfragen"
                sx={{
                  textTransform: 'none',
                  borderRadius: '10px',
                  py: 1.6,
                  px: 4,
                  fontWeight: 800,
                  backgroundImage: 'linear-gradient(90deg,#E91E8C,#FF6B35)',
                  boxShadow: '0 10px 30px rgba(233,30,140,0.14)',
                }}
              >
                Kostenlose Demo
              </Button>
              <Button
                variant="outlined"
                href="/pricing"
                size="large"
                aria-label="Preise ansehen"
                sx={{
                  textTransform: 'none',
                  borderRadius: '10px',
                  py: 1.6,
                  px: 4,
                  fontWeight: 700,
                  borderColor: '#E91E8C',
                  color: '#374151',
                }}
              >
                Preise ansehen
              </Button>
            </Stack>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item>
                <Card elevation={1} sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2, py: 1 }}>
                  <Box sx={{ width: 56, height: 56, bgcolor: '#fef3f8', borderRadius: 1 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>30+ Agenten</Typography>
                    <Typography variant="caption" color="text.secondary">Sofort einsatzbereit</Typography>
                  </Box>
                </Card>
              </Grid>
              <Grid item>
                <Card elevation={1} sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2, py: 1 }}>
                  <Box sx={{ width: 56, height: 56, bgcolor: '#eefcff', borderRadius: 1 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>5 Min Setup</Typography>
                    <Typography variant="caption" color="text.secondary">Schnelle Inbetriebnahme</Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(15,23,42,0.06)' }}>
              <Box sx={{ position: 'relative', height: { xs: 220, md: 360 } }}>
                <img
                  src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed80?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc"
                  alt="Dashboard preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
