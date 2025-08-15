'use client';

import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import { Phone as PhoneIcon } from '@mui/icons-material';

interface ContactBannerProps {
    title?: string;
    message?: string;
    phoneNumber?: string;
    buttonText?: string;
    onPhoneCall?: () => void;
    sx?: any;
    className?: string;
    variant?: 'elevated' | 'outlined' | 'flat';
    imageSrc?: string;
    imageAlt?: string;
    imageHeight?: string | number;
}

const ContactBanner: React.FC<ContactBannerProps> = ({
    title = 'Need Help?',
    message = 'Contact us today for professional assistance',
    phoneNumber = '+40746639974',
    buttonText = 'Call Now',
    onPhoneCall,
    sx = {},
    className,
    variant = 'elevated',
    imageSrc,
    imageAlt = 'Contact banner image',
    imageHeight = 200
}) => {
    const handlePhoneCall = () => {
        if (onPhoneCall) {
            onPhoneCall();
        } else {
            window.open(`tel:${phoneNumber}`, '_self');
        }
    };

    const defaultSx = {
        overflow: 'hidden',
        borderRadius: variant === 'flat' ? 0 : 2,
        background: variant === 'flat' ? 'transparent' : undefined,
        ...sx
    };

    const paperProps = variant === 'outlined'
        ? { variant: 'outlined' as const, elevation: 0 }
        : { elevation: variant === 'elevated' ? 2 : 0 };

    const BannerContent = () => (
        <Box>
            {/* Image Section */}
            {imageSrc && (
                <Box
                    sx={{
                        width: '100%',
                        height: { xs: imageHeight, md: 'auto' },
                        maxHeight: { md: imageHeight },
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        component="img"
                        src={imageSrc}
                        alt={imageAlt}
                        sx={{
                            width: { xs: '100%', md: 'auto' },
                            height: { xs: '100%', md: imageHeight },
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </Box>
            )}

            {/* Content Section */}
            <Box
                sx={{
                    padding: { xs: 2, sm: 3 },
                    textAlign: 'center'
                }}
            >
                {/* Title */}
                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 1
                    }}
                >
                    {title}
                </Typography>

                {/* Message */}
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        mb: 3,
                        maxWidth: '600px',
                        mx: 'auto',
                        lineHeight: 1.6
                    }}
                >
                    {message}
                </Typography>

                {/* Call Button */}
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<PhoneIcon />}
                    onClick={handlePhoneCall}
                    sx={{
                        fontWeight: 600,
                        padding: '12px 32px',
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        boxShadow: 2,
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: 4
                        },
                        transition: 'all 0.3s ease'
                    }}
                >
                    {buttonText}
                </Button>
            </Box>
        </Box>
    );

    if (variant === 'flat') {
        return (
            <Box className={className} sx={defaultSx}>
                <BannerContent />
            </Box>
        );
    }

    return (
        <Paper {...paperProps} className={className} sx={defaultSx}>
            <BannerContent />
        </Paper>
    );
};

export default ContactBanner;