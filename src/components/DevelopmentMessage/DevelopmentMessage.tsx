"use client"
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const DevelopmentMessage = () => {
    const t = useTranslations('common');

    return (
        <Box
            sx={{
                fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 300,
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
                margin: 0,
                padding: '8px 20px',
                height: '1rem',
                color: '#c53030',
                fontSize: '0.9rem',
                textAlign: 'center',
                background: 'linear-gradient(to right, transparent, rgba(220, 38, 38, 0.28) 20%, rgba(220, 38, 38, 0.24) 80%, transparent)',
                borderRadius: 0,
                boxShadow: '0 -2px 8px rgba(220, 38, 38, 0.1), inset 0 1px 3px rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(8px)',
                touchAction: 'pan-y pinch-zoom',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    fontFamily: 'inherit',
                    fontWeight: 'inherit',
                    fontSize: 'inherit',
                    color: 'inherit'
                }}
            >
                {t('developmentMessage')}
            </Typography>
        </Box>
    );
};

export default DevelopmentMessage;