'use client';

import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import {
    Weekend as WeekendIcon,
    Groups as GroupsIcon,
    AcUnit as SkiIcon,
    Hiking as HikingIcon,
    Event as EventIcon,
    Home as HomeIcon
} from '@mui/icons-material';
import ParaglidingIcon from '@mui/icons-material/Paragliding';
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { useTranslations } from 'next-intl';

interface HomeHeroSectionProps {
    sx?: any;
    className?: string;
    containerMaxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({
    sx = {},
    className,
    containerMaxWidth = 'lg'
}) => {
    const t = useTranslations('home.hero');

    const accommodationReasons = [
        {
            icon: <WeekendIcon />,
            titleKey: 'reasons.weekend.title',
            descriptionKey: 'reasons.weekend.description'
        },
        {
            icon: <MdOutlineFamilyRestroom size="2.5rem" />,
            titleKey: 'reasons.family.title',
            descriptionKey: 'reasons.family.description'
        },
        {
            icon: <ParaglidingIcon />,
            titleKey: 'reasons.paragliding.title',
            descriptionKey: 'reasons.paragliding.description'
        },
        {
            icon: <GroupsIcon />,
            titleKey: 'reasons.teambuilding.title',
            descriptionKey: 'reasons.teambuilding.description'
        },
        {
            icon: <SkiIcon />,
            titleKey: 'reasons.winter.title',
            descriptionKey: 'reasons.winter.description'
        },
        {
            icon: <HikingIcon />,
            titleKey: 'reasons.summer.title',
            descriptionKey: 'reasons.summer.description'
        },
        {
            icon: <EventIcon />,
            titleKey: 'reasons.events.title',
            descriptionKey: 'reasons.events.description'
        },
        {
            icon: <HomeIcon />,
            titleKey: 'reasons.stopover.title',
            descriptionKey: 'reasons.stopover.description'
        }
    ];

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 4, md: 6 },
                backgroundColor: 'background.default',
                ...sx
            }}
            className={className}
        >
            <Container maxWidth={containerMaxWidth}>
                {/* Main Heading */}
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
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
                        {t('title')}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            color: 'text.secondary',
                            maxWidth: '800px',
                            mx: 'auto',
                            lineHeight: 1.6,
                            mb: 4
                        }}
                    >
                        {t('subtitle')}
                    </Typography>
                </Box>

                {/* Accommodation Reasons Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(4, 1fr)'
                        },
                        gap: { xs: 2, md: 3 },
                        mb: { xs: 4, md: 6 }
                    }}
                >
                    {accommodationReasons.map((reason, index) => (
                        <Card
                            key={index}
                            sx={{
                                height: '100%',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 4
                                },
                                borderRadius: 2
                            }}
                        >
                            <CardContent
                                sx={{
                                    textAlign: 'center',
                                    p: { xs: 2, md: 3 },
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <Box
                                    sx={{
                                        color: 'primary.main',
                                        mb: 2,
                                        '& .MuiSvgIcon-root': {
                                            fontSize: '2.5rem'
                                        },
                                        '& svg': {
                                            fontSize: '2.5rem'
                                        }
                                    }}
                                >
                                    {reason.icon}
                                </Box>

                                <Typography
                                    variant="h2"
                                    component="h2"
                                    sx={{
                                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                                        fontWeight: 600,
                                        color: 'text.primary',
                                        mb: 1.5,
                                        textAlign: 'center'
                                    }}
                                >
                                    {t(reason.titleKey)}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        textAlign: 'center',
                                        lineHeight: 1.5,
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    {t(reason.descriptionKey)}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                {/* Closing Message */}
                <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 6 } }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            fontWeight: 600,
                            color: 'primary.main',
                            mb: 2
                        }}
                    >
                        {t('closing.title')}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            color: 'text.secondary',
                            maxWidth: '600px',
                            mx: 'auto',
                            lineHeight: 1.6
                        }}
                    >
                        {t('closing.message')}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default HomeHeroSection;