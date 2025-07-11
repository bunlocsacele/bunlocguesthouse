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
    Bed,
    Wifi,
    Landscape,
    Tv,
    RadioButtonUnchecked,
    RadioButtonChecked
} from '@mui/icons-material';
import ShowerIcon from '@mui/icons-material/Shower';
import BalconyIcon from '@mui/icons-material/Balcony';
import { TwinBeds, ThreeBeds, FamilyBeds, SunriseIcon } from "@/components/CustomIcons/CustomIcons"
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import { useTranslations } from 'next-intl';

// import twinStandard1 from "@/../public/images/rooms/twinStandard1.jpg"
// import twinStandard11 from "@/../public/images/rooms/twinStandard11.jpg"
// import twinStandard2 from "@/../public/images/rooms/twinStandard2.jpg"
// import twinStandard22 from "@/../public/images/rooms/twinStandard22.jpg"
// import twinStandard3 from "@/../public/images/rooms/twinStandard3.jpg"
// import twinStandard33 from "@/../public/images/rooms/twinStandard33.jpg"
// import family from "@/../public/images/rooms/family.jpeg"
// import family1 from "@/../public/images/rooms/family1.jpeg"
// import matrimoniala from "@/../public/images/rooms/Matrimoniala.jpeg"
// import matrimoniala1 from "@/../public/images/rooms/Matrimoniala1.jpeg"
// import trippleStandard from "@/../public/images/rooms/trippleStandard.jpg"
// import trippleStandard1 from "@/../public/images/rooms/trippleStandard1.jpg"

const twinStandard1 = "/images/rooms/twinStandard1.jpg"
const twinStandard11 = "/images/rooms/twinStandard11.jpg"
const twinStandard2 = "/images/rooms/twinStandard2.jpg"
const twinStandard22 = "/images/rooms/twinStandard22.jpg"
const twinStandard3 = "/images/rooms/twinStandard3.jpg"
const twinStandard33 = "/images/rooms/twinStandard33.jpg"
const family = "/images/rooms/family.jpeg"
const family1 = "/images/rooms/family1.jpeg"
const matrimoniala = "/images/rooms/Matrimoniala.jpeg"
const matrimoniala1 = "/images/rooms/Matrimoniala1.jpeg"
const trippleStandard = "/images/rooms/trippleStandard.jpg"
const trippleStandard1 = "/images/rooms/trippleStandard1.jpg"

