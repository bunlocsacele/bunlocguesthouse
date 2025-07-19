'use client';

import { Box, Typography } from '@mui/material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';
import { useTranslations } from 'next-intl';

interface GuestInfoProps {
    maxGuests?: number;
    totalRooms?: number;
}

export default function GuestInfo({
    maxGuests = 15,
    totalRooms = 6
}: GuestInfoProps) {
    const theme = useTheme();
    const t = useTranslations('common');

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.1,
            flex: 1,
            mx: 1
        }}>
            {/* First row: Capaciy */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
            }}>
                <Typography sx={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: theme.palette.text.secondary,
                    lineHeight: 1,
                    letterSpacing: '0.3px',
                    minWidth: '58px',
                    textAlign: 'right'
                }}>
                    {t('capacity')}
                </Typography>
                <Typography sx={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: theme.palette.text.secondary,
                    lineHeight: 1
                }}>
                    :
                </Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.3
                }}>
                    <Typography sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                        lineHeight: 1,
                        letterSpacing: '0.2px'
                    }}>
                        {maxGuests}
                    </Typography>
                    <PersonIcon sx={{
                        fontSize: 24,
                        color: theme.palette.primary.dark
                    }} />
                </Box>
            </Box>

            {/* Second row: Rooms */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
            }}>
                <Typography sx={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: theme.palette.text.secondary,
                    lineHeight: 1,
                    letterSpacing: '0.3px',
                    minWidth: '58px',
                    textAlign: 'right'
                }}>
                    {t('rooms')}
                </Typography>
                <Typography sx={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: theme.palette.text.secondary,
                    lineHeight: 1
                }}>
                    :
                </Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.3
                }}>
                    <Typography sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                        lineHeight: 1,
                        letterSpacing: '0.2px'
                    }}>
                        {totalRooms}
                    </Typography>
                    <MeetingRoomIcon sx={{
                        fontSize: 24,
                        color: theme.palette.primary.dark
                    }} />
                </Box>
            </Box>
        </Box>
    );
}