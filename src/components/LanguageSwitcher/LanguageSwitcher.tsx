// src/components/layout/LanguageSwitcher.tsx
'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { ExpandMore, Language } from '@mui/icons-material';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLocaleChange = (newLocale: string) => {
        // More robust pathname handling
        let newPathname: string;

        // Remove current locale from pathname
        const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';

        // Add new locale
        newPathname = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

        console.log('Switching from', locale, 'to', newLocale);
        console.log('Current pathname:', pathname);
        console.log('New pathname:', newPathname);

        router.push(newPathname);
        handleClose();
    };

    const getCurrentLanguageLabel = () => {
        return locale === 'en' ? 'EN' : 'RO';
    };

    return (
        <div className={styles.languageSwitcher}>
            <Button
                onClick={handleClick}
                startIcon={<Language />}
                endIcon={<ExpandMore />}
                className={styles.navButton}
                sx={{ minWidth: 'auto' }}
            >
                {getCurrentLanguageLabel()}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem
                    onClick={() => handleLocaleChange('en')}
                    selected={locale === 'en'}
                    disabled={locale === 'en'}
                >
                    <Typography variant="body2">English</Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => handleLocaleChange('ro')}
                    selected={locale === 'ro'}
                    disabled={locale === 'ro'}
                >
                    <Typography variant="body2">Română</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
}