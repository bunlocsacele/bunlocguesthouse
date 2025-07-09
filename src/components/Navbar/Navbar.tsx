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
    Menu,
    MenuItem,
    Collapse,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Close as CloseIcon,
    KeyboardArrowDown,
    ExpandLess,
    ExpandMore,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';
import logoNavmenu from "@/../public/images/logoNavmenu.png"

interface NavItem {
    key: string;
    href: string;
    translationKey: string;
    hasDropdown?: boolean;
    subItems?: SubNavItem[];
}

interface SubNavItem {
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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [roomsSubmenuOpen, setRoomsSubmenuOpen] = useState(false);

    // Define available rooms - you can move this to a separate config file
    const availableRooms: SubNavItem[] = [
        { key: 'twinstandard1', href: `/${locale}/rooms`, translationKey: 'Twin standard' },
        { key: 'twinstandard2', href: `/${locale}/rooms`, translationKey: 'Twin standard' },
        { key: 'twinstandard3', href: `/${locale}/rooms`, translationKey: 'Twin standard' },
        { key: 'tripplestandard', href: `/${locale}/rooms`, translationKey: 'Tripple standard' },
        { key: 'deluxe-room', href: `/${locale}/rooms`, translationKey: 'Matrimonială' },
        { key: 'family', href: `/${locale}/rooms`, translationKey: 'Family 4 persoane' },
    ];

    const navItems: NavItem[] = [
        { key: 'home', href: `/${locale}`, translationKey: 'home' },
        {
            key: 'rooms',
            href: `/${locale}/rooms`,
            translationKey: 'rooms',
            hasDropdown: true,
            subItems: availableRooms
        },
        { key: 'facilities', href: `/${locale}/facilities`, translationKey: 'facilities' },
        { key: 'location', href: `/${locale}/location`, translationKey: 'location' },
        { key: 'blog', href: `/${locale}/blog`, translationKey: 'blog' },
        { key: 'contact', href: `/${locale}/contact`, translationKey: 'contact' },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
        setMobileOpen(false);
        setRoomsSubmenuOpen(false);
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleRoomsSubmenuToggle = () => {
        setRoomsSubmenuOpen(!roomsSubmenuOpen);
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
                        src={logoNavmenu}
                        alt="Guesthouse Logo"
                        width={40}
                        height={30}
                        style={{ height: 'auto', width: 'auto' }}
                        className={styles.drawerLogo}
                    />
                </Link>
                <IconButton onClick={handleDrawerClose} className={styles.closeButton}>
                    <CloseIcon />
                </IconButton>
            </div>

            <List className={styles.drawerContent}>
                {navItems.map((item) => (
                    <Box key={item.key}>
                        <ListItem disablePadding>
                            <ListItemButton
                                component={item.hasDropdown ? 'div' : Link}
                                href={item.hasDropdown ? undefined : item.href}
                                onClick={item.hasDropdown ? handleRoomsSubmenuToggle : handleDrawerClose}
                                className={`${styles.drawerItem} ${isActiveRoute(item.href) ? styles.active : ''}`}
                            >
                                <ListItemText primary={t(item.translationKey)} />
                                {item.hasDropdown && (
                                    roomsSubmenuOpen ? <ExpandLess /> : <ExpandMore />
                                )}
                            </ListItemButton>
                        </ListItem>

                        {item.hasDropdown && item.subItems && (
                            <Collapse in={roomsSubmenuOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.subItems.map((subItem) => (
                                        <ListItem key={subItem.key} disablePadding>
                                            <ListItemButton
                                                component={Link}
                                                href={subItem.href}
                                                onClick={handleDrawerClose}
                                                sx={{ pl: 4 }}
                                                className={`${styles.drawerItem} ${isActiveRoute(subItem.href) ? styles.active : ''}`}
                                            >
                                                <ListItemText primary={t(subItem.translationKey)} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </Box>
                ))}
            </List>

            <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.primary.main}20` }}>
                <LanguageSwitcher />
            </Box>
            <Box sx={{ p: 2, borderTop: `1px solid ` }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.4976473809338!2d25.663775781089043!3d45.606683738317905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35d38923fb641%3A0x269e81cfb982d882!2sBunloc%2C%20505600%20S%C4%83cele!5e1!3m2!1sen!2sro!4v1749811083546!5m2!1sen!2sro"
                    width="280"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
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
                    backgroundColor: 'var(--color-background)',
                    color: 'var(--color-text-primary)',
                    borderBottom: `1px solid ${theme.palette.primary.main}20`,
                    boxShadow: `0 2px 8px ${theme.palette.primary.main}14`
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar className={styles.toolbar} disableGutters>
                        {/* Logo */}
                        <Link href={`/${locale}`} className={styles.logoContainer}>
                            <div className={styles.rhomboidMask}>
                                <Image
                                    src="/images/logo.png"
                                    alt="Guesthouse Logo"
                                    width={300}
                                    height={120}
                                    style={{ height: 'auto', width: 'auto' }}
                                    className={styles.logoIcon}
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <Box className={styles.desktopNav}>
                            {navItems.map((item) => (
                                <Box key={item.key} sx={{ position: 'relative' }}>
                                    <Button
                                        component={item.hasDropdown ? 'button' : Link}
                                        href={item.hasDropdown ? undefined : item.href}
                                        onClick={item.hasDropdown ? handleMenuOpen : undefined}
                                        className={`${styles.navButton} ${isActiveRoute(item.href) ? styles.active : ''}`}
                                        variant={isActiveRoute(item.href) ? "contained" : "text"}
                                        color={isActiveRoute(item.href) ? "secondary" : "primary"}
                                        endIcon={item.hasDropdown ? <KeyboardArrowDown /> : undefined}
                                    >
                                        {t(item.translationKey)}
                                    </Button>

                                    {item.hasDropdown && item.subItems && (
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={handleMenuClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'rooms-button',
                                            }}
                                            sx={{
                                                '& .MuiPaper-root': {
                                                    backgroundColor: 'var(--color-background-paper)',
                                                    border: `1px solid ${theme.palette.primary.main}20`,
                                                    boxShadow: `0 4px 12px ${theme.palette.primary.main}14`,
                                                    minWidth: 180,
                                                }
                                            }}
                                        >
                                            {item.subItems.map((subItem) => (
                                                <MenuItem
                                                    key={subItem.key}
                                                    component={Link}
                                                    href={subItem.href}
                                                    onClick={handleMenuClose}
                                                    sx={{
                                                        color: 'var(--color-text-primary)',
                                                        '&:hover': {
                                                            backgroundColor: 'var(--color-primary-main)',
                                                            color: 'var(--color-primary-contrast)'
                                                        },
                                                        ...(isActiveRoute(subItem.href) && {
                                                            backgroundColor: 'var(--color-secondary-main)',
                                                            color: 'var(--color-secondary-contrast)',
                                                            '&:hover': {
                                                                backgroundColor: 'var(--color-secondary-dark)',
                                                            }
                                                        })
                                                    }}
                                                >
                                                    {t(subItem.translationKey)}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    )}
                                </Box>
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
                            // backgroundColor: 'var(--color-background-paper)',
                            // backdropFilter: 'blur(4px)',
                            // boxShadow: 'none',
                        }
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}