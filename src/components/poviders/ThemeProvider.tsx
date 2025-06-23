// src/components/providers/ThemeProvider.tsx
'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ReactNode, useState, useEffect } from 'react';

interface ClientThemeProviderProps {
    children: ReactNode;
}

const theme = createTheme({
    // Your theme configuration here
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

export default function ClientThemeProvider({ children }: ClientThemeProviderProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by not rendering theme-dependent content on server
    if (!mounted) {
        return (
            <>
                <CssBaseline />
                {children}
            </>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}