const RoomsPage = () => {
    const t = useTranslations('rooms.roomDetails');
    const tAmenities = useTranslations('rooms.amenities');
    const [currentRoom, setCurrentRoom] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Room data based on your navbar structure
    const rooms = [
        {
            id: 'twinstandard1',
            name: t('twinStandard.name'),
            description: t('twinStandard.description'),
            images: [
                twinStandard1,
                twinStandard11,
            ],
            amenities: [
                { icon: <TwinBeds />, label: tAmenities('twinBeds') },
                { icon: <ShowerIcon />, label: tAmenities('privateShower') },
                { icon: <Wifi />, label: tAmenities('freeWifi') },
                { icon: <Tv />, label: tAmenities('tv') },
                { icon: <BalconyIcon />, label: tAmenities('personalBalcony') },

                { icon: <SunriseIcon />, label: tAmenities('sunriseView') },
            ]
        },
        {
            id: 'twinstandard2',
            name: t('twinStandard.name'),
            description: t('twinStandard.description'),
            images: [
                twinStandard2,
                twinStandard22,
            ],
            amenities: [
                { icon: <TwinBeds />, label: tAmenities('twinBeds') },
                { icon: <ShowerIcon />, label: tAmenities('privateShower') },
                { icon: <Wifi />, label: tAmenities('freeWifi') },
                { icon: <Tv />, label: tAmenities('tv') },
                { icon: <BalconyIcon />, label: tAmenities('personalBalcony') },
                { icon: <Landscape />, label: tAmenities('mountainView') },
            ]
        },
        {
            id: 'twinstandard3',
            name: t('twinStandard.name'),
            description: t('twinStandard.description'),
            images: [
                twinStandard3,
                twinStandard33
            ],
            amenities: [
                { icon: <TwinBeds />, label: tAmenities('twinBeds') },
                { icon: <ShowerIcon />, label: tAmenities('privateShower') },
                { icon: <Wifi />, label: tAmenities('freeWifi') },
                { icon: <Tv />, label: tAmenities('tv') },
                { icon: <BalconyIcon />, label: tAmenities('personalBalcony') },
                { icon: <WbTwilightIcon />, label: tAmenities('sunsetView') },
            ]
        },
        {
            id: 'tripplestandard',
            name: t('tripleStandard.name'),
            description: t('tripleStandard.description'),
            images: [
                trippleStandard,
                trippleStandard1,
            ],
            amenities: [
                { icon: <ThreeBeds />, label: tAmenities('tripleBeds') },
                { icon: <ShowerIcon />, label: tAmenities('privateShower') },
                { icon: <Wifi />, label: tAmenities('freeWifi') },
                { icon: <Tv />, label: tAmenities('tv') },
                { icon: <BalconyIcon />, label: tAmenities('personalBalcony') },
                { icon: <Landscape />, label: tAmenities('mountainView') },
            ]
        },
        {
            id: 'deluxe-room',
            name: 'Matrimonială',
            description: 'Romantic double room with amenities for couples.',
            images: [
                matrimoniala,
                matrimoniala1,
            ],
            amenities: [
                { icon: <Bed />, label: tAmenities('doubleBed') },
                { icon: <ShowerIcon />, label: tAmenities('privateShower') },
                { icon: <Wifi />, label: tAmenities('freeWifi') },
                { icon: <Tv />, label: tAmenities('tv') },
                { icon: <BalconyIcon />, label: tAmenities('personalBalcony') },
                { icon: <Landscape />, label: tAmenities('mountainView') },
            ]
        },
        {
            id: 'family',
            name: 'Family Room',
            description: 'Perfect for families of 4! Spacious room with one king size bed and two single beds.',
            images: [
                family,
                family1,
            ],
            amenities: [
                { icon: <FamilyBeds />, label: 'Multiple Beds' },
                { icon: <ShowerIcon />, label: tAmenities('privateShower') },
                { icon: <Wifi />, label: tAmenities('freeWifi') },
                { icon: <Tv />, label: tAmenities('tv') },
                { icon: <BalconyIcon />, label: tAmenities('personalBalcony') },
                { icon: <Landscape />, label: tAmenities('mountainView') },
            ]
        }
    ];

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) =>
                (prev + 1) % rooms[currentRoom].images.length
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [currentRoom, rooms]);

    // Handle scroll to detect current room
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const newCurrentRoom = Math.floor(scrollPosition / windowHeight);

            if (newCurrentRoom !== currentRoom && newCurrentRoom < rooms.length) {
                setCurrentRoom(newCurrentRoom);
                setCurrentImageIndex(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentRoom, rooms.length]);

    // Handle navigation from other pages using sessionStorage
    useEffect(() => {
        const scrollToRoom = sessionStorage.getItem('scrollToRoom');
        if (scrollToRoom !== null) {
            const roomIndex = parseInt(scrollToRoom, 10);
            if (roomIndex >= 0 && roomIndex < rooms.length) {
                // Small delay to ensure page is fully loaded
                setTimeout(() => {
                    const targetPosition = roomIndex * window.innerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    setCurrentRoom(roomIndex);
                    setCurrentImageIndex(0);
                }, 100);
            }
            // Clear the sessionStorage after using it
            sessionStorage.removeItem('scrollToRoom');
        }
    }, [rooms.length]);

    const scrollToRoom = (roomIndex: number) => {
        const targetPosition = roomIndex * window.innerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Room Sections */}
            {rooms.map((room, index) => (
                <Box
                    key={room.id}
                    sx={{
                        position: 'relative',
                        height: '100vh',
                        width: '100vw',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: `url(${room.images[currentRoom === index ? currentImageIndex : 0]})`,
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
                                {room.name}
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: { xs: '1rem', md: '1.25rem' }
                                }}
                            >
                                {room.description}
                            </Typography>

                            {/* Amenities Grid using Box with CSS Grid */}
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: 'repeat(3, 1fr)',  // 2 columns on mobile
                                        sm: 'repeat(3, 1fr)'   // 3 columns on tablet and up
                                    },
                                    gap: 2,
                                    mb: 4
                                }}
                            >
                                {room.amenities.map((amenity, amenityIndex) => (
                                    <Card
                                        key={amenityIndex}
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
                                            {React.cloneElement(amenity.icon, { fontSize: 'large' })}
                                        </Box>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                            {amenity.label}
                                        </Typography>
                                    </Card>
                                ))}
                            </Box>

                            {/* Image indicators */}
                        </Paper>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3, mt: 2 }}>
                            {room.images.map((_, imgIndex) => (
                                <IconButton
                                    key={imgIndex}
                                    size="small"
                                    onClick={() => setCurrentImageIndex(imgIndex)}
                                    sx={{
                                        p: 0.5,
                                        color: (currentRoom === index && currentImageIndex === imgIndex)
                                            ? '#e6c547'
                                            : alpha('#fff', 0.5)
                                    }}
                                >
                                    {(currentRoom === index && currentImageIndex === imgIndex)
                                        ? <RadioButtonChecked fontSize="small" />
                                        : <RadioButtonUnchecked fontSize="small" />
                                    }
                                </IconButton>
                            ))}
                        </Box>
                    </Container>

                    {/* Scroll indicator */}
                    {index < rooms.length - 1 && (
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

export default RoomsPage;