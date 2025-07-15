import React from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

// Styled components
const StyledContainer = styled(Container)(() => ({
    padding: '1rem',
    backgroundColor: 'transparrent',
    textAlign: 'center',
}));

const IconContainer = styled(Box)(({ }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '0.5rem',
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
    fontSize: '2.5rem',
    transition: 'all 0.3s ease',
    color: 'white',
    margin: '0.5rem',
    borderRadius: '10%',
    width: '80px',
    height: '80px',
    '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
        padding: '0.2rem',
        width: '70px',
        height: '70px',
    },
    '& img': {
        borderRadius: '5%',
    }
}));

const GoogleMapsButton = styled(NavigationButton)(() => ({
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: 'rgba(66, 133, 244, 0.1)',
    },
}));

const WazeButton = styled(NavigationButton)(() => ({
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: 'rgba(0, 212, 255, 0.1)',
    },
}));

const AppleMapsButton = styled(NavigationButton)(() => ({
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
    },
}));

interface NavigationComponentProps {
    address?: string;
}

const NavigationComponent: React.FC<NavigationComponentProps> = ({
    address = "Bunloc 68 B, Brașov, Romania"
}) => {
    const encodedAddress = encodeURIComponent(address);

    const handleGoogleMapsClick = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
        window.open(url, '_blank');
    };

    const handleWazeClick = () => {
        const url = `https://waze.com/ul?q=${encodedAddress}&navigate=yes`;
        window.open(url, '_blank');
    };

    const handleAppleMapsClick = () => {
        const url = `http://maps.apple.com/?daddr=${encodedAddress}`;
        window.open(url, '_blank');
    };

    return (
        <StyledContainer maxWidth="lg">
            <IconContainer>
                <GoogleMapsButton
                    onClick={handleGoogleMapsClick}
                    aria-label="Open in Google Maps"
                    title="Open in Google Maps"
                >
                    <Image
                        src="/images/png/googleMaps.png"
                        alt="Google Maps"
                        width={60}
                        height={60}
                    />
                </GoogleMapsButton>

                <WazeButton
                    onClick={handleWazeClick}
                    aria-label="Open in Waze"
                    title="Open in Waze"
                >
                    <Image
                        src="/images/png/waze.png"
                        alt="Waze"
                        width={60}
                        height={60}
                    />
                </WazeButton>

                <AppleMapsButton
                    onClick={handleAppleMapsClick}
                    aria-label="Open in Apple Maps"
                    title="Open in Apple Maps"
                >
                    <Image
                        src="/images/png/appleMaps.png"
                        alt="Apple Maps"
                        width={60}
                        height={60}
                    />
                </AppleMapsButton>
            </IconContainer>
        </StyledContainer>
    );
};

export default NavigationComponent;