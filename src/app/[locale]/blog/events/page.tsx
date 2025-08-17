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
    Alert,
    Badge,
    Avatar
} from '@mui/material';
import {
    CalendarToday,
    LocationOn,
    AccessTime,
    MusicNote,
    Festival,
    TheaterComedy,
    Restaurant,
    LocalActivity,
    CameraAlt,
    Celebration,
    Star,
    Euro,
    People,
    Headset,
    MovieFilter,
    Castle,
    LocalBar,
    Nightlife,
    Schedule,
    Event
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { use } from 'react';

// Updated interface for Next.js App Router with Promise params
interface EventsConcertsBlogPageProps {
    params: Promise<{
        locale: string;
    }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const EventsConcertsBlogPage: React.FC<EventsConcertsBlogPageProps> = ({ params }) => {
    const { locale } = use(params); // Use React's use() hook to unwrap the Promise
    const t = useTranslations('blog.eventsConcerts');

    // Events data organized by category and timeline (from Aug 16, 2025 onwards)
    const eventsData = {
        upcomingAugust: [
            {
                nameKey: 'events.teutonicFest.name',
                dates: '23-24 Aug 2025',
                location: 'Hărman Fortress',
                category: 'Medieval Festival',
                descriptionKey: 'events.teutonicFest.description',
                featuresKey: 'events.teutonicFest.features',
                headlinersKey: 'events.teutonicFest.headliners',
                ticketPrice: '20 RON (Adults)',
                expectedAttendance: '5,000+',
                rating: 4.6,
                status: 'imminent',
                daysLeft: 7
            },
            {
                nameKey: 'events.concertEstival.name',
                dates: '23 Aug 2025',
                location: 'Bastionul Artiștilor',
                category: 'Summer Concert',
                descriptionKey: 'events.concertEstival.description',
                featuresKey: 'events.concertEstival.features',
                headlinersKey: 'events.concertEstival.headliners',
                ticketPrice: '40-60 RON',
                expectedAttendance: '1,000+',
                rating: 4.2,
                status: 'imminent',
                daysLeft: 7
            }
        ],
        fallEvents: [
            {
                nameKey: 'events.alifantisZan.name',
                dates: '1 Nov 2025',
                location: 'Sala Patria',
                category: 'Anniversary Concert',
                descriptionKey: 'events.alifantisZan.description',
                featuresKey: 'events.alifantisZan.features',
                headlinersKey: 'events.alifantisZan.headliners',
                ticketPrice: '80-150 RON',
                expectedAttendance: '800+',
                rating: 4.8,
                status: 'confirmed'
            },
            {
                nameKey: 'events.draculaFilm.name',
                dates: 'Oct 2025 (TBD)',
                location: 'Multiple Venues',
                category: 'Film Festival',
                descriptionKey: 'events.draculaFilm.description',
                featuresKey: 'events.draculaFilm.features',
                headlinersKey: 'events.draculaFilm.headliners',
                ticketPrice: '15-25 RON',
                expectedAttendance: '2,000+',
                rating: 4.4,
                status: 'planned'
            }
        ],
        winterEvents: [
            {
                nameKey: 'events.christmasMarket.name',
                dates: '30 Nov 2025 - 5 Jan 2026',
                location: 'Council Square',
                category: 'Christmas Market',
                descriptionKey: 'events.christmasMarket.description',
                featuresKey: 'events.christmasMarket.features',
                headlinersKey: 'events.christmasMarket.headliners',
                ticketPrice: 'Free Entry',
                expectedAttendance: '100,000+',
                rating: 4.7,
                status: 'annual'
            },
            {
                nameKey: 'events.operaFestival.name',
                dates: 'Nov 2025 (TBD)',
                location: 'Brașov Opera',
                category: 'Opera Festival',
                descriptionKey: 'events.operaFestival.description',
                featuresKey: 'events.operaFestival.features',
                headlinersKey: 'events.operaFestival.headliners',
                ticketPrice: '50-200 RON',
                expectedAttendance: '3,000+',
                rating: 4.5,
                status: 'annual'
            }
        ],
        smallerEvents: [
            {
                nameKey: 'events.jazzClub.name',
                dates: 'Every Friday',
                location: 'Various Venues',
                category: 'Jazz Nights',
                descriptionKey: 'events.jazzClub.description',
                featuresKey: 'events.jazzClub.features',
                headlinersKey: 'events.jazzClub.headliners',
                ticketPrice: '25-40 RON',
                expectedAttendance: '100-200',
                rating: 4.1,
                status: 'recurring'
            },
            {
                nameKey: 'events.weekendMarkets.name',
                dates: 'Every Weekend',
                location: 'Central Park',
                category: 'Food & Craft Markets',
                descriptionKey: 'events.weekendMarkets.description',
                featuresKey: 'events.weekendMarkets.features',
                headlinersKey: 'events.weekendMarkets.headliners',
                ticketPrice: 'Free Entry',
                expectedAttendance: '2,000+',
                rating: 4.3,
                status: 'recurring'
            }
        ]
    };

    const venues = [
        {
            nameKey: 'venues.salaPatria.name',
            capacity: '800 seats',
            typeKey: 'venues.salaPatria.type',
            descriptionKey: 'venues.salaPatria.description'
        },
        {
            nameKey: 'venues.councilSquare.name',
            capacity: '10,000+',
            typeKey: 'venues.councilSquare.type',
            descriptionKey: 'venues.councilSquare.description'
        },
        {
            nameKey: 'venues.cetateaRasnov.name',
            capacity: '5,000+',
            typeKey: 'venues.cetateaRasnov.type',
            descriptionKey: 'venues.cetateaRasnov.description'
        },
        {
            nameKey: 'venues.bastionulArtistilor.name',
            capacity: '1,000+',
            typeKey: 'venues.bastionulArtistilor.type',
            descriptionKey: 'venues.bastionulArtistilor.description'
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'imminent': return 'error';
            case 'confirmed': return 'success';
            case 'planned': return 'warning';
            case 'annual': return 'info';
            case 'recurring': return 'secondary';
            default: return 'default';
        }
    };

    const getStatusLabel = (status: string) => {
        return t(`status.${status}`);
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Medieval Festival': return <Castle />;
            case 'Summer Concert': return <MusicNote />;
            case 'Anniversary Concert': return <Celebration />;
            case 'Film Festival': return <MovieFilter />;
            case 'Christmas Market': return <LocalBar />;
            case 'Opera Festival': return <TheaterComedy />;
            case 'Jazz Nights': return <Headset />;
            case 'Food & Craft Markets': return <Restaurant />;
            default: return <Event />;
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
                    <Chip icon={<CalendarToday />} label={t('chips.timeframe')} variant="outlined" />
                    <Chip icon={<Festival />} label={t('chips.events')} variant="outlined" />
                    <Chip icon={<MusicNote />} label={t('chips.genres')} variant="outlined" />
                </Box>
            </Box>

            {/* Current Date Alert */}
            <Alert severity="info" sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="body1">
                    📅 {t('currentDate')} | 🎉 {t('nextEvents')}
                </Typography>
            </Alert>

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

            {/* Upcoming August Events (Imminent) */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 600,
                        color: 'error.main',
                        mb: 4,
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1
                    }}
                >
                    <Schedule />
                    {t('sections.upcomingAugust')}
                </Typography>

                <Grid container spacing={3}>
                    {eventsData.upcomingAugust.map((event, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card sx={{
                                height: '100%',
                                '&:hover': { boxShadow: 6 },
                                border: '2px solid',
                                borderColor: 'error.light',
                                position: 'relative'
                            }}>
                                {event.daysLeft && (
                                    <Badge
                                        badgeContent={`${event.daysLeft} ${t('common.daysLeft')}`}
                                        color="error"
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            right: 16,
                                            zIndex: 1
                                        }}
                                    />
                                )}
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                        <Chip
                                            icon={getCategoryIcon(event.category)}
                                            label={event.category}
                                            color="primary"
                                            size="small"
                                        />
                                        <Chip
                                            label={getStatusLabel(event.status)}
                                            color={getStatusColor(event.status)}
                                            size="small"
                                        />
                                        <Chip
                                            icon={<Star />}
                                            label={event.rating}
                                            color="warning"
                                            size="small"
                                        />
                                    </Box>

                                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 2 }}>
                                        {t(event.nameKey)}
                                    </Typography>

                                    <List dense>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <CalendarToday fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={event.dates} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <LocationOn fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={event.location} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Euro fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.tickets')}: ${event.ticketPrice}`} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <People fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.attendance')}: ${event.expectedAttendance}`} />
                                        </ListItem>
                                    </List>

                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
                                        {t(event.descriptionKey)}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                                        {t('common.highlights')}:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {t(event.featuresKey)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Fall Events */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 600,
                        color: 'warning.main',
                        mb: 4,
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1
                    }}
                >
                    <Festival />
                    {t('sections.fallEvents')}
                </Typography>

                <Grid container spacing={3}>
                    {eventsData.fallEvents.map((event, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card sx={{ height: '100%', '&:hover': { boxShadow: 4 } }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                        <Chip
                                            icon={getCategoryIcon(event.category)}
                                            label={event.category}
                                            color="primary"
                                            size="small"
                                        />
                                        <Chip
                                            label={getStatusLabel(event.status)}
                                            color={getStatusColor(event.status)}
                                            size="small"
                                        />
                                        <Chip
                                            icon={<Star />}
                                            label={event.rating}
                                            color="warning"
                                            size="small"
                                        />
                                    </Box>

                                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 2 }}>
                                        {t(event.nameKey)}
                                    </Typography>

                                    <List dense>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <CalendarToday fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={event.dates} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <LocationOn fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={event.location} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Euro fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.tickets')}: ${event.ticketPrice}`} />
                                        </ListItem>
                                    </List>

                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
                                        {t(event.descriptionKey)}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                                        {t('common.features')}:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {t(event.featuresKey)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Winter Events */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 600,
                        color: 'info.main',
                        mb: 4,
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1
                    }}
                >
                    <Celebration />
                    {t('sections.winterEvents')}
                </Typography>

                <Grid container spacing={3}>
                    {eventsData.winterEvents.map((event, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card sx={{ height: '100%', '&:hover': { boxShadow: 4 } }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                        <Chip
                                            icon={getCategoryIcon(event.category)}
                                            label={event.category}
                                            color="primary"
                                            size="small"
                                        />
                                        <Chip
                                            label={getStatusLabel(event.status)}
                                            color={getStatusColor(event.status)}
                                            size="small"
                                        />
                                        <Chip
                                            icon={<Star />}
                                            label={event.rating}
                                            color="warning"
                                            size="small"
                                        />
                                    </Box>

                                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 2 }}>
                                        {t(event.nameKey)}
                                    </Typography>

                                    <List dense>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <CalendarToday fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={event.dates} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <LocationOn fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={event.location} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Euro fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.tickets')}: ${event.ticketPrice}`} />
                                        </ListItem>
                                    </List>

                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
                                        {t(event.descriptionKey)}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                                        {t('common.highlights')}:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {t(event.featuresKey)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Regular & Smaller Events */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 600,
                        color: 'secondary.main',
                        mb: 4,
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1
                    }}
                >
                    <LocalActivity />
                    {t('sections.regularEvents')}
                </Typography>

                <Grid container spacing={3}>
                    {eventsData.smallerEvents.map((event, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card sx={{ height: '100%', '&:hover': { boxShadow: 4 } }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                        <Chip
                                            icon={getCategoryIcon(event.category)}
                                            label={event.category}
                                            color="secondary"
                                            size="small"
                                        />
                                        <Chip
                                            label={getStatusLabel(event.status)}
                                            color={getStatusColor(event.status)}
                                            size="small"
                                        />
                                        <Chip
                                            icon={<Star />}
                                            label={event.rating}
                                            color="warning"
                                            size="small"
                                        />
                                    </Box>

                                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 2 }}>
                                        {t(event.nameKey)}
                                    </Typography>

                                    <List dense>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Schedule fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={event.dates} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <LocationOn fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={event.location} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Euro fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.tickets')}: ${event.ticketPrice}`} />
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

            {/* Popular Venues */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 3,
                        textAlign: 'center'
                    }}
                >
                    {t('venues.title')}
                </Typography>

                <Grid container spacing={3}>
                    {venues.map((venue, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h6" component="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                        {t(venue.nameKey)}
                                    </Typography>
                                    <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                                        {t(venue.typeKey)} • {venue.capacity}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {t(venue.descriptionKey)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Event Planning Tips */}
            <Paper elevation={2} sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                <Typography variant="h3" component="h3" gutterBottom>
                    {t('planning.title')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {t('planning.description')}
                </Typography>

                <Box sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: 'text.primary', p: 3, borderRadius: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom color="primary">
                        🎫 {t('planning.nextEvent.title')}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {t('planning.nextEvent.event')}
                    </Typography>
                    <Typography variant="body2">
                        {t('planning.nextEvent.details')}
                    </Typography>
                </Box>

                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    {t('planning.conclusion')}
                </Typography>
            </Paper>
        </Container>
    );
};

export default EventsConcertsBlogPage;