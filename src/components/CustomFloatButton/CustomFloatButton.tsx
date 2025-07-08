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
                        backgroundColor: '#128c7e'
                    },
                    boxShadow: 3,
                }}
            >
                <WhatsApp />
            </Fab>

            {/* Phone Call Button */}
            <Fab
                onClick={handlePhoneCall}
                aria-label="Call us"
                sx={{
                    boxShadow: 3,
                }}
            >
                <Phone />
            </Fab>
        </Box>
    );
};

export default CustomFloatButton;