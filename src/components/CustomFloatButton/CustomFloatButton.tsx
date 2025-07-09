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
import './CustomFloatButton.css'; // Import regular CSS file

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
        <Box className={`float-button-container ${className}`}>
            {/* WhatsApp Button */}
            <Fab
                className="float-button whatsapp-button"
                onClick={handleWhatsApp}
                aria-label="Contact via WhatsApp"
            >
                <WhatsApp />
            </Fab>

            {/* Phone Call Button */}
            <Fab
                className="float-button phone-button"
                onClick={handlePhoneCall}
                aria-label="Call us"
            >
                <Phone />
            </Fab>
        </Box>
    );
};

export default CustomFloatButton;