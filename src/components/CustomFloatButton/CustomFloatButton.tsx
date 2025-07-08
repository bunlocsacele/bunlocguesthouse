'use client';

import { useLocale } from 'next-intl';
import {
    Fab,
    Box,
} from '@mui/material';
import {
    Phone,
    WhatsApp,
} from '@mui/icons-material';

interface CustomFloatButtonProps {
    className?: string;
}

const CustomFloatButton: React.FC<CustomFloatButtonProps> = ({ className = '' }) => {
    const locale = useLocale();

    const handlePhoneCall = () => {
        window.open('tel:+40746639974', '_self');
    };

    const handleWhatsApp = () => {
        const phoneNumber = '40746639974';

        const messages = {
            en: 'Hi!',
            ro: 'Salut!'
        };

        const message = encodeURIComponent(messages[locale as keyof typeof messages] || messages.en);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <Box
            className={className}
            sx={{
                position: 'fixed',
                bottom: { xs: 16, sm: 24 },
                right: { xs: 16, sm: 24 },
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                zIndex: 1000,
                // Add these properties to prevent interference from transforms
                isolation: 'isolate',
                transform: 'translateZ(0)', // Force hardware acceleration and new layer
                backfaceVisibility: 'hidden', // Prevent flickering
                // Additional stability properties
                willChange: 'auto',
                contain: 'layout style paint',
            }}
        >
            {/* WhatsApp Button */}
            <Fab
                onClick={handleWhatsApp}
                aria-label="Contact via WhatsApp"
                sx={{
                    backgroundColor: '#25d366',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#128c7e',
                        transform: 'scale(1.05)', // Subtle hover effect
                    },
                    '&:active': {
                        transform: 'scale(0.95)',
                    },
                    boxShadow: 3,
                    transition: 'all 0.2s ease-in-out',
                    // Ensure button maintains its own rendering layer
                    willChange: 'transform',
                }}
            >
                <WhatsApp />
            </Fab>

            {/* Phone Call Button */}
            <Fab
                onClick={handlePhoneCall}
                aria-label="Call us"
                sx={{
                    '&:hover': {
                        transform: 'scale(1.05)', // Subtle hover effect
                    },
                    '&:active': {
                        transform: 'scale(0.95)',
                    },
                    boxShadow: 3,
                    transition: 'all 0.2s ease-in-out',
                    // Ensure button maintains its own rendering layer
                    willChange: 'transform',
                }}
            >
                <Phone />
            </Fab>
        </Box>
    );
};

export default CustomFloatButton;