'use client';

import { useLocale } from 'next-intl';
import {
    Fab,
    Box,
} from '@mui/material';
import { useEffect } from 'react';
import {
    Phone,
    WhatsApp,
} from '@mui/icons-material';
import styles from './CustomFloatButton.module.css';

interface CustomFloatButtonProps {
    className?: string;
}

const CustomFloatButton: React.FC<CustomFloatButtonProps> = ({ className = '' }) => {
    const locale = useLocale();

    useEffect(() => {
        console.log('CustomFloatButton mounted');
        console.log('Styles object:', styles);
    }, []);

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
        <Box className={`${styles.container} ${className}`}>
            {/* WhatsApp Button */}
            <Fab
                className={`${styles.fab} ${styles.whatsappButton}`}
                onClick={handleWhatsApp}
                aria-label="Contact via WhatsApp"
            >
                <WhatsApp />
            </Fab>

            {/* Phone Call Button */}
            <Fab
                className={`${styles.fab} ${styles.phoneButton}`}
                onClick={handlePhoneCall}
                aria-label="Call us"
            >
                <Phone />
            </Fab>
        </Box>
    );
};

export default CustomFloatButton;