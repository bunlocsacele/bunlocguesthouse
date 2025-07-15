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
import GuesthouseInfo from '@/components/GuestInfo/GuestInfo';

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
    roomIndex?: number;
    facilityIndex?: number;
}

export default function Navbar() {
    const t = useTranslations('navigation');
    const locale = useLocale();
    const pathname = usePathname();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [roomsSubmenuOpen, setRoomsSubmenuOpen] = useState(false);
    const [facilitiesSubmenuOpen, setFacilitiesSubmenuOpen] = useState(false);
    const [currentDropdown, setCurrentDropdown] = useState<string | null>(null);

    // Helper function to safely get room translations
    const getRoomTranslation = (key: string) => {
        try {
            const tRooms = useTranslations('rooms');
            return tRooms(key);
        } catch (error) {
            console.error(`Translation error for rooms.${key}:`, error);
            return key;
        }
    };

    // Helper function to safely get facility translations
    const getFacilityTranslation = (key: string) => {
        try {
            const tFacilities = useTranslations('facilities');
            return tFacilities(key);
        } catch (error) {
            console.error(`Translation error for facilities.${key}:`, error);
            return key;
        }
    };

    // Helper function to scroll to specific room section
    const scrollToRoom = (roomIndex: number) => {
        if (!pathname.includes('/rooms')) {
            window.location.href = `/${locale}/rooms`;
            sessionStorage.setItem('scrollToRoom', roomIndex.toString());
            return;
        }

        const targetPosition = roomIndex * window.innerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };

    // Helper function to scroll to specific facility section
    const scrollToFacility = (facilityIndex: number) => {
        if (!pathname.includes('/facilities')) {
            window.location.href = `/${locale}/facilities`;
            sessionStorage.setItem('scrollToFacility', facilityIndex.toString());
            return;
        }

        const targetPosition = facilityIndex * window.innerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };

    // Define available rooms with scroll navigation
    const availableRooms: SubNavItem[] = [
        { key: 'twinstandard1', href: `/${locale}/rooms`, translationKey: 'twinStandard', roomIndex: 0 },
        { key: 'twinstandard2', href: `/${locale}/rooms`, translationKey: 'twinStandard', roomIndex: 1 },
        { key: 'twinstandard3', href: `/${locale}/rooms`, translationKey: 'twinStandard', roomIndex: 2 },
        { key: 'triplestandard', href: `/${locale}/rooms`, translationKey: 'tripleStandard', roomIndex: 3 },
        { key: 'deluxe-room', href: `/${locale}/rooms`, translationKey: 'matrimoniala', roomIndex: 4 },
        { key: 'family', href: `/${locale}/rooms`, translationKey: 'family', roomIndex: 5 },
    ];

    // Define available facilities with scroll navigation
    const availableFacilities: SubNavItem[] = [
        { key: 'bonfire', href: `/${locale}/facilities`, translationKey: 'bonfire', facilityIndex: 0 },
        { key: 'grill', href: `/${locale}/facilities`, translationKey: 'grill', facilityIndex: 1 },
        { key: 'conference', href: `/${locale}/facilities`, translationKey: 'conference', facilityIndex: 2 },
        { key: 'kitchen', href: `/${locale}/facilities`, translationKey: 'kitchen', facilityIndex: 3 },
        { key: 'tenisTable', href: `/${locale}/facilities`, translationKey: 'tenisTable', facilityIndex: 4 },
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
        {
            key: 'facilities',
            href: `/${locale}/facilities`,
            translationKey: 'facilities',
            hasDropdown: true,
            subItems: availableFacilities
        },
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
        setFacilitiesSubmenuOpen(false);
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, dropdownType: string) => {
        setAnchorEl(event.currentTarget);
        setCurrentDropdown(dropdownType);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setCurrentDropdown(null);
    };

    const handleRoomsSubmenuToggle = () => {
        setRoomsSubmenuOpen(!roomsSubmenuOpen);
    };

    const handleFacilitiesSubmenuToggle = () => {
        setFacilitiesSubmenuOpen(!facilitiesSubmenuOpen);
    };

    const handleRoomClick = (subItem: SubNavItem) => {
        handleMenuClose();
        if (subItem.roomIndex !== undefined) {
            scrollToRoom(subItem.roomIndex);
        }
    };

    const handleFacilityClick = (subItem: SubNavItem) => {
        handleMenuClose();
        if (subItem.facilityIndex !== undefined) {
            scrollToFacility(subItem.facilityIndex);
        }
    };

    const handleMobileRoomClick = (subItem: SubNavItem) => {
        handleDrawerClose();
        if (subItem.roomIndex !== undefined) {
            scrollToRoom(subItem.roomIndex);
        }
    };

    const handleMobileFacilityClick = (subItem: SubNavItem) => {
        handleDrawerClose();
        if (subItem.facilityIndex !== undefined) {
            scrollToFacility(subItem.facilityIndex);
        }
    };

    const isActiveRoute = (href: string) => {
        if (href === `/${locale}`) {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    const getTranslationForSubItem = (item: NavItem, subItem: SubNavItem) => {
        if (item.key === 'rooms') {
            return getRoomTranslation(subItem.translationKey);
        } else if (item.key === 'facilities') {
            return getFacilityTranslation(subItem.translationKey);
        }
        return subItem.translationKey;
    };

    const handleSubItemClick = (item: NavItem, subItem: SubNavItem) => {
        if (item.key === 'rooms') {
            return handleRoomClick(subItem);
        } else if (item.key === 'facilities') {
            return handleFacilityClick(subItem);
        }
    };

    const handleMobileSubItemClick = (item: NavItem, subItem: SubNavItem) => {
        if (item.key === 'rooms') {
            return handleMobileRoomClick(subItem);
        } else if (item.key === 'facilities') {
            return handleMobileFacilityClick(subItem);
        }
    };

    const getSubmenuToggleHandler = (itemKey: string) => {
        if (itemKey === 'rooms') {
            return handleRoomsSubmenuToggle;
        } else if (itemKey === 'facilities') {
            return handleFacilitiesSubmenuToggle;
        }
        return () => { };
    };

    const getSubmenuOpenState = (itemKey: string) => {
        if (itemKey === 'rooms') {
            return roomsSubmenuOpen;
        } else if (itemKey === 'facilities') {
            return facilitiesSubmenuOpen;
        }
        return false;
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
                <GuesthouseInfo
                    maxGuests={15} totalRooms={6}
                />
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
                                onClick={item.hasDropdown ? getSubmenuToggleHandler(item.key) : handleDrawerClose}
                                className={`${styles.drawerItem} ${isActiveRoute(item.href) ? styles.active : ''}`}
                            >
                                <ListItemText primary={t(item.translationKey)} />
                                {item.hasDropdown && (
                                    getSubmenuOpenState(item.key) ? <ExpandLess /> : <ExpandMore />
                                )}
                            </ListItemButton>
                        </ListItem>

                        {item.hasDropdown && item.subItems && (
                            <Collapse in={getSubmenuOpenState(item.key)} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.subItems.map((subItem) => (
                                        <ListItem key={subItem.key} disablePadding>
                                            <ListItemButton
                                                onClick={() => handleMobileSubItemClick(item, subItem)}
                                                sx={{ pl: 4 }}
                                                className={`${styles.drawerItem} ${isActiveRoute(subItem.href) ? styles.active : ''}`}
                                            >
                                                <ListItemText primary={getTranslationForSubItem(item, subItem)} />
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
                                        onClick={item.hasDropdown ? (e: React.MouseEvent<HTMLButtonElement>) => handleMenuOpen(e, item.key) : undefined}
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
                                            open={Boolean(anchorEl) && currentDropdown === item.key}
                                            onClose={handleMenuClose}
                                            slotProps={{
                                                list: {
                                                    'aria-labelledby': `${item.key}-button`,
                                                }
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
                                                    onClick={() => handleSubItemClick(item, subItem)}
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
                                                    {getTranslationForSubItem(item, subItem)}
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