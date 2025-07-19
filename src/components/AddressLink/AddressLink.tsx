'use client';

import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { useTranslations } from 'next-intl';

interface AddressLinkProps {
    // Typography props
    variant?: TypographyProps['variant'];
    component?: React.ElementType;
    sx?: TypographyProps['sx'];
    className?: string;

    // Link props
    googleMapsUrl?: string;
    linkStyle?: React.CSSProperties;
    target?: string;
    rel?: string;

    // Content props
    translationKey?: string;
    customText?: string;
}

const AddressLink: React.FC<AddressLinkProps> = ({
    variant = 'h6',
    component = 'h4',
    sx = {},
    className,
    googleMapsUrl = "https://www.google.com/maps/dir//45.606736,25.664655/@45.606736,25.664655,609m/data=!3m1!1e3!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D",
    linkStyle = {},
    target = "_blank",
    rel = "noopener noreferrer",
    translationKey = 'fullAddress',
    customText
}) => {
    const t = useTranslations('footer');

    // Default styles for the Typography component
    const defaultSx = {
        color: '#5e5e5e',
        fontWeight: '600',
        fontSize: {
            xs: '1.1rem',
            sm: '1.25rem'
        },
        ...sx
    };

    // Default styles for the link
    const defaultLinkStyle = {
        color: 'inherit',
        textDecoration: 'none',
        cursor: 'pointer',
        ...linkStyle
    };

    // Get the text to display
    const displayText = customText || t(translationKey);

    return (
        <Typography
            variant={variant}
            component={component}
            sx={defaultSx}
            className={className}
        >
            <a
                href={googleMapsUrl}
                target={target}
                rel={rel}
                style={defaultLinkStyle}
            >
                {displayText}
            </a>
        </Typography>
    );
};

export default AddressLink;