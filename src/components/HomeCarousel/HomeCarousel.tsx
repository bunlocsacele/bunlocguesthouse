'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    IconButton,
    useTheme,
    Fade,
    Modal,
    Backdrop
} from '@mui/material';
import {
    ArrowBackIos,
    ArrowForwardIos,
    Close,
    Fullscreen
} from '@mui/icons-material';
import Image from 'next/image';
import styles from './HomeCarousel.module.css';

// Define your images array
const images = [
    '/images/homeCarousel/room1.jpeg',
    '/images/homeCarousel/room2.jpeg',
    '/images/homeCarousel/room3.jpeg',
    '/images/homeCarousel/room4.jpeg',
    '/images/homeCarousel/room5.jpeg',
    '/images/homeCarousel/room6.jpeg',
    '/images/homeCarousel/room7.jpeg',
    '/images/homeCarousel/room8.jpeg',
    '/images/homeCarousel/room9.jpeg',
];

const HomeCarousel: React.FC = () => {
    const theme = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [fadeIn, setFadeIn] = useState(true);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-advance slides - Fixed dependency array
    useEffect(() => {
        if (!isAutoplay) return;

        autoplayTimerRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => {
            if (autoplayTimerRef.current) {
                clearInterval(autoplayTimerRef.current);
            }
        };
    }, [isAutoplay]); // Removed images.length - it's a constant

    const pauseAutoplay = () => {
        setIsAutoplay(false);
        if (timerRef.current) clearTimeout(timerRef.current);
        if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);

        timerRef.current = setTimeout(() => {
            setIsAutoplay(true);
        }, 15000);
    };

    const handlePrev = () => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
            setFadeIn(true);
        }, 150);
        pauseAutoplay();
    };

    const handleNext = () => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
            setFadeIn(true);
        }, 150);
        pauseAutoplay();
    };

    const handleImageClick = () => {
        setSelectedImage(images[currentIndex]);
        setIsAutoplay(false);
    };

    const handleCloseFullscreen = () => {
        setSelectedImage(null);
        setIsAutoplay(true);
    };

    // Touch/swipe handlers
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
    };

    // Cleanup timers
    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
        };
    }, []);

    return (
        <Box sx={{ position: 'relative', width: '100%', maxWidth: 800, mx: 'auto', mt: 2 }}>
            {/* Main Carousel */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 300, sm: 400, md: 500 },
                    overflow: 'hidden',
                    borderRadius: 2,
                    cursor: 'pointer',
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onClick={handleImageClick}
            >
                <Fade in={fadeIn} timeout={300}>
                    {/* Apply the CSS module class here */}
                    <div className={styles.imageWrapper}>
                        <Image
                            src={images[currentIndex]}
                            alt={`Room ${currentIndex + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                            style={{ objectFit: 'cover' }}
                            priority={currentIndex === 0}
                        />

                        {/* Fullscreen icon overlay - positioned above the gradient */}
                        <div className={styles.fullscreenIcon}>
                            <Fullscreen />
                        </div>
                    </div>
                </Fade>

                {/* Navigation Arrows - positioned above the gradient */}
                <IconButton
                    onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                    }}
                    className={`${styles.navButton} ${styles.navButtonLeft}`}
                >
                    <ArrowBackIos />
                </IconButton>

                <IconButton
                    onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                    }}
                    className={`${styles.navButton} ${styles.navButtonRight}`}
                >
                    <ArrowForwardIos />
                </IconButton>
            </Box>

            {/* Dots Indicator */}
            <div className={styles.dotsContainer}>
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setCurrentIndex(index);
                            pauseAutoplay();
                        }}
                        className={`${styles.dot} ${index === currentIndex ? styles.dotActive : styles.dotInactive
                            }`}
                        style={{
                            '--primary-main': theme.palette.primary.main,
                            '--primary-light': theme.palette.primary.light,
                            '--grey-400': theme.palette.grey[400],
                        } as React.CSSProperties}
                    />
                ))}
            </div>

            {/* Fullscreen Modal */}
            <Modal
                open={!!selectedImage}
                onClose={handleCloseFullscreen}
                closeAfterTransition
                slots={{
                    backdrop: Backdrop
                }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                        sx: { backgroundColor: 'rgba(0, 0, 0, 0.9)' }
                    }
                }}
            >
                <Fade in={!!selectedImage}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '90vw',
                            height: '90vh',
                            outline: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {selectedImage && (
                            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                                <Image
                                    src={selectedImage}
                                    alt="Fullscreen view"
                                    fill
                                    sizes="90vw"
                                    style={{ objectFit: 'contain' }}
                                />
                                <IconButton
                                    onClick={handleCloseFullscreen}
                                    sx={{
                                        position: 'absolute',
                                        top: 16,
                                        right: 16,
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        },
                                    }}
                                >
                                    <Close />
                                </IconButton>
                            </Box>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
};

export default HomeCarousel;