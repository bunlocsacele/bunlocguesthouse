'use client';

import React from 'react';
import { Box, Button, Divider } from '@mui/material';
import { Phone as PhoneIcon, LocationOn as LocationIcon } from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import AddressLink from '@/components/AddressLink/AddressLink'; // Adjust path as needed

interface ContactDropdownProps {
    phoneNumber?: string;
    onPhoneCall?: () => void;
    addressLinkProps?: any;
    sx?: any;
    className?: string;
}

const ContactDropdown: React.FC<ContactDropdownProps> = ({
    phoneNumber = '+40746639974',
    onPhoneCall,
    addressLinkProps = {},
    sx = {},
    className
}) => {
    const t = useTranslations('common');

    const handlePhoneCall = () => {
        if (onPhoneCall) {
            onPhoneCall();
        } else {
            window.open(`tel:${phoneNumber}`, '_self');
        }
    };

    const defaultSx = {
        minWidth: 280,
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        ...sx
    };

    return (
        <Box sx={defaultSx} className={className}>
            {/* Address Section */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationIcon
                    sx={{
                        color: '#5e5e5e',
                        fontSize: '1.2rem',
                        mt: 0.5,
                        flexShrink: 0
                    }}
                />
                <AddressLink
                    variant="body2"
                    component="div"
                    sx={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        lineHeight: 1.4,
                        ...addressLinkProps.sx
                    }}
                    {...addressLinkProps}
                />
            </Box>

            <Divider sx={{ borderColor: '#e0e0e0' }} />

            {/* Phone Section */}
            <Button
                variant="contained"
                color="primary"
                startIcon={<PhoneIcon />}
                onClick={handlePhoneCall}
                fullWidth
                sx={{
                    fontWeight: 600,
                    padding: '12px 16px',
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                        transform: 'translateY(-1px)',
                        boxShadow: 3
                    },
                    transition: 'all 0.2s ease'
                }}
            >
                {t('callNow')}
            </Button>
        </Box>
    );
};

export default ContactDropdown;