// src/components/providers/ThemeProvider.tsx
'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ReactNode } from 'react';
import createEmotionCache from '@/lib/createEmotionCache';
import { CacheProvider } from '@emotion/react';

interface ClientThemeProviderProps {
    children: ReactNode;
    emotionCache?: any;
}

const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

export default function ClientThemeProvider({
    children,
    emotionCache = clientSideEmotionCache
}: ClientThemeProviderProps) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}