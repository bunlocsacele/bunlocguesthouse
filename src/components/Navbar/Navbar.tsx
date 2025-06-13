// src/components/layout/Navbar.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
    AppBar,
    Toolbar,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    IconButton,
    Box,
    Container,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Close as CloseIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';

interface NavItem {
    key: string;
    href: string;
    translationKey: string;
}

export default function Navbar() {
    const t = useTranslations('navigation');
    const locale = useLocale();
    const pathname = usePathname();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems: NavItem[] = [
        { key: 'home', href: `/${locale}`, translationKey: 'home' },
        { key: 'rooms', href: `/${locale}/rooms`, translationKey: 'rooms' },
        { key: 'facilities', href: `/${locale}/facilities`, translationKey: 'facilities' },
        { key: 'amenities', href: `/${locale}/amenities`, translationKey: 'amenities' },
        { key: 'location', href: `/${locale}/location`, translationKey: 'location' },
        { key: 'about', href: `/${locale}/organization`, translationKey: 'about' },
        { key: 'blog', href: `/${locale}/blog`, translationKey: 'blog' },
        { key: 'contact', href: `/${locale}/contact`, translationKey: 'contact' },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
        setMobileOpen(false);
    };

    const isActiveRoute = (href: string) => {
        if (href === `/${locale}`) {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    const drawer = (
        <Box className={styles.drawer}>
            <div className={styles.drawerHeader}>
                <Link href={`/${locale}`} onClick={handleDrawerClose}>
                    <Image
                        src="/images/logo.png"
                        alt="Guesthouse Logo"
                        width={120}
                        height={40}
                        className={styles.drawerLogo}
                    />
                </Link>
                <IconButton onClick={handleDrawerClose} className={styles.closeButton}>
                    <CloseIcon />
                </IconButton>
            </div>

            <List className={styles.drawerContent}>
                {navItems.map((item) => (
                    <ListItem key={item.key} disablePadding>
                        <ListItemButton
                            component={Link}
                            href={item.href}
                            onClick={handleDrawerClose}
                            className={`${styles.drawerItem} ${isActiveRoute(item.href) ? styles.active : ''}`}
                        >
                            <ListItemText primary={t(item.translationKey)} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.primary.main}20` }}>
                <LanguageSwitcher />
            </Box>
        </Box>
    );

    return (
        <>
            <AppBar
                position="static"
                elevation={0}
                className={styles.navbar}
                sx={{
                    backgroundColor: 'var(--color-background-paper)',
                    color: 'var(--color-text-primary)',
                    borderBottom: `1px solid ${theme.palette.primary.main}20`,
                    boxShadow: `0 2px 8px ${theme.palette.primary.main}14`
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar className={styles.toolbar} disableGutters>
                        {/* Logo */}
                        <Link href={`/${locale}`} className={styles.logoContainer}>
                            <Image
                                src="/images/logo.png"
                                alt="Guesthouse Logo"
                                width={200}
                                height={80}
                                className={styles.logoIcon}
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <Box className={styles.desktopNav}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.key}
                                    component={Link}
                                    href={item.href}
                                    className={`${styles.navButton} ${isActiveRoute(item.href) ? styles.active : ''}`}
                                    variant={isActiveRoute(item.href) ? "contained" : "text"}
                                    color={isActiveRoute(item.href) ? "secondary" : "primary"}
                                >
                                    {t(item.translationKey)}
                                </Button>
                            ))}

                            <LanguageSwitcher />
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            onClick={handleDrawerToggle}
                            className={styles.mobileMenuButton}
                            aria-label="open navigation menu"
                            sx={{
                                color: 'var(--color-text-primary)',
                                '&:hover': {
                                    backgroundColor: 'var(--color-primary-main)',
                                    color: 'var(--color-primary-contrast)'
                                }
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true,
                }}
                slotProps={{
                    paper: {
                        className: styles.drawerOverlay,
                        sx: {
                            backgroundColor: 'var(--color-background-paper)',
                            backdropFilter: 'blur(4px)',
                        }
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}