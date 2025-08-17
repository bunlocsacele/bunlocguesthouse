'use client';

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Chip,
    Divider,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar
} from '@mui/material';
import {
    CalendarToday,
    LocationOn,
    EmojiEvents,
    Groups,
    DirectionsRun,
    Terrain,
    Schedule,
    Star,
    Public,
    NightsStay,
    Forest
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { use } from 'react';

// Updated interface for Next.js App Router with Promise params
interface MarathonsBlogPageProps {
    params: Promise<{
        locale: string;
    }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const MarathonsBlogPage: React.FC<MarathonsBlogPageProps> = ({ params }) => {
    const { locale } = use(params); // Use React's use() hook to unwrap the Promise
    const t = useTranslations('blog.marathons');

    // Annual marathons data - organized by year and status
    const marathonEvents = {
        upcoming2025: [
            {
                nameKey: 'events.nightChallenge2025.name',
                dateKey: 'events.nightChallenge2025.date',
                locationKey: 'events.nightChallenge2025.location',
                distanceKey: 'events.nightChallenge2025.distance',
                descriptionKey: 'events.nightChallenge2025.description',
                difficulty: 'Dificil',
                type: 'Night Trail',
                status: 'upcoming'
            }
        ],
        completed2025: [
            {
                nameKey: 'events.brasovMarathon2025.name',
                dateKey: 'events.brasovMarathon2025.date',
                locationKey: 'events.brasovMarathon2025.location',
                distanceKey: 'events.brasovMarathon2025.distance',
                elevationKey: 'events.brasovMarathon2025.elevation',
                descriptionKey: 'events.brasovMarathon2025.description',
                difficulty: 'Extrem',
                type: 'Trail Marathon',
                status: 'completed'
            },
            {
                nameKey: 'events.brasovRunning2025.name',
                dateKey: 'events.brasovRunning2025.date',
                locationKey: 'events.brasovRunning2025.location',
                distanceKey: 'events.brasovRunning2025.distance',
                descriptionKey: 'events.brasovRunning2025.description',
                difficulty: 'Ușor',
                type: 'Road Race',
                status: 'completed'
            },
            {
                nameKey: 'events.carpathiaTrails2025.name',
                dateKey: 'events.carpathiaTrails2025.date',
                locationKey: 'events.carpathiaTrails2025.location',
                distanceKey: 'events.carpathiaTrails2025.distance',
                descriptionKey: 'events.carpathiaTrails2025.description',
                difficulty: 'Extrem',
                type: 'Ultra Trail',
                status: 'completed'
            },
            {
                nameKey: 'events.semimaraton2025.name',
                dateKey: 'events.semimaraton2025.date',
                locationKey: 'events.semimaraton2025.location',
                distanceKey: 'events.semimaraton2025.distance',
                descriptionKey: 'events.semimaraton2025.description',
                difficulty: 'Mediu',
                type: 'Half Marathon',
                status: 'completed'
            }
        ],
        year2024: [
            {
                nameKey: 'events.brasovMarathon2024.name',
                dateKey: 'events.brasovMarathon2024.date',
                locationKey: 'events.brasovMarathon2024.location',
                distanceKey: 'events.brasovMarathon2024.distance',
                descriptionKey: 'events.brasovMarathon2024.description',
                difficulty: 'Extrem',
                type: 'Trail Marathon',
                status: 'past'
            },
            {
                nameKey: 'events.brasovRunning2024.name',
                dateKey: 'events.brasovRunning2024.date',
                locationKey: 'events.brasovRunning2024.location',
                distanceKey: 'events.brasovRunning2024.distance',
                descriptionKey: 'events.brasovRunning2024.description',
                difficulty: 'Ușor',
                type: 'Road Race',
                status: 'past'
            }
        ],
        year2023: [
            {
                nameKey: 'events.brasovMarathon2023.name',
                dateKey: 'events.brasovMarathon2023.date',
                locationKey: 'events.brasovMarathon2023.location',
                distanceKey: 'events.brasovMarathon2023.distance',
                descriptionKey: 'events.brasovMarathon2023.description',
                difficulty: 'Extrem',
                type: 'Trail Marathon',
                status: 'past'
            },
            {
                nameKey: 'events.pietraCraiului2023.name',
                dateKey: 'events.pietraCraiului2023.date',
                locationKey: 'events.pietraCraiului2023.location',
                distanceKey: 'events.pietraCraiului2023.distance',
                descriptionKey: 'events.pietraCraiului2023.description',
                difficulty: 'Dificil',
                type: 'Mountain Marathon',
                status: 'past'
            }
        ]
    };

    const trailLocations = [
        {
            nameKey: 'trailLocations.tampa.name',
            descriptionKey: 'trailLocations.tampa.description',
            featuresKey: 'trailLocations.tampa.features'
        },
        {
            nameKey: 'trailLocations.postavaru.name',
            descriptionKey: 'trailLocations.postavaru.description',
            featuresKey: 'trailLocations.postavaru.features'
        },
        {
            nameKey: 'trailLocations.pietraCraiului.name',
            descriptionKey: 'trailLocations.pietraCraiului.description',
            featuresKey: 'trailLocations.pietraCraiului.features'
        },
        {
            nameKey: 'trailLocations.centruIstoric.name',
            descriptionKey: 'trailLocations.centruIstoric.description',
            featuresKey: 'trailLocations.centruIstoric.features'
        }
    ];

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Ușor': return 'success';
            case 'Mediu': return 'warning';
            case 'Dificil': return 'error';
            case 'Extrem': return 'error';
            default: return 'default';
        }
    };

    const getStatusChip = (status: string) => {
        switch (status) {
            case 'upcoming':
                return <Chip label={t('status.upcoming')} color="success" size="small" />;
            case 'completed':
                return <Chip label={t('status.completed')} color="default" size="small" />;
            case 'past':
                return <Chip label={t('status.past')} color="default" size="small" />;
            default:
                return null;
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 2,
                        lineHeight: 1.2
                    }}
                >
                    {t('title')}
                </Typography>

                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        fontWeight: 500,
                        color: 'text.secondary',
                        mb: 4,
                        maxWidth: '800px',
                        mx: 'auto'
                    }}
                >
                    {t('subtitle')}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                    <Chip icon={<LocationOn />} label={t('chips.location')} variant="outlined" />
                    <Chip icon={<CalendarToday />} label={t('chips.years')} variant="outlined" />
                    <Chip icon={<DirectionsRun />} label={t('chips.sports')} variant="outlined" />
                    <Chip icon={<Forest />} label={t('chips.terrain')} variant="outlined" />
                </Box>
            </Box>

            {/* Introduction */}
            <Paper elevation={1} sx={{ p: 4, mb: 6 }}>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                    {t('introduction.paragraph1')}
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                    {t('introduction.paragraph2')}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                    {t('introduction.paragraph3')}
                </Typography>
            </Paper>

            {/* Upcoming Events 2025 */}
            {marathonEvents.upcoming2025.length > 0 && (
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            fontWeight: 600,
                            color: 'success.main',
                            mb: 4,
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1
                        }}
                    >
                        <Schedule />
                        {t('sections.upcoming2025')}
                    </Typography>

                    <Grid container spacing={3}>
                        {marathonEvents.upcoming2025.map((event, index) => (
                            <Grid size={{ xs: 12, md: 6 }} key={index}>
                                <Card sx={{ height: '100%', '&:hover': { boxShadow: 4 }, border: '2px solid', borderColor: 'success.light' }}>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                            <Chip label={event.type} color="primary" size="small" />
                                            <Chip label={event.difficulty} color={getDifficultyColor(event.difficulty)} size="small" />
                                            {getStatusChip(event.status)}
                                        </Box>

                                        <Typography variant="h4" component="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 2 }}>
                                            {t(event.nameKey)}
                                        </Typography>

                                        <List dense>
                                            <ListItem sx={{ px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <CalendarToday fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={t(event.dateKey)} />
                                            </ListItem>
                                            <ListItem sx={{ px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <LocationOn fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={t(event.locationKey)} />
                                            </ListItem>
                                            <ListItem sx={{ px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <DirectionsRun fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={t(event.distanceKey)} />
                                            </ListItem>
                                        </List>

                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                            {t(event.descriptionKey)}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}

            {/* Completed Events 2025 */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 4,
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1
                    }}
                >
                    <EmojiEvents />
                    {t('sections.completed2025')}
                </Typography>

                <Grid container spacing={3}>
                    {marathonEvents.completed2025.map((event, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card sx={{ height: '100%', '&:hover': { boxShadow: 4 } }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                        <Chip label={event.type} color="primary" size="small" />
                                        <Chip label={event.difficulty} color={getDifficultyColor(event.difficulty)} size="small" />
                                        {getStatusChip(event.status)}
                                    </Box>

                                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 2 }}>
                                        {t(event.nameKey)}
                                    </Typography>

                                    <List dense>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <CalendarToday fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={t(event.dateKey)} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <LocationOn fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={t(event.locationKey)} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <DirectionsRun fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={t(event.distanceKey)} />
                                        </ListItem>
                                        {event.elevationKey && (
                                            <ListItem sx={{ px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <Terrain fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={t(event.elevationKey)} />
                                            </ListItem>
                                        )}
                                    </List>

                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                        {t(event.descriptionKey)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* 2024 Events */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 4,
                        textAlign: 'center'
                    }}
                >
                    {t('sections.year2024')}
                </Typography>

                <Grid container spacing={3}>
                    {marathonEvents.year2024.map((event, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card sx={{ height: '100%', '&:hover': { boxShadow: 4 } }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                        <Chip label={event.type} variant="outlined" size="small" />
                                        <Chip label={event.difficulty} color={getDifficultyColor(event.difficulty)} variant="outlined" size="small" />
                                    </Box>

                                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 2 }}>
                                        {t(event.nameKey)}
                                    </Typography>

                                    <List dense>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <CalendarToday fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={t(event.dateKey)} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <DirectionsRun fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={t(event.distanceKey)} />
                                        </ListItem>
                                    </List>

                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                        {t(event.descriptionKey)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Trail Locations */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 4,
                        textAlign: 'center'
                    }}
                >
                    {t('trailLocations.title')}
                </Typography>

                <Grid container spacing={3}>
                    {trailLocations.map((location, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                        <Forest color="primary" />
                                        <Typography variant="h5" component="h5">
                                            {t(location.nameKey)}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {t(location.descriptionKey)}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                                        {t(location.featuresKey)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Future of Running in Brașov */}
            <Paper elevation={2} sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                <Typography variant="h3" component="h3" gutterBottom>
                    {t('future.title')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {t('future.description')}
                </Typography>

                <Box sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: 'text.primary', p: 3, borderRadius: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom color="primary">
                        {t('future.highlight')}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {t('future.nextEvent')}
                    </Typography>
                    <Typography variant="body2">
                        {t('future.eventDetails')}
                    </Typography>
                </Box>

                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    {t('future.conclusion')}
                </Typography>
            </Paper>
        </Container>
    );
};

export default MarathonsBlogPage;