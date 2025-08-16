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
    LinearProgress
} from '@mui/material';
import {
    CalendarToday,
    LocationOn,
    AccessTime,
    Speed,
    Height,
    Security,
    Euro,
    People,
    Warning,
    Info,
    CheckCircle,
    Timeline,
    Landscape,
    CameraAlt,
    DirectionsWalk,
    MonetizationOn,
    Scale,
    Straighten,
    Schedule,
    Phone
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

interface Tiroliana7ScariBlogPageProps {
    locale: string;
}

const Tiroliana7ScariBlogPage: React.FC<Tiroliana7ScariBlogPageProps> = ({ locale }) => {
    const t = useTranslations('blog.tiroliana7Scari');

    // Technical specifications and pricing data
    const specifications = {
        totalLength: '3,874m',
        sections: 37,
        longestSection: '273m',
        shortestSection: '47m',
        maxSpeed: '40 km/h',
        altitude: '948m',
        duration: '2-3 hours',
        season: 'May - October'
    };

    const requirements = {
        minWeight: '50kg',
        maxWeight: '95kg',
        minHeight: '1.50m',
        maxHeight: '1.95m',
        minAge: '14 years (with adult)',
        fitness: 'Moderate'
    };

    const pricing2025 = {
        fullCourse: '120 RON',
        halfCourse: '70 RON',
        childrenCourse: '30 RON (30 min)',
        canyon: '20 RON (Adults)',
        canyonChildren: '10 RON (Children/Students)'
    };

    const schedule = {
        daily: '10:00 - 18:00',
        canyonLastEntry: '17:30',
        ziplineLastDescent: '16:30',
        closedSeason: 'November - April'
    };

    const safetyFeatures = [
        {
            titleKey: 'safety.equipment.title',
            descriptionKey: 'safety.equipment.description',
            icon: <Security />
        },
        {
            titleKey: 'safety.instruction.title',
            descriptionKey: 'safety.instruction.description',
            icon: <Info />
        },
        {
            titleKey: 'safety.assistance.title',
            descriptionKey: 'safety.assistance.description',
            icon: <People />
        },
        {
            titleKey: 'safety.emergency.title',
            descriptionKey: 'safety.emergency.description',
            icon: <Phone />
        }
    ];

    const adventureOptions = [
        {
            nameKey: 'options.fullCourse.name',
            duration: '2-3 hours',
            sections: '37 sections',
            distance: '3,874m',
            price: '120 RON',
            descriptionKey: 'options.fullCourse.description',
            difficulty: 'Advanced',
            recommended: true
        },
        {
            nameKey: 'options.halfCourse.name',
            duration: '1-1.5 hours',
            sections: '~18 sections',
            distance: '~1,900m',
            price: '70 RON',
            descriptionKey: 'options.halfCourse.description',
            difficulty: 'Intermediate',
            recommended: false
        },
        {
            nameKey: 'options.childrenCourse.name',
            duration: '30 minutes',
            sections: '4 sections',
            distance: '200m',
            price: '30 RON',
            descriptionKey: 'options.childrenCourse.description',
            difficulty: 'Beginner',
            recommended: false
        }
    ];

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Beginner': return 'success';
            case 'Intermediate': return 'warning';
            case 'Advanced': return 'error';
            default: return 'default';
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
                    <Chip icon={<Straighten />} label={`${specifications.totalLength} ${t('chips.length')}`} variant="outlined" />
                    <Chip icon={<Timeline />} label={`${specifications.sections} ${t('chips.sections')}`} variant="outlined" />
                    <Chip icon={<Speed />} label={`${specifications.maxSpeed} ${t('chips.maxSpeed')}`} variant="outlined" />
                    <Chip icon={<LocationOn />} label={t('chips.location')} variant="outlined" />
                </Box>
            </Box>

            {/* Alert for current status */}
            <Alert severity="success" sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="body1">
                    🎉 {t('status.open')} | 📅 {t('status.season')} | 📞 {t('status.booking')}
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

            {/* Technical Specifications */}
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
                    {t('specs.title')}
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" component="h6" sx={{ fontWeight: 600, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Timeline color="primary" />
                                    {t('specs.technical')}
                                </Typography>
                                <List dense>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <Straighten fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${t('specs.totalLength')}: ${specifications.totalLength}`} />
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <Timeline fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${t('specs.sections')}: ${specifications.sections}`} />
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <Speed fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${t('specs.maxSpeed')}: ${specifications.maxSpeed}`} />
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <Height fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${t('specs.altitude')}: ${specifications.altitude}`} />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" component="h6" sx={{ fontWeight: 600, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Security color="primary" />
                                    {t('requirements.title')}
                                </Typography>
                                <List dense>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <Scale fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${t('requirements.weight')}: ${requirements.minWeight} - ${requirements.maxWeight}`} />
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <Height fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${t('requirements.height')}: ${requirements.minHeight} - ${requirements.maxHeight}`} />
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <People fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${t('requirements.age')}: ${requirements.minAge}`} />
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <DirectionsWalk fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${t('requirements.fitness')}: ${requirements.fitness}`} />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* Adventure Options */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 600,
                        color: 'success.main',
                        mb: 4,
                        textAlign: 'center'
                    }}
                >
                    {t('options.title')}
                </Typography>

                <Grid container spacing={3}>
                    {adventureOptions.map((option, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card sx={{
                                height: '100%',
                                '&:hover': { boxShadow: 6 },
                                border: option.recommended ? '2px solid' : 'none',
                                borderColor: option.recommended ? 'success.main' : 'transparent',
                                position: 'relative'
                            }}>
                                {option.recommended && (
                                    <Badge
                                        badgeContent={t('options.recommended')}
                                        color="success"
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
                                            label={option.difficulty}
                                            color={getDifficultyColor(option.difficulty)}
                                            size="small"
                                        />
                                        <Chip
                                            icon={<Euro />}
                                            label={option.price}
                                            color="primary"
                                            size="small"
                                        />
                                    </Box>

                                    <Typography variant="h5" component="h5" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 2 }}>
                                        {t(option.nameKey)}
                                    </Typography>

                                    <List dense>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <AccessTime fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.duration')}: ${option.duration}`} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Timeline fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.sections')}: ${option.sections}`} />
                                        </ListItem>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Straighten fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${t('common.distance')}: ${option.distance}`} />
                                        </ListItem>
                                    </List>

                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                        {t(option.descriptionKey)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Pricing & Schedule */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 600,
                        color: 'warning.main',
                        mb: 4,
                        textAlign: 'center'
                    }}
                >
                    {t('pricing.title')}
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="h6" sx={{ fontWeight: 600, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <MonetizationOn color="primary" />
                                    {t('pricing.ziplineTitle')}
                                </Typography>
                                <List dense>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemText
                                            primary={t('pricing.fullCourse')}
                                            secondary={t('pricing.fullCourseDesc')}
                                        />
                                        <Typography variant="h6" color="primary">
                                            {pricing2025.fullCourse}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemText
                                            primary={t('pricing.halfCourse')}
                                            secondary={t('pricing.halfCourseDesc')}
                                        />
                                        <Typography variant="h6" color="primary">
                                            {pricing2025.halfCourse}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemText
                                            primary={t('pricing.childrenCourse')}
                                            secondary={t('pricing.childrenCourseDesc')}
                                        />
                                        <Typography variant="h6" color="primary">
                                            {pricing2025.childrenCourse}
                                        </Typography>
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="h6" sx={{ fontWeight: 600, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Schedule color="primary" />
                                    {t('schedule.title')}
                                </Typography>
                                <List dense>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <AccessTime fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${t('schedule.daily')}: ${schedule.daily}`} />
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <Info fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${t('schedule.lastEntry')}: ${schedule.canyonLastEntry}`} />
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <Speed fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${t('schedule.lastDescent')}: ${schedule.ziplineLastDescent}`} />
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <CalendarToday fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${t('schedule.season')}: ${specifications.season}`} />
                                    </ListItem>
                                </List>

                                <Typography variant="h6" component="h6" sx={{ fontWeight: 600, mb: 1, mt: 2 }}>
                                    {t('pricing.canyonTitle')}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {t('pricing.canyonAdults')}: {pricing2025.canyon}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {t('pricing.canyonChildren')}: {pricing2025.canyonChildren}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

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
                        textAlign: 'center'
                    }}
                >
                    {t('safety.title')}
                </Typography>

                <Grid container spacing={3}>
                    {safetyFeatures.map((feature, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Alert severity="warning" sx={{ height: '100%' }}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                    {feature.icon}
                                    <Box>
                                        <Typography variant="h6" component="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 1 }}>
                                            {t(feature.titleKey)}
                                        </Typography>
                                        <Typography variant="body2">
                                            {t(feature.descriptionKey)}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Alert>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Practical Information */}
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
                    {t('practical.title')}
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
                            <Typography variant="h6" component="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                {t('practical.howToGet')}
                            </Typography>
                            <Typography variant="body2" paragraph>
                                {t('practical.directions')}
                            </Typography>
                            <Typography variant="body2" paragraph>
                                {t('practical.parking')}
                            </Typography>
                            <Typography variant="body2">
                                {t('practical.publicTransport')}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
                            <Typography variant="h6" component="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                {t('practical.whatToBring')}
                            </Typography>
                            <List dense>
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <ListItem key={num} sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <CheckCircle fontSize="small" color="success" />
                                        </ListItemIcon>
                                        <ListItemText primary={t(`practical.equipment.item${num}`)} />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            {/* Experience Summary */}
            <Paper elevation={2} sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                <Typography variant="h3" component="h3" gutterBottom>
                    {t('summary.title')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {t('summary.description')}
                </Typography>

                <Box sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: 'text.primary', p: 3, borderRadius: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom color="primary">
                        🎯 {t('summary.highlight.title')}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {t('summary.highlight.experience')}
                    </Typography>
                    <Typography variant="body2">
                        {t('summary.highlight.details')}
                    </Typography>
                </Box>

                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    {t('summary.conclusion')}
                </Typography>
            </Paper>
        </Container>
    );
};

export default Tiroliana7ScariBlogPage;