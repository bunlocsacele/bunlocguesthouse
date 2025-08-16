"use client"
import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    IconButton,
    Fab,
    Paper,
    alpha
} from '@mui/material';
import {
    ExpandMore,
    RadioButtonUnchecked,
    RadioButtonChecked,
    OutdoorGrill,
    Kitchen,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { Chair, ConferenceIcon, FirepitIcon } from '@/components/CustomIcons/CustomIcons';
import FlatwareIcon from '@mui/icons-material/Flatware';
import { PiPicnicTableBold } from "react-icons/pi";
import { FaTableTennisPaddleBall } from "react-icons/fa6";
import EventSeatIcon from '@mui/icons-material/EventSeat';
import CountertopsIcon from '@mui/icons-material/Countertops';

// Facility images - replace these paths with your actual image paths
const bonfireImage1 = "/images/facilities/bonfire1.jpg";
const bonfireImage2 = "/images/facilities/bonfire2.jpg";
const grillImage1 = "/images/facilities/grillImage1.jpg";
const grillImage2 = "/images/facilities/grillImage2.jpg";
const grillImage3 = "/images/facilities/grillImage3.jpg";
const conferenceImage1 = "/images/facilities/conferenceImage1.jpg";
const kitchenImage1 = "/images/facilities/kitchenImage1.jpg";
const tenisTable1 = "/images/facilities/tenisTable1.jpg";
const tenisTable2 = "/images/facilities/tenisTable2.jpg";
const tenisTable3 = "/images/facilities/tenisTable3.jpg";

type FacilitiesPageProps = {
    locale: string;
}

const FacilitiesPage = ({ locale }: FacilitiesPageProps) => {
    const t = useTranslations('facilities');
    const [currentFacility, setCurrentFacility] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Facilities data
    const facilities = [
        {
            id: 'bonfire',
            name: t('bonfire'),
            description: t('details.bonfire'),
            images: [
                bonfireImage1,
                bonfireImage2,
            ],
            mainfeature: { icon: <FirepitIcon color="#d4af37" size={100} /> },
            features: []
        },
        {
            id: 'grill',
            name: t('grill'),
            description: t('details.grill'),
            images: [
                grillImage1,
                grillImage2,
                grillImage3
            ],
            mainfeature: { icon: <OutdoorGrill sx={{ fontSize: 68, color: "#d4af37" }} /> },
            features: [
                { icon: <PiPicnicTableBold size={48} />, label: t('featureLabels.diningTables') },
                { icon: <FlatwareIcon />, label: t('featureLabels.utensils') },
                { icon: <EventSeatIcon sx={{ fontSize: 38 }} />, label: t('featureLabels.upTo20Seats') },
            ]
        },
        {
            id: 'conference',
            name: t('conference'),
            description: t('details.conference'),
            images: [
                conferenceImage1,
                // conferenceImage2,
            ],
            mainfeature: { icon: <ConferenceIcon color="#d4af37" size={150} /> },
            features: []
        },
        {
            id: 'kitchen',
            name: t('kitchen'),
            description: t('details.kitchen'),
            images: [
                kitchenImage1,
                // kitchenImage2,
            ],
            mainfeature: { icon: <CountertopsIcon sx={{ fontSize: 100, color: '#d4af37' }} /> },
            features: [
                { icon: <Kitchen />, label: t('featureLabels.fridge') },
                { icon: <Chair />, label: t('featureLabels.upTo20Seats') },
                { icon: <FlatwareIcon />, label: t('featureLabels.utensils') },
            ]
        },
        {
            id: 'tenisTable',
            name: t('tenisTable'),
            description: t('details.tenisTable'),
            images: [
                tenisTable1,
                tenisTable2,
                tenisTable3,
            ],
            mainfeature: { icon: <FaTableTennisPaddleBall size={48} color={"#d4af37"} /> },
            features: []
        }
    ];

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) =>
                (prev + 1) % facilities[currentFacility].images.length
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [currentFacility, facilities]);

    // Handle scroll to detect current facility
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const newCurrentFacility = Math.floor(scrollPosition / windowHeight);

            if (newCurrentFacility !== currentFacility && newCurrentFacility < facilities.length) {
                setCurrentFacility(newCurrentFacility);
                setCurrentImageIndex(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentFacility, facilities.length]);

    // Handle navigation from other pages using sessionStorage
    useEffect(() => {
        const scrollToFacility = sessionStorage.getItem('scrollToFacility');
        if (scrollToFacility !== null) {
            const facilityIndex = parseInt(scrollToFacility, 10);
            if (facilityIndex >= 0 && facilityIndex < facilities.length) {
                setTimeout(() => {
                    const targetPosition = facilityIndex * window.innerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    setCurrentFacility(facilityIndex);
                    setCurrentImageIndex(0);
                }, 100);
            }
            sessionStorage.removeItem('scrollToFacility');
        }
    }, [facilities.length]);

    return (
        <>
            {/* Facility Sections */}
            {facilities.map((facility, index) => (
                <Box
                    key={facility.id}
                    sx={{
                        position: 'relative',
                        height: '100vh',
                        width: '100vw',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: `url(${facility.images[currentFacility === index ? currentImageIndex : 0]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: alpha('#000', 0.5),
                            zIndex: 1
                        }
                    }}
                >
                    {/* Content */}
                    <Container
                        maxWidth="md"
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            textAlign: 'center'
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                backgroundColor: alpha('#000', 0.15),
                                backdropFilter: 'blur(2px)',
                                borderRadius: 4,
                                p: { xs: 2, sm: 3, md: 4 },
                                border: `1px solid ${alpha('#fff', 0.2)}`,
                                color: 'white'
                            }}
                        >
                            <Typography
                                variant="h2"
                                component="h3"
                                gutterBottom
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 2,
                                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' }
                                }}
                            >
                                {facility.name}
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 4,
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: { xs: '1rem', md: '1.25rem' }
                                }}
                            >
                                {facility.description}
                            </Typography>

                            {/* Main Feature - Large Display */}
                            {facility.mainfeature && (

                                <Box sx={{
                                    color: '#c8a882',
                                    mb: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {facility.mainfeature.icon}
                                </Box>


                            )}

                            {/* Features Grid */}
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: 'repeat(3, 1fr)',
                                        sm: 'repeat(3, 1fr)'
                                    },
                                    gap: 2,
                                    mb: 4
                                }}
                            >
                                {facility.features.map((feature, featureIndex) => (
                                    <Card
                                        key={featureIndex}
                                        sx={{
                                            backgroundColor: alpha('#1b4d72', 0.2),
                                            backdropFilter: 'blur(4px)',
                                            color: 'white',
                                            textAlign: 'center',
                                            p: { xs: 0.5, sm: 1, md: 2 },
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: `1px solid ${alpha('#1b4d72', 0.2)}`
                                        }}
                                    >
                                        <Box sx={{ color: '#e6c547', mb: 1 }}>
                                            {React.cloneElement(feature.icon, { fontSize: 'large' })}
                                        </Box>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                            {feature.label}
                                        </Typography>
                                    </Card>
                                ))}
                            </Box>
                        </Paper>

                        {/* Image indicators */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3, mt: 2 }}>
                            {facility.images.map((_, imgIndex) => (
                                <IconButton
                                    key={imgIndex}
                                    size="small"
                                    onClick={() => setCurrentImageIndex(imgIndex)}
                                    sx={{
                                        p: 0.5,
                                        color: (currentFacility === index && currentImageIndex === imgIndex)
                                            ? '#e6c547'
                                            : alpha('#fff', 0.5)
                                    }}
                                >
                                    {(currentFacility === index && currentImageIndex === imgIndex)
                                        ? <RadioButtonChecked fontSize="small" />
                                        : <RadioButtonUnchecked fontSize="small" />
                                    }
                                </IconButton>
                            ))}
                        </Box>
                    </Container>

                    {/* Scroll indicator */}
                    {index < facilities.length - 1 && (
                        <Fab
                            size="small"
                            sx={{
                                position: 'absolute',
                                bottom: 32,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'transparent',
                                color: 'white',
                                boxShadow: 'none',
                                animation: 'bounce 2s infinite',
                                '&:hover': {
                                    backgroundColor: alpha('#fff', 0.1)
                                },
                                '@keyframes bounce': {
                                    '0%, 20%, 53%, 80%, 100%': {
                                        transform: 'translateX(-50%) translateY(0)'
                                    },
                                    '40%, 43%': {
                                        transform: 'translateX(-50%) translateY(-10px)'
                                    },
                                    '70%': {
                                        transform: 'translateX(-50%) translateY(-5px)'
                                    },
                                    '90%': {
                                        transform: 'translateX(-50%) translateY(-2px)'
                                    }
                                }
                            }}
                        >
                            <ExpandMore />
                        </Fab>
                    )}
                </Box>

            ))}

            {/* Bottom Information Section */}
            <Box
                component="section"
                sx={{
                    py: { xs: 6, md: 8 },
                    backgroundColor: 'background.default',
                    borderTop: '1px solid',
                    borderColor: 'divider'
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                fontWeight: 700,
                                color: 'primary.main',
                                mb: 3,
                                lineHeight: 1.2
                            }}
                        >
                            {t('bottomSection.title')}
                        </Typography>

                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                fontWeight: 600,
                                color: 'text.primary',
                                mb: 4,
                                lineHeight: 1.3
                            }}
                        >
                            {t('bottomSection.subtitle')}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.125rem' },
                                color: 'text.secondary',
                                lineHeight: 1.6,
                                mb: 2
                            }}
                        >
                            {t('bottomSection.description')}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.125rem' },
                                color: 'text.secondary',
                                lineHeight: 1.6
                            }}
                        >
                            {t('bottomSection.additionalInfo')}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default FacilitiesPage;