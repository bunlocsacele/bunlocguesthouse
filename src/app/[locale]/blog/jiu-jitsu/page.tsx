'use client';

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Divider,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import {
    CalendarToday,
    LocationOn,
    EmojiEvents,
    Groups,
    SportsMma,
    Timeline
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

interface JiuJitsuBlogPageProps {
    locale: string;
}

const JiuJitsuBlogPage: React.FC<JiuJitsuBlogPageProps> = ({ locale }) => {
    const t = useTranslations('blog.jiujitsu');

    // Competition data based on research
    const competitions = [
        {
            year: 2025,
            events: [
                {
                    nameKey: 'competitions.2025.ajpTour.name',
                    date: t('competitions.2025.ajpTour.date'),
                    locationKey: 'competitions.2025.ajpTour.location',
                    type: 'GI & No-GI',
                    organization: 'AJP Tour',
                    descriptionKey: 'competitions.2025.ajpTour.description',
                    participantsKey: 'competitions.2025.ajpTour.participants',
                    categoriesKey: 'competitions.2025.ajpTour.categories',
                    status: 'upcoming'
                },
                {
                    nameKey: 'competitions.2025.european.name',
                    date: t('competitions.2025.european.date'),
                    locationKey: 'competitions.2025.european.location',
                    type: 'Traditional Ju-Jitsu',
                    organization: 'FRAM',
                    descriptionKey: 'competitions.2025.european.description',
                    participantsKey: 'competitions.2025.european.participants',
                    categoriesKey: 'competitions.2025.european.categories',
                    status: 'completed'
                },
                {
                    nameKey: 'competitions.2025.adccWorld.name',
                    date: t('competitions.2025.adccWorld.date'),
                    locationKey: 'competitions.2025.adccWorld.location',
                    type: 'No-GI',
                    organization: 'ADCC',
                    descriptionKey: 'competitions.2025.adccWorld.description',
                    participantsKey: 'competitions.2025.adccWorld.participants',
                    categoriesKey: 'competitions.2025.adccWorld.categories',
                    status: 'upcoming'
                }
            ]
        },
        {
            year: 2024,
            events: [
                {
                    nameKey: 'competitions.2024.ajpTour.name',
                    date: t('competitions.2024.ajpTour.date'),
                    locationKey: 'competitions.2024.ajpTour.location',
                    type: 'GI',
                    organization: 'AJP Tour',
                    descriptionKey: 'competitions.2024.ajpTour.description',
                    participantsKey: 'competitions.2024.ajpTour.participants',
                    categoriesKey: 'competitions.2024.ajpTour.categories',
                    status: 'completed'
                },
                {
                    nameKey: 'competitions.2024.adccNationals.name',
                    date: t('competitions.2024.adccNationals.date'),
                    locationKey: 'competitions.2024.adccNationals.location',
                    type: 'No-GI',
                    organization: 'ADCC Romania',
                    descriptionKey: 'competitions.2024.adccNationals.description',
                    participantsKey: 'competitions.2024.adccNationals.participants',
                    categoriesKey: 'competitions.2024.adccNationals.categories',
                    status: 'completed'
                },
                {
                    nameKey: 'competitions.2024.adccOpen.name',
                    date: t('competitions.2024.adccOpen.date'),
                    locationKey: 'competitions.2024.adccOpen.location',
                    type: 'No-GI',
                    organization: 'ADCC Romania',
                    descriptionKey: 'competitions.2024.adccOpen.description',
                    participantsKey: 'competitions.2024.adccOpen.participants',
                    categoriesKey: 'competitions.2024.adccOpen.categories',
                    status: 'completed'
                },
                {
                    nameKey: 'competitions.2024.europeanYouth.name',
                    date: t('competitions.2024.europeanYouth.date'),
                    locationKey: 'competitions.2024.europeanYouth.location',
                    type: 'Traditional Ju-Jitsu',
                    organization: 'FRAM',
                    descriptionKey: 'competitions.2024.europeanYouth.description',
                    participantsKey: 'competitions.2024.europeanYouth.participants',
                    categoriesKey: 'competitions.2024.europeanYouth.categories',
                    status: 'completed'
                }
            ]
        },
        {
            year: 2023,
            events: [
                {
                    nameKey: 'competitions.2023.adccNationals.name',
                    date: t('competitions.2023.adccNationals.date'),
                    locationKey: 'competitions.2023.adccNationals.location',
                    type: 'No-GI',
                    organization: 'ADCC Romania',
                    descriptionKey: 'competitions.2023.adccNationals.description',
                    participantsKey: 'competitions.2023.adccNationals.participants',
                    categoriesKey: 'competitions.2023.adccNationals.categories',
                    status: 'completed'
                },
                {
                    nameKey: 'competitions.2023.nationalBjj.name',
                    date: t('competitions.2023.nationalBjj.date'),
                    locationKey: 'competitions.2023.nationalBjj.location',
                    type: 'GI & No-GI',
                    organization: 'FRAM',
                    descriptionKey: 'competitions.2023.nationalBjj.description',
                    participantsKey: 'competitions.2023.nationalBjj.participants',
                    categoriesKey: 'competitions.2023.nationalBjj.categories',
                    status: 'completed'
                }
            ]
        }
    ];

    const academies = [
        {
            nameKey: 'academies.roots.name',
            founderKey: 'academies.roots.founder',
            descriptionKey: 'academies.roots.description',
            specialityKey: 'academies.roots.speciality'
        },
        {
            nameKey: 'academies.absoluto.name',
            locationKey: 'academies.absoluto.location',
            descriptionKey: 'academies.absoluto.description',
            specialityKey: 'academies.absoluto.speciality'
        },
        {
            nameKey: 'academies.icon.name',
            locationKey: 'academies.icon.location',
            descriptionKey: 'academies.icon.description',
            specialityKey: 'academies.icon.speciality'
        }
    ];

    const imageLinks = [
        {
            sourceKey: 'photoSources.adccInstagram.source',
            urlKey: 'photoSources.adccInstagram.url',
            descriptionKey: 'photoSources.adccInstagram.description'
        },
        {
            sourceKey: 'photoSources.ajpInstagram.source',
            urlKey: 'photoSources.ajpInstagram.url',
            descriptionKey: 'photoSources.ajpInstagram.description'
        },
        {
            sourceKey: 'photoSources.ajpFacebook.source',
            urlKey: 'photoSources.ajpFacebook.url',
            descriptionKey: 'photoSources.ajpFacebook.description'
        },
        {
            sourceKey: 'photoSources.smoothcomp.source',
            urlKey: 'photoSources.smoothcomp.url',
            descriptionKey: 'photoSources.smoothcomp.description'
        }
    ];

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
                    <Chip icon={<SportsMma />} label={t('chips.sports')} variant="outlined" />
                    <Chip icon={<EmojiEvents />} label={t('chips.events')} variant="outlined" />
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
            </Paper>

            {/* Competition History by Year */}
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
                    {t('competitions.title')}
                </Typography>

                {competitions.map((yearData) => (
                    <Box key={yearData.year} sx={{ mb: 5 }}>
                        <Typography
                            variant="h3"
                            component="h3"
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: 'text.primary',
                                mb: 3,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            <Timeline />
                            {yearData.year}
                        </Typography>

                        <Grid container spacing={3}>
                            {yearData.events.map((event, index) => (
                                <Grid size={{ xs: 12, md: 6 }} key={index}>
                                    <Card sx={{ height: '100%', '&:hover': { boxShadow: 4 } }}>
                                        <CardContent sx={{ p: 3 }}>
                                            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                                <Chip
                                                    label={event.type}
                                                    color="primary"
                                                    size="small"
                                                />
                                                <Chip
                                                    label={event.organization}
                                                    variant="outlined"
                                                    size="small"
                                                />
                                                {event.status === 'upcoming' && (
                                                    <Chip
                                                        label={t('status.upcoming')}
                                                        color="success"
                                                        size="small"
                                                    />
                                                )}
                                                {event.status === 'completed' && yearData.year === 2025 && (
                                                    <Chip
                                                        label={t('status.completed')}
                                                        color="default"
                                                        size="small"
                                                    />
                                                )}
                                            </Box>

                                            <Typography
                                                variant="h4"
                                                component="h4"
                                                sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 2 }}
                                            >
                                                {t(event.nameKey)}
                                            </Typography>

                                            <List dense>
                                                <ListItem sx={{ px: 0 }}>
                                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                                        <CalendarToday fontSize="small" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={event.date} />
                                                </ListItem>
                                                <ListItem sx={{ px: 0 }}>
                                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                                        <LocationOn fontSize="small" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={t(event.locationKey)} />
                                                </ListItem>
                                                <ListItem sx={{ px: 0 }}>
                                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                                        <Groups fontSize="small" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={t(event.participantsKey)} />
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
                ))}
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Local Academies */}
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
                    {t('academies.title')}
                </Typography>

                <Grid container spacing={3}>
                    {academies.map((academy, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" component="h5" gutterBottom>
                                        {t(academy.nameKey)}
                                    </Typography>
                                    {academy.founderKey && (
                                        <Typography variant="subtitle2" color="primary" gutterBottom>
                                            {t('academies.founderLabel')}: {t(academy.founderKey)}
                                        </Typography>
                                    )}
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {t(academy.descriptionKey)}
                                    </Typography>
                                    <Chip label={t(academy.specialityKey)} variant="outlined" size="small" />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Photo Sources */}
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
                    {t('photoSources.title')}
                </Typography>

                <Grid container spacing={3}>
                    {imageLinks.map((link, index) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={index}>
                            <Paper sx={{ p: 3, textAlign: 'center' }}>
                                <Typography variant="h6" gutterBottom>
                                    {t(link.sourceKey)}
                                </Typography>
                                <Typography variant="body2" color="primary" gutterBottom>
                                    {t(link.urlKey)}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {t(link.descriptionKey)}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Future Events - Updated for August 2025 */}
            <Paper elevation={2} sx={{ p: 4, textAlign: 'center', bgcolor: 'success.light', color: 'success.contrastText' }}>
                <Typography variant="h3" component="h3" gutterBottom>
                    {t('future.title')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {t('future.description')}
                </Typography>

                <Box sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: 'text.primary', p: 3, borderRadius: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom color="primary">
                        {t('future.nextEvent')}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {t('future.eventName')}
                    </Typography>
                    <Typography variant="body2">
                        {t('future.eventDetails')}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {t('future.eventInfo')}
                    </Typography>
                </Box>

                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    {t('future.conclusion')}
                </Typography>
            </Paper>
        </Container>
    );
};

export default JiuJitsuBlogPage;