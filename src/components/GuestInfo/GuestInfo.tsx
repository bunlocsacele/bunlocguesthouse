// src/components/HeaderGuesthouseInfo/HeaderGuesthouseInfo.tsx
'use client';

import { Box, Typography } from '@mui/material';
import { People, Hotel } from '@mui/icons-material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PersonIcon from '@mui/icons-material/Person';

interface GuestInfoProps {
    maxGuests?: number;
    totalRooms?: number;
}

export default function GuestInfo({
    maxGuests = 15,
    totalRooms = 6
}: GuestInfoProps) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.1,
            flex: 1,
            mx: 1
        }}>
            {/* First row: Capacitate */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
            }}>
                <Typography sx={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-medium)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1,
                    letterSpacing: '0.3px',
                    minWidth: '58px', // Fixed width to align colons
                    textAlign: 'right'
                }}>
                    Capacitate
                </Typography>
                <Typography sx={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-medium)',
                    color: 'var(--color-text-secondary)',
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
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1rem',
                        fontWeight: 'var(--font-semibold)',
                        color: 'var(--color-primary-main)',
                        lineHeight: 1,
                        letterSpacing: '0.2px'
                    }}>
                        {maxGuests}
                    </Typography>
                    <PersonIcon sx={{
                        fontSize: 24,
                        color: 'var(--color-primary-main)'
                    }} />
                </Box>
            </Box>

            {/* Second row: Spații */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
            }}>
                <Typography sx={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-medium)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1,
                    letterSpacing: '0.3px',
                    minWidth: '58px', // Same fixed width to align colons
                    textAlign: 'right'
                }}>
                    Camere
                </Typography>
                <Typography sx={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-medium)',
                    color: 'var(--color-text-secondary)',
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
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--font-semibold)',
                        color: 'var(--color-primary-main)',
                        lineHeight: 1,
                        letterSpacing: '0.2px'
                    }}>
                        {totalRooms}
                    </Typography>
                    <MeetingRoomIcon sx={{
                        size: 24,
                        color: 'var(--color-primary-main)'
                    }} />
                </Box>
            </Box>
        </Box>
    );
}