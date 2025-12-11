"use client";

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function MaterialProviders({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    palette: {
      primary: { main: '#E91E8C' },
      secondary: { main: '#FF6B35' },
      background: { default: '#f7f7fb' },
    },
    shape: { borderRadius: 8 },
    components: {
      MuiButton: {
        defaultProps: {
          size: 'large',
        },
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: '14px 22px',
            minHeight: 56,
            fontWeight: 700,
            textTransform: 'none',
            boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: '0 6px 18px rgba(12,16,23,0.06)'
          }
        }
      }
    },
    typography: {
      fontFamily: 'var(--font-plus-jakarta), var(--font-inter), system-ui, sans-serif',
      h1: { fontWeight: 900 },
      h2: { fontWeight: 800 },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
