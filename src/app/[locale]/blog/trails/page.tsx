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
    Rating
} from '@mui/material';
import {
    CalendarToday,
    LocationOn,
    AccessTime,
    Timeline,
    Terrain,
    Hiking,
    Star,
    Warning,
    Info,
    Forest,
    Landscape,
    DirectionsWalk,
    TrendingUp,
    Camera,
    WaterDrop,
    Security,
    Map,
    Phone
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { use } from 'react';

// Updated interface for Next.js App Router with Promise params
interface MountainTrailsBlogPageProps {
    params: Promise<{
        locale: string;
    }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const MountainTrailsBlogPage: React.FC<MountainTrailsBlogPageProps> = ({ params }) => {
    const { locale } = use(params); // Use React's use() hook to unwrap the Promise
    const t = useTranslations('blog.mountainTrails');

    // Mountain trails data organized by difficulty
    const trailsData = {
        beginnerFriendly: [
            {
                nameKey: 'trails.tampa.name',
                elevation: '960m',
                distance: '2.7-3.1 km',
                duration: '1-1.5 hours',
                difficulty: 'Easy-Moderate',
                season: 'Year-round',
                descriptionKey: 'trails.tampa.description',
                featuresKey: 'trails.tampa.features',
                routesKey: 'trails.tampa.routes',
                highlightsKey: 'trails.tampa.highlights',
                wildlifeKey: 'trails.tampa.wildlife',
                rating: 4.5,
                fees: null
            },
            {
                nameKey: 'trails.sevenLadders.name',
                elevation: '1160m gain',
                distance: '4.8 km',
                duration: '2-3 hours',
                difficulty: 'Moderate',
                season: 'May-October',
                descriptionKey: 'trails.sevenLadders.description',
                featuresKey: 'trails.sevenLadders.features',
                routesKey: 'trails.sevenLadders.routes',
                highlightsKey: 'trails.sevenLadders.highlights',
                wildlifeKey: 'trails.sevenLadders.wildlife',
                rating: 4.7,
                fees: '10 RON'
            }
        ],
        intermediate: [
            {
                nameKey: 'trails.pietraCraiului.name',
                elevation: '2238m (La Om)',
                distance: '7.5-25 km',
                duration: '4-12 hours',
                difficulty: 'Moderate-Hard',
                season: 'May-October',
                descriptionKey: 'trails.pietraCraiului.description',
                featuresKey: 'trails.pietraCraiului.features',
                routesKey: 'trails.pietraCraiului.routes',
                highlightsKey: 'trails.pietraCraiului.highlights',
                wildlifeKey: 'trails.pietraCraiului.wildlife',
                rating: 4.8,
                fees: '5 RON (7 days)'
            },
            {
                nameKey: 'trails.postavaru.name',
                elevation: '1799m',
                distance: '8-14 km',
                duration: '4-6 hours',
                difficulty: 'Moderate-Hard',
                season: 'Year-round',
                descriptionKey: 'trails.postavaru.description',
                featuresKey: 'trails.postavaru.features',
                routesKey: 'trails.postavaru.routes',
                highlightsKey: 'trails.postavaru.highlights',
                wildlifeKey: 'trails.postavaru.wildlife',
                rating: 4.6,
                fees: 'Cable car: 16 RON'
            }
        ],
        advanced: [
            {
                nameKey: 'trails.bucegi.name',
                elevation: '2507m (Omu Peak)',
                distance: '17-20 km',
                duration: '8-12 hours',
                difficulty: 'Hard-Very Hard',
                season: 'May-October',
                descriptionKey: 'trails.bucegi.description',
                featuresKey: 'trails.bucegi.features',
                routesKey: 'trails.bucegi.routes',
                highlightsKey: 'trails.bucegi.highlights',
                wildlifeKey: 'trails.bucegi.wildlife',
                rating: 4.9,
                fees: 'Cable car: 25 RON'
            }
        ]
    };

    const safetyTips = [
        {
            titleKey: 'safety.bearSafety.title',
            descriptionKey: 'safety.bearSafety.description',
            icon: <Warning />
        },
        {
            titleKey: 'safety.weather.title',
            descriptionKey: 'safety.weather.description',
            icon: <WaterDrop />
        },
        {
            titleKey: 'safety.trailMarkings.title',
            descriptionKey: 'safety.trailMarkings.description',
            icon: <Map />
        },
        {
            titleKey: 'safety.emergency.title',
            descriptionKey: 'safety.emergency.description',
            icon: <Phone />
        }
    ];

    const getDifficultyColor = (difficulty: string) => {
        if (difficulty.includes('Easy')) return 'success';
        if (difficulty.includes('Moderate')) return 'warning';
        if (difficulty.includes('Hard')) return 'error';
        return 'default';
    };

    const getSeasonChip = (season: string) => {
        const isWinterFriendly = season.includes('Year-round');
        return (
            <Chip
                label={season}
                color={isWinterFriendly ? 'success' : 'primary'}
                size="small"
                icon={<CalendarToday />}
            />
        );
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
                    <Chip icon={<Terrain />} label={t('chips.region')} variant="outlined" />
                    <Chip icon={<Hiking />} label={t('chips.difficulty')} variant="outlined" />
                    <Chip icon={<Forest />} label={t('chips.massifs')} variant="outlined" />
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

            {/* Beginner-Friendly Trails */}
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
                    <DirectionsWalk />
                    {t('sections.beginnerFriendly')}
                </Typography>

                <Grid container spacing={3}>
                    {trailsData.beginnerFriendly.map((trail, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                        <Chip
                                            label={trail.difficulty}
                                            color={getDifficultyColor(trail.difficulty)}
                                            size="small"
                                        />
                                        {getSeasonChip(trail.season)}
                                        <Chip
                                            icon={<Star />}
                                            label={trail.rating}
                                            color="warning"
                                            size="small"
                                        />
                                    </Box>

                                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 2 }}>
                                        {t(trail.nameKey)}
                                    </Typography>

                                    <List dense>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Terrain fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.elevation')}: ${trail.elevation}`} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Timeline fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.distance')}: ${trail.distance}`} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <AccessTime fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.duration')}: ${trail.duration}`} />
                                        </ListItem>
                                        {trail.fees && (
                                            <ListItem sx={{ px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <Info fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={`${t('common.fees')}: ${trail.fees}`} />
                                            </ListItem>
                                        )}
                                    </List>

                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
                                        {t(trail.descriptionKey)}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                                        {t('common.highlights')}:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {t(trail.highlightsKey)}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                                        {t('common.features')}:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {t(trail.featuresKey)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Intermediate Trails */}
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
                    <TrendingUp />
                    {t('sections.intermediate')}
                </Typography>

                <Grid container spacing={3}>
                    {trailsData.intermediate.map((trail, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                        <Chip
                                            label={trail.difficulty}
                                            color={getDifficultyColor(trail.difficulty)}
                                            size="small"
                                        />
                                        {getSeasonChip(trail.season)}
                                        <Chip
                                            icon={<Star />}
                                            label={trail.rating}
                                            color="warning"
                                            size="small"
                                        />
                                    </Box>

                                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 2 }}>
                                        {t(trail.nameKey)}
                                    </Typography>

                                    <List dense>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Terrain fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.elevation')}: ${trail.elevation}`} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Timeline fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.distance')}: ${trail.distance}`} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <AccessTime fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.duration')}: ${trail.duration}`} />
                                        </ListItem>
                                        {trail.fees && (
                                            <ListItem sx={{ px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <Info fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={`${t('common.fees')}: ${trail.fees}`} />
                                            </ListItem>
                                        )}
                                    </List>

                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
                                        {t(trail.descriptionKey)}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                                        {t('common.highlights')}:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {t(trail.highlightsKey)}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                                        {t('common.wildlife')}:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {t(trail.wildlifeKey)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Advanced Trails */}
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
                    <Landscape />
                    {t('sections.advanced')}
                </Typography>

                <Grid container spacing={3}>
                    {trailsData.advanced.map((trail, index) => (
                        <Grid size={{ xs: 12 }} key={index}>
                            <Card sx={{ '&:hover': { boxShadow: 6 }, border: '2px solid', borderColor: 'error.light' }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                        <Chip
                                            label={trail.difficulty}
                                            color={getDifficultyColor(trail.difficulty)}
                                            size="small"
                                        />
                                        {getSeasonChip(trail.season)}
                                        <Chip
                                            icon={<Star />}
                                            label={trail.rating}
                                            color="warning"
                                            size="small"
                                        />
                                        <Chip
                                            label={t('common.expertOnly')}
                                            color="error"
                                            size="small"
                                        />
                                    </Box>

                                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>
                                        {t(trail.nameKey)}
                                    </Typography>

                                    <Grid container spacing={3}>
                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <List dense>
                                                <ListItem sx={{ px: 0 }}>
                                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                                        <Terrain fontSize="small" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={`${t('common.elevation')}: ${trail.elevation}`} />
                                                </ListItem>
                                                <ListItem sx={{ px: 0 }}>
                                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                                        <Timeline fontSize="small" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={`${t('common.distance')}: ${trail.distance}`} />
                                                </ListItem>
                                                <ListItem sx={{ px: 0 }}>
                                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                                        <AccessTime fontSize="small" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={`${t('common.duration')}: ${trail.duration}`} />
                                                </ListItem>
                                                {trail.fees && (
                                                    <ListItem sx={{ px: 0 }}>
                                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                                            <Info fontSize="small" />
                                                        </ListItemIcon>
                                                        <ListItemText primary={`${t('common.fees')}: ${trail.fees}`} />
                                                    </ListItem>
                                                )}
                                            </List>
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                {t(trail.descriptionKey)}
                                            </Typography>

                                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                                                {t('common.highlights')}:
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {t(trail.highlightsKey)}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Safety Information */}
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
                    <Security />
                    {t('safety.title')}
                </Typography>

                <Grid container spacing={3}>
                    {safetyTips.map((tip, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Alert severity="warning" sx={{ height: '100%' }}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                    {tip.icon}
                                    <Box>
                                        <Typography variant="h6" component="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 1 }}>
                                            {t(tip.titleKey)}
                                        </Typography>
                                        <Typography variant="body2">
                                            {t(tip.descriptionKey)}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Alert>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Essential Gear */}
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
                    {t('gear.title')}
                </Typography>

                <Paper elevation={1} sx={{ p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h6" component="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                {t('gear.essential')}:
                            </Typography>
                            <List dense>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <ListItem key={num} sx={{ px: 0 }}>
                                        <ListItemText primary={t(`gear.items.item${num}`)} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h6" component="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                {t('gear.recommended')}:
                            </Typography>
                            <List dense>
                                {[6, 7, 8, 9, 10].map((num) => (
                                    <ListItem key={num} sx={{ px: 0 }}>
                                        <ListItemText primary={t(`gear.items.item${num}`)} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>

            {/* Best Hiking Season */}
            <Paper elevation={2} sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                <Typography variant="h3" component="h3" gutterBottom>
                    {t('seasons.title')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {t('seasons.description')}
                </Typography>

                <Box sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: 'text.primary', p: 3, borderRadius: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom color="primary">
                        {t('seasons.bestTime.title')}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {t('seasons.bestTime.period')}
                    </Typography>
                    <Typography variant="body2">
                        {t('seasons.bestTime.description')}
                    </Typography>
                </Box>

                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    {t('seasons.conclusion')}
                </Typography>
            </Paper>
        </Container>
    );
};

export default MountainTrailsBlogPage;