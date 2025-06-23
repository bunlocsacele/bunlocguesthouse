'use client';

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
    Box,
    Card,
    CardContent,
    Typography,
    LinearProgress,
    useTheme,
    alpha
} from '@mui/material';
import { LocationOn, Launch } from '@mui/icons-material';
import styles from './MapsCard.module.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

interface MapLocation {
    id: string;
    title: string;
    image: StaticImageData;
    mapsUrl: string;
    description?: string;
}

interface MapsCardProps {
    locations: MapLocation[];
    autoSlideInterval?: number;
    className?: string;
}

const MapsCard: React.FC<MapsCardProps> = ({
    locations,
    autoSlideInterval = 4000,
    className = ''
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [cardsToShow, setCardsToShow] = useState(3);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const [startX, setStartX] = useState(0);
    const [autoPlayPaused, setAutoPlayPaused] = useState(false);
    const theme = useTheme();

    // Determine number of cards to show based on screen size
    useEffect(() => {
        const updateCardsToShow = () => {
            const width = window.innerWidth;
            if (width >= 1600) {
                setCardsToShow(7); // Wide screens
            } else if (width >= 1200) {
                setCardsToShow(5); // Large screens
            } else {
                setCardsToShow(3); // Default for tablets and mobile
            }
        };

        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    // Auto-slide functionality with pause on interaction
    useEffect(() => {
        if (locations.length <= 1 || autoPlayPaused) return;

        const interval = setInterval(() => {
            if (!isDragging) {
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrentIndex((prevIndex) =>
                        prevIndex === locations.length - 1 ? 0 : prevIndex + 1
                    );
                    setIsAnimating(false);
                }, 300);
            }
        }, autoSlideInterval);

        return () => clearInterval(interval);
    }, [locations.length, autoSlideInterval, autoPlayPaused, isDragging]);

    const handleCardClick = (mapsUrl: string) => {
        console.log('Card clicked!', mapsUrl);
        if (!isDragging && Math.abs(dragOffset) < 10) {
            window.open(mapsUrl, '_blank', 'noopener,noreferrer');
        }
    };

    // Touch/Mouse handlers for swiping
    const handleStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
        setDragOffset(0);
        setAutoPlayPaused(true);
    };

    const handleMove = (clientX: number) => {
        if (!isDragging) return;

        const diff = clientX - startX;
        setDragOffset(diff);
    };

    const handleEnd = () => {
        if (!isDragging) return;

        setIsDragging(false);
        const threshold = 50;

        if (Math.abs(dragOffset) > threshold) {
            if (dragOffset > 0) {
                // Swipe right - go to previous
                setCurrentIndex(prev => prev === 0 ? locations.length - 1 : prev - 1);
            } else {
                // Swipe left - go to next
                setCurrentIndex(prev => prev === locations.length - 1 ? 0 : prev + 1);
            }
        }

        setDragOffset(0);

        // Resume autoplay after 3 seconds
        setTimeout(() => setAutoPlayPaused(false), 3000);
    };

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleEnd();
    };

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        handleStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleEnd();
    };

    if (!locations.length) return null;

    // Create array of visible cards based on screen size
    const getVisibleCards = () => {
        const cards = [];
        for (let i = 0; i < cardsToShow; i++) {
            const index = (currentIndex + i) % locations.length;
            cards.push({
                ...locations[index],
                position: i
            });
        }
        return cards;
    };

    const visibleCards = getVisibleCards();

    return (
        <Box className={`${styles.carouselContainer} ${className}`}>


            {/* Cards container */}
            <Box
                className={styles.cardsContainer}
                onMouseDown={handleMouseDown}
                onMouseMove={isDragging ? handleMouseMove : undefined}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                sx={{
                    transform: `translateX(${dragOffset * 0.5}px)`,
                    transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    userSelect: 'none',
                    touchAction: 'pan-y',
                }}
            >
                {visibleCards.map((card, index) => (
                    <Card
                        key={`${card.id}-${currentIndex}`}
                        className={`${styles.card} ${styles[`card${index}`]}`}
                        elevation={6}
                        sx={{
                            borderRadius: 3,
                            overflow: 'hidden',
                            cursor: isDragging ? 'grabbing' : 'pointer',
                            transition: isDragging ? 'none' : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: isAnimating ? 'scale(0.95)' : 'scale(1)',
                            filter: isAnimating ? 'blur(2px)' : 'none',
                            '&:hover': !isDragging ? {
                                transform: 'translateY(-8px) scale(1.02)',
                                boxShadow: theme.shadows[12],
                            } : {},
                            pointerEvents: isDragging ? 'none' : 'auto',
                        }}
                        onClick={() => handleCardClick(card.mapsUrl)}
                    >
                        {/* Background Image */}
                        <Box className={styles.imageContainer}>
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                            />
                            <Box
                                className={styles.imageOverlay}
                                sx={{
                                    background: `linear-gradient(
                                        to top, 
                                        ${alpha(theme.palette.common.black, 0.8)} 0%, 
                                        ${alpha(theme.palette.common.black, 0.3)} 50%, 
                                        transparent 100%
                                    )`
                                }}
                            />
                        </Box>

                        {/* Content */}
                        <CardContent className={styles.cardContent}>
                            <Typography
                                variant="h6"
                                component="h3"
                                className={styles.cardTitle}
                                sx={{
                                    color: theme.palette.common.white,
                                    fontWeight: 700,
                                    mb: 1,
                                    textShadow: '0 2px 4px rgba(0,0,0,0.7)',
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                                }}
                            >
                                {card.title}
                            </Typography>

                            {card.description && (
                                <Typography
                                    variant="body2"
                                    className={styles.cardDescription}
                                    sx={{
                                        color: alpha(theme.palette.common.white, 0.9),
                                        mb: 1.5,
                                        textShadow: '0 1px 2px rgba(0,0,0,0.7)',
                                        fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                    }}
                                > <DirectionsCarIcon sx={{ mr: 0.5, fontSize: { xs: 12, md: 14 } }} />
                                    {card.description}
                                </Typography>
                            )}

                            <Box className={styles.mapsLink}>
                                <LocationOn
                                    sx={{
                                        color: theme.palette.primary.light,

                                        fontSize: { xs: 16, md: 18 }
                                    }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: theme.palette.primary.light,
                                        fontWeight: 500,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 0.5,
                                        fontSize: { xs: '0.7rem', md: '0.75rem' }
                                    }}
                                >
                                    Check time & distance on Maps
                                    <Launch sx={{ fontSize: { xs: 12, md: 14 } }} />
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Progress bar */}
            <LinearProgress
                variant="determinate"
                value={((currentIndex + 1) / locations.length) * 100}
                sx={{
                    width: '100%',
                    height: 4,
                    borderRadius: 2,
                    mb: 4,
                    mt: 2,
                    backgroundColor: alpha(theme.palette.grey[300], 0.3),
                    '& .MuiLinearProgress-bar': {
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        borderRadius: 2,
                    }
                }}
            />
        </Box>
    );
};

export default MapsCard;