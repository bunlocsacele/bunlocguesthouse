'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
import { useTranslations } from 'next-intl';

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
    const [startY, setStartY] = useState(0);
    const [autoPlayPaused, setAutoPlayPaused] = useState(false);
    const [touchStartTime, setTouchStartTime] = useState(0);
    const [isHorizontalSwipe, setIsHorizontalSwipe] = useState(false);
    const theme = useTheme();
    const t = useTranslations('attractions');

    // Determine number of cards to show based on screen size
    useEffect(() => {
        const updateCardsToShow = () => {
            const width = window.innerWidth;
            if (width >= 1600) {
                setCardsToShow(7);
            } else if (width >= 1200) {
                setCardsToShow(5);
            } else {
                setCardsToShow(3);
            }
        };

        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    // Memoize the swipe distance calculation to avoid dependency issues
    const getSwipeDistance = useCallback(() => {
        if (locations.length <= cardsToShow) {
            return 1;
        } else if (locations.length <= cardsToShow * 2) {
            return Math.max(1, Math.floor(cardsToShow / 2));
        } else {
            return Math.max(1, cardsToShow - 1);
        }
    }, [locations.length, cardsToShow]);

    // Auto-slide functionality with pause on interaction
    useEffect(() => {
        if (locations.length <= 1 || autoPlayPaused) return;

        const interval = setInterval(() => {
            if (!isDragging) {
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => {
                        const swipeDistance = getSwipeDistance();
                        const newIndex = prevIndex + swipeDistance;
                        return newIndex >= locations.length ? newIndex % locations.length : newIndex;
                    });
                    setIsAnimating(false);
                }, 300);
            }
        }, autoSlideInterval);

        return () => clearInterval(interval);
    }, [locations.length, autoSlideInterval, autoPlayPaused, isDragging, getSwipeDistance]);

    const handleCardClick = (mapsUrl: string) => {
        // Only open if it's a genuine click (not a drag)
        if (!isDragging && Math.abs(dragOffset) < 5) {
            window.open(mapsUrl, '_blank', 'noopener,noreferrer');
        }
    };

    // Improved touch/mouse handlers
    const handleStart = (clientX: number, clientY: number) => {
        setStartX(clientX);
        setStartY(clientY);
        setDragOffset(0);
        setTouchStartTime(Date.now());
        setAutoPlayPaused(true);
        setIsHorizontalSwipe(false);
    };

    const handleMove = (clientX: number, clientY: number) => {
        const diffX = clientX - startX;
        const diffY = clientY - startY;

        // Determine if this is a horizontal or vertical swipe
        const isHorizontal = Math.abs(diffX) > Math.abs(diffY);

        // Only handle horizontal swipes and prevent vertical scrolling interference
        if (Math.abs(diffX) > 10 && isHorizontal) {
            if (!isDragging) {
                setIsDragging(true);
                setIsHorizontalSwipe(true);
            }
            setDragOffset(diffX);
        } else if (Math.abs(diffY) > 10 && !isHorizontal) {
            // This is a vertical swipe, don't interfere with page scrolling
            setIsHorizontalSwipe(false);
        }
    };

    const handleEnd = () => {
        const touchDuration = Date.now() - touchStartTime;
        const isQuickTap = touchDuration < 200 && Math.abs(dragOffset) < 10;

        if (isDragging && !isQuickTap && isHorizontalSwipe) {
            const threshold = 50;

            if (Math.abs(dragOffset) > threshold) {
                const swipeDistance = getSwipeDistance();

                if (dragOffset > 0) {
                    // Swipe right - go to previous
                    setCurrentIndex(prev => {
                        const newIndex = prev - swipeDistance;
                        return newIndex < 0 ? Math.max(0, locations.length + newIndex) : newIndex;
                    });
                } else {
                    // Swipe left - go to next
                    setCurrentIndex(prev => {
                        const newIndex = prev + swipeDistance;
                        return newIndex >= locations.length ? newIndex % locations.length : newIndex;
                    });
                }
            }
        }

        // Reset states
        setIsDragging(false);
        setDragOffset(0);
        setTouchStartTime(0);
        setIsHorizontalSwipe(false);

        // Resume autoplay after 3 seconds
        setTimeout(() => setAutoPlayPaused(false), 3000);
    };

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleStart(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (touchStartTime > 0) {
            handleMove(e.clientX, e.clientY);
        }
    };

    const handleMouseUp = () => {
        if (touchStartTime > 0) {
            handleEnd();
        }
    };

    // Touch events - Enhanced with proper preventDefault handling
    const handleTouchStart = (e: React.TouchEvent) => {
        handleStart(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartTime > 0) {
            handleMove(e.touches[0].clientX, e.touches[0].clientY);

            // Only prevent default for horizontal swipes to avoid interfering with page scroll
            if (isHorizontalSwipe && isDragging) {
                e.preventDefault();
            }
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartTime > 0) {
            // Prevent default only if we were doing a horizontal swipe
            if (isHorizontalSwipe && isDragging) {
                e.preventDefault();
            }
            handleEnd();
        }
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
            {/* Divider Text */}
            <p className={styles.dividerText}>
                {t("discover")}
            </p>

            {/* Cards container */}
            <Box
                className={styles.cardsContainer}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                sx={{
                    transform: `translateX(${isDragging && isHorizontalSwipe ? dragOffset * 0.6 : 0}px)`,
                    transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    userSelect: 'none',
                    // Improved touch handling
                    touchAction: 'pan-y pinch-zoom',
                    WebkitOverflowScrolling: 'touch',
                    overscrollBehavior: 'contain',
                    // Ensure the container doesn't interfere with page layout
                    position: 'relative',
                    isolation: 'isolate'
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
                            // Ensure cards don't interfere with page layout
                            position: 'relative',
                            zIndex: 1,
                            touchAction: 'pan-y pinch-zoom',
                            '&:hover': !isDragging ? {
                                transform: 'translateY(-8px) scale(1.02)',
                                boxShadow: theme.shadows[12],
                            } : {},
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
                                style={{
                                    touchAction: 'pan-y pinch-zoom',
                                    pointerEvents: 'none' // Prevent image from interfering with touch events
                                }}
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
                        <CardContent
                            className={styles.cardContent}
                            sx={{
                                touchAction: 'pan-y pinch-zoom'
                            }}
                        >
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
                                >
                                    <DirectionsCarIcon sx={{ mr: 0.5, fontSize: { xs: 12, md: 14 } }} />
                                    {card.description}
                                </Typography>
                            )}

                            <Box
                                className={styles.mapsLink}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (!isDragging && Math.abs(dragOffset) < 5) {
                                        window.open(card.mapsUrl, '_blank', 'noopener,noreferrer');
                                    }
                                }}
                                sx={{
                                    cursor: 'pointer',
                                    touchAction: 'manipulation',
                                    '&:hover': {
                                        opacity: 0.8
                                    }
                                }}
                            >
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
                                    {t("distance")}
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
                    touchAction: 'pan-y pinch-zoom',
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