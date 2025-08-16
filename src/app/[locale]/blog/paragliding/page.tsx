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
    Terrain,
    Speed,
    Flag,
    Public,
    Air
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import ParaglidingIcon from '@mui/icons-material/Paragliding';

interface ParaglidingBlogPageProps {
    locale: string;
}

const ParaglidingBlogPage: React.FC<ParaglidingBlogPageProps> = ({ locale }) => {
    const t = useTranslations('blog.paragliding');

    // Competition results data
    const menResults = [
        {
            position: 1,
            name: 'Andrei Gaia',
            country: 'Romania',
            wing: 'Niviuk Icepeak X-One',
            flag: '🇷🇴'
        },
        {
            position: 2,
            name: 'Nicolas Dinh',
            country: 'France',
            wing: 'Ozone Enzo 3',
            flag: '🇫🇷'
        },
        {
            position: 3,
            name: 'Ivan Centa',
            country: 'Italy',
            wing: 'Gin Boomerang 12',
            flag: '🇮🇹'
        }
    ];

    const womenResults = [
        {
            position: 1,
            name: 'Jinhee Baek',
            country: 'South Korea',
            wing: 'Ozone Zeno',
            flag: '🇰🇷'
        },
        {
            position: 2,
            name: 'Tomoko Yoshikawa',
            country: 'Japan',
            wing: 'Enzo 3',
            flag: '🇯🇵'
        },
        {
            position: 3,
            name: 'Capucine Deliot',
            country: 'France',
            wing: 'Niviuk Peak 6',
            flag: '🇫🇷'
        }
    ];

    const tasks = [
        {
            taskNumber: 1,
            date: t('tasks.task1.date'),
            distance: '76.3 km',
            description: t('tasks.task1.description'),
            type: t('tasks.task1.type')
        },
        {
            taskNumber: 2,
            date: t('tasks.task2.date'),
            distance: '93.2 km',
            description: t('tasks.task2.description'),
            type: t('tasks.task2.type')
        },
        {
            taskNumber: 3,
            date: t('tasks.task3.date'),
            distance: '69.9 km',
            description: t('tasks.task3.description'),
            type: t('tasks.task3.type')
        }
    ];

    const flyingSpots = [
        {
            nameKey: 'flyingSpots.bunloc.name',
            altitudeKey: 'flyingSpots.bunloc.altitude',
            descriptionKey: 'flyingSpots.bunloc.description',
            featuresKey: 'flyingSpots.bunloc.features'
        },
        {
            nameKey: 'flyingSpots.postavaru.name',
            altitudeKey: 'flyingSpots.postavaru.altitude',
            descriptionKey: 'flyingSpots.postavaru.description',
            featuresKey: 'flyingSpots.postavaru.features'
        },
        {
            nameKey: 'flyingSpots.piatra.name',
            altitudeKey: 'flyingSpots.piatra.altitude',
            descriptionKey: 'flyingSpots.piatra.description',
            featuresKey: 'flyingSpots.piatra.features'
        }
    ];

    const imageLinks = [
        {
            sourceKey: 'photoSources.pwcaInstagram.source',
            urlKey: 'photoSources.pwcaInstagram.url',
            descriptionKey: 'photoSources.pwcaInstagram.description'
        },
        {
            sourceKey: 'photoSources.xcmag.source',
            urlKey: 'photoSources.xcmag.url',
            descriptionKey: 'photoSources.xcmag.description'
        },
        {
            sourceKey: 'photoSources.paramania.source',
            urlKey: 'photoSources.paramania.url',
            descriptionKey: 'photoSources.paramania.description'
        },
        {
            sourceKey: 'photoSources.happycloud.source',
            urlKey: 'photoSources.happycloud.url',
            descriptionKey: 'photoSources.happycloud.description'
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
                    <Chip icon={<CalendarToday />} label={t('chips.date')} variant="outlined" />
                    <Chip icon={<ParaglidingIcon />} label={t('chips.event')} variant="outlined" />
                    <Chip icon={<Public />} label={t('chips.participants')} variant="outlined" />
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

            {/* Competition Results */}
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
                    {t('results.title')}
                </Typography>

                <Grid container spacing={4}>
                    {/* Men Results */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h3" component="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <EmojiEvents color="primary" />
                                    {t('results.men')}
                                </Typography>
                                {menResults.map((pilot, index) => (
                                    <Box key={index} sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        p: 2,
                                        mb: 1,
                                        bgcolor: index === 0 ? 'gold' : index === 1 ? 'silver' : '#CD7F32',
                                        borderRadius: 1,
                                        color: 'white'
                                    }}>
                                        <Avatar sx={{
                                            bgcolor: 'transparent',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            mr: 2
                                        }}>
                                            {pilot.position}
                                        </Avatar>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="h6">
                                                {pilot.flag} {pilot.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                                {pilot.wing}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Women Results */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h3" component="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <EmojiEvents color="secondary" />
                                    {t('results.women')}
                                </Typography>
                                {womenResults.map((pilot, index) => (
                                    <Box key={index} sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        p: 2,
                                        mb: 1,
                                        bgcolor: index === 0 ? 'gold' : index === 1 ? 'silver' : '#CD7F32',
                                        borderRadius: 1,
                                        color: 'white'
                                    }}>
                                        <Avatar sx={{
                                            bgcolor: 'transparent',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            mr: 2
                                        }}>
                                            {pilot.position}
                                        </Avatar>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="h6">
                                                {pilot.flag} {pilot.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                                {pilot.wing}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Competition Tasks */}
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
                    {t('tasks.title')}
                </Typography>

                <Grid container spacing={3}>
                    {tasks.map((task, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card sx={{ height: '100%', '&:hover': { boxShadow: 4 } }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                        <Chip
                                            label={`${t('tasks.task')} ${task.taskNumber}`}
                                            color="primary"
                                            size="small"
                                        />
                                        <Chip
                                            label={task.distance}
                                            color="secondary"
                                            size="small"
                                        />
                                    </Box>

                                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 2 }}>
                                        {task.type}
                                    </Typography>

                                    <List dense>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <CalendarToday fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={task.date} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Speed fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={task.distance} />
                                        </ListItem>
                                    </List>

                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                        {task.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Flying Spots */}
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
                    {t('flyingSpots.title')}
                </Typography>

                <Grid container spacing={3}>
                    {flyingSpots.map((spot, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                        <Terrain color="primary" />
                                        <Typography variant="h5" component="h5">
                                            {t(spot.nameKey)}
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle2" color="primary" gutterBottom>
                                        {t(spot.altitudeKey)}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {t(spot.descriptionKey)}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                                        {t(spot.featuresKey)}
                                    </Typography>
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

            {/* Legacy & Future */}
            <Paper elevation={2} sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                <Typography variant="h3" component="h3" gutterBottom>
                    {t('legacy.title')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {t('legacy.description')}
                </Typography>

                <Box sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: 'text.primary', p: 3, borderRadius: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom color="primary">
                        {t('legacy.highlight')}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {t('legacy.achievement')}
                    </Typography>
                    <Typography variant="body2">
                        {t('legacy.impact')}
                    </Typography>
                </Box>

                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    {t('legacy.future')}
                </Typography>
            </Paper>
        </Container>
    );
};

export default ParaglidingBlogPage;