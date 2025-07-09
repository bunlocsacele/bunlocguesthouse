'use client';

import { useLocale } from 'next-intl';
import {
    Fab,
    Box,
    useTheme,
    useMediaQuery,
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

    const containerStyles = {
        position: 'fixed',
        right: isSmallMobile ? 12 : isMobile ? 16 : 24,
        zIndex: 1000,
        pointerEvents: 'none',
    };

    const baseButtonStyles = {
        position: 'fixed',
        right: isSmallMobile ? 12 : isMobile ? 16 : 24,
        zIndex: 1000,
        pointerEvents: 'auto',
        width: isSmallMobile ? 48 : 56,
        height: isSmallMobile ? 48 : 56,
        transition: 'all 0.3s ease',
    };

    const whatsappButtonStyles = {
        ...baseButtonStyles,
        bottom: isSmallMobile ? 70 : isMobile ? 80 : 100,
        backgroundColor: '#25D366',
        boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)',
        '&:hover': {
            backgroundColor: '#128C7E',
            boxShadow: '0 12px 40px rgba(37, 211, 102, 0.4)',
        },
    };

    const phoneButtonStyles = {
        ...baseButtonStyles,
        bottom: isSmallMobile ? 12 : isMobile ? 16 : 24,
        boxShadow: '0 8px 32px rgba(46, 125, 50, 0.3)',
        '&:hover': {
            boxShadow: '0 12px 40px rgba(46, 125, 50, 0.4)',
        },
    };

    return (
        <Box className={className} sx={containerStyles}>
            {/* WhatsApp Button */}
            <Fab
                onClick={handleWhatsApp}
                aria-label="Contact via WhatsApp"
                sx={whatsappButtonStyles}
            >
                <WhatsApp />
            </Fab>

            {/* Phone Call Button */}
            <Fab
                onClick={handlePhoneCall}
                aria-label="Call us"
                sx={phoneButtonStyles}
            >
                <Phone />
            </Fab>
        </Box>
    );
};

export default CustomFloatButton;