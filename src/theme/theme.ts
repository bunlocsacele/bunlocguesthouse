"use client"
import { createTheme, ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#1b4d72',
            light: '#2e6b9e',
            dark: '#0f3148',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#c8a882',
            light: '#d4af37',
            dark: '#a68b5b',
            contrastText: '#1b4d72',
        },
        background: {
            default: '#f5f1e8',
            paper: '#ffffff',
        },
        text: {
            primary: '#1b4d72',
            secondary: '#5a5a5a',
        },
    },
    typography: {
        fontFamily: 'Source Sans Pro, Arial, sans-serif',
        fontSize: 16,
        fontWeightLight: 200,
        fontWeightRegular: 300,
        fontWeightMedium: 400,
        fontWeightBold: 600,
        h1: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.2,
        },
        h2: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.3,
        },
        h3: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 600,
            fontSize: '1.75rem',
            lineHeight: 1.3,
        },
        h4: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.4,
        },
        h5: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.4,
        },
        h6: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body1: {
            fontFamily: 'Source Sans Pro, Arial, sans-serif',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        body2: {
            fontFamily: 'Source Sans Pro, Arial, sans-serif',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.5,
        },
        button: {
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '0.875rem',
            textTransform: 'none',
            letterSpacing: '0.02em',
        },
        caption: {
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 1.4,
        },
        overline: {
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--text-5xl)', // 2.5rem
                    fontWeight: 'var(--font-extrabold)', // 700
                    lineHeight: 1.2,
                    color: 'var(--color-text-primary)',
                },
                h2: {
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--text-4xl)', // 2rem
                    fontWeight: 'var(--font-bold)', // 600
                    lineHeight: 1.3,
                    color: 'var(--color-text-primary)',
                },
                h3: {
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--text-3xl)', // 1.75rem
                    fontWeight: 'var(--font-bold)', // 600
                    lineHeight: 1.3,
                    color: 'var(--color-text-primary)',
                },
                h4: {
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--text-2xl)', // 1.5rem
                    fontWeight: 'var(--font-semibold)', // 500
                    lineHeight: 1.4,
                    color: 'var(--color-text-primary)',
                },
                h5: {
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--text-xl)', // 1.25rem
                    fontWeight: 'var(--font-semibold)', // 500
                    lineHeight: 1.4,
                    color: 'var(--color-text-primary)',
                },
                h6: {
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--text-base)', // 1rem
                    fontWeight: 'var(--font-semibold)', // 500
                    lineHeight: 1.5,
                    color: 'var(--color-text-primary)',
                },
                body1: {
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-base)', // 1rem
                    fontWeight: 'var(--font-medium)', // 400
                    lineHeight: 1.6,
                    color: 'var(--color-text-primary)',
                },
                body2: {
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-sm)', // 0.875rem
                    fontWeight: 'var(--font-medium)', // 400
                    lineHeight: 1.5,
                    color: 'var(--color-text-secondary)',
                },
                subtitle1: {
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-base)', // 1rem
                    fontWeight: 'var(--font-medium)', // 400
                    lineHeight: 1.75,
                    color: 'var(--color-text-primary)',
                },
                subtitle2: {
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-sm)', // 0.875rem
                    fontWeight: 'var(--font-semibold)', // 500
                    lineHeight: 1.57,
                    color: 'var(--color-text-primary)',
                },
                button: {
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)', // 0.875rem
                    fontWeight: 'var(--font-semibold)', // 500
                    lineHeight: 1.75,
                    letterSpacing: '0.02em',
                    textTransform: 'none',
                    color: 'inherit',
                },
                caption: {
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)', // 0.75rem
                    fontWeight: 'var(--font-medium)', // 400
                    lineHeight: 1.4,
                    color: 'var(--color-text-secondary)',
                },
                overline: {
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)', // 0.75rem
                    fontWeight: 'var(--font-semibold)', // 500
                    lineHeight: 2.66,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-secondary)',
                },
            },
        },

        // Button component styling
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 'var(--font-semibold)',
                    fontSize: 'var(--text-sm)',
                    letterSpacing: '0.02em',
                    textTransform: 'none',
                    borderRadius: '8px',
                    padding: '12px 24px',
                    transition: 'all 0.2s ease',
                },
                containedPrimary: {
                    backgroundColor: 'var(--color-primary-main)',
                    color: 'var(--color-primary-contrast)',
                    '&:hover': {
                        backgroundColor: 'var(--color-primary-dark)',
                    },
                },
                containedSecondary: {
                    backgroundColor: 'var(--color-secondary-main)',
                    color: 'var(--color-secondary-contrast)',
                    '&:hover': {
                        backgroundColor: 'var(--color-secondary-dark)',
                    },
                },
                outlinedPrimary: {
                    color: 'var(--color-primary-main)',
                    borderColor: 'var(--color-primary-main)',
                    '&:hover': {
                        backgroundColor: 'var(--color-primary-main)',
                        color: 'var(--color-primary-contrast)',
                    },
                },
                outlinedSecondary: {
                    color: 'var(--color-secondary-main)',
                    borderColor: 'var(--color-secondary-main)',
                    '&:hover': {
                        backgroundColor: 'var(--color-secondary-main)',
                        color: 'var(--color-secondary-contrast)',
                    },
                },
            },
        },

        // Paper component styling
        MuiPaper: {
            styleOverrides: {
                // root: {
                //     backgroundColor: 'var(--color-background-paper)',
                // },
            },
        },

        // Card component styling
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'var(--color-background-paper)',
                    boxShadow: '0 2px 8px rgba(27, 77, 114, 0.1)',
                },
            },
        },

        // AppBar component styling
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'var(--color-primary-main)',
                    color: 'var(--color-primary-contrast)',
                },
            },
        },

        // Chip component styling
        MuiChip: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-medium)',
                },
                colorPrimary: {
                    backgroundColor: 'var(--color-primary-main)',
                    color: 'var(--color-primary-contrast)',
                },
                colorSecondary: {
                    backgroundColor: 'var(--color-secondary-main)',
                    color: 'var(--color-secondary-contrast)',
                },
            },
        },
    },
};

// Create and export the theme
export const theme = createTheme(themeOptions);