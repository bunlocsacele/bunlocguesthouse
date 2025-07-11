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
    Whatshot,
    OutdoorGrill,
    MeetingRoom,
    Kitchen,
    Deck
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

// Facility images - replace these paths with your actual image paths
const bonfireImage1 = "/images/facilities/bonfire1.jpeg";
const bonfireImage2 = "/images/facilities/bonfire2.jpeg";
const grillImage1 = "/images/facilities/grill1.jpeg";
const grillImage2 = "/images/facilities/grill2.jpeg";
const conferenceImage1 = "/images/facilities/conference1.jpeg";
const conferenceImage2 = "/images/facilities/conference2.jpeg";
const kitchenImage1 = "/images/facilities/kitchen1.jpeg";
const kitchenImage2 = "/images/facilities/kitchen2.jpeg";
const gazeboImage1 = "/images/facilities/gazebo1.jpeg";
const gazeboImage2 = "/images/facilities/gazebo2.jpeg";

const FacilitiesPage = () => {
    const t = useTranslations('facilities'); // You'll need to add these translations
    const [currentFacility, setCurrentFacility] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Facilities data
    const facilities = [
        {
            id: 'bonfire',
            name: 'Bonfire Area',
            description: 'Cozy outdoor bonfire spot perfect for evening gatherings and storytelling under the stars.',
            images: [
                bonfireImage1,
                bonfireImage2,
            ],
            features: [
                { icon: <Whatshot />, label: 'Fire Pit' },
                { icon: <Deck />, label: 'Seating Area' },
                { icon: <Kitchen />, label: 'S\'mores Kit Available' },
            ]
        },
        {
            id: 'grill',
            name: 'BBQ Grill Spot',
            description: 'Professional outdoor grilling area with all the equipment you need for a perfect barbecue.',
            images: [
                grillImage1,
                grillImage2,
            ],
            features: [
                { icon: <OutdoorGrill />, label: 'Gas Grill' },
                { icon: <Kitchen />, label: 'Prep Area' },
                { icon: <Deck />, label: 'Dining Tables' },
            ]
        },
        {
            id: 'conference',
            name: 'Conference Room',
            description: 'Modern conference facility equipped for meetings, presentations, and business gatherings.',
            images: [
                conferenceImage1,
                conferenceImage2,
            ],
            features: [
                { icon: <MeetingRoom />, label: 'Meeting Space' },
                { icon: <Deck />, label: 'Projector & Screen' },
                { icon: <Kitchen />, label: 'Refreshment Area' },
            ]
        },
        {
            id: 'kitchen',
            name: 'Shared Kitchen',
            description: 'Fully equipped communal kitchen available for all guests to prepare their favorite meals.',
            images: [
                kitchenImage1,
                kitchenImage2,
            ],
            features: [
                { icon: <Kitchen />, label: 'Full Kitchen' },
                { icon: <Deck />, label: 'Dining Area' },
                { icon: <MeetingRoom />, label: 'Cookware Provided' },
            ]
        },
        {
            id: 'gazebo',
            name: 'Garden Gazebo',
            description: 'Peaceful gazebo surrounded by beautiful gardens, perfect for relaxation and outdoor dining.',
            images: [
                gazeboImage1,
                gazeboImage2,
            ],
            features: [
                { icon: <Deck />, label: 'Covered Seating' },
                { icon: <Kitchen />, label: 'Garden Views' },
                { icon: <MeetingRoom />, label: 'Event Space' },
            ]
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
                                component="h1"
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
                                    mb: 3,
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: { xs: '1rem', md: '1.25rem' }
                                }}
                            >
                                {facility.description}
                            </Typography>

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
        </>
    );
};

export default FacilitiesPage;