import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import styles from './Footer.module.css';

const Footer = () => {
    const t = useTranslations('footer');
    const locale = useLocale();

    // console.log('Current locale:', locale);
    // console.log('Translation result:', t('fullAddress'));

    return (
        <Box component="footer" className={styles.footer}>
            <Box className={styles.mapColumn}>
                <Box className={styles.mapSection}>
                    <Typography variant="h6" component="h4" className={styles.addressTitle}>
                        {t('fullAddress')}
                    </Typography>
                    <Paper elevation={3} className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.4976473809338!2d25.663775781089043!3d45.606683738317905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35d38923fb641%3A0x269e81cfb982d882!2sBunloc%2C%20505600%20S%C4%83cele!5e0!3m2!1sen!2sro!4v1749811083546!5m2!1sen!2sro"
                            className={styles.mapIframe}
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Our Location"
                        />
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;