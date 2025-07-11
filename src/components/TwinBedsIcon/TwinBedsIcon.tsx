import { Box } from '@mui/material';
import { LuBedDouble, LuBedSingle } from "react-icons/lu";
import { MdBed } from "react-icons/md";

export const TwinBeds = ({ sx = {}, size = 24, color = 'currentColor', ...props }) => {
    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.25,
                ...sx
            }}
            {...props}
        >
            <LuBedSingle size={size} color={color} />
            <LuBedSingle size={size} color={color} />
        </Box>
    );
};

export const ThreeBeds = ({ sx = {}, size = 24, color = 'currentColor', ...props }) => {
    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.25,
                ...sx
            }}
            {...props}
        >
            <LuBedSingle size={size} color={color} />
            <LuBedSingle size={size} color={color} />
            <LuBedSingle size={size} color={color} />
        </Box>
    );
};

export const FamilyBeds = ({ sx = {}, size = 24, color = 'currentColor', ...props }) => {
    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.25,
                ...sx
            }}
            {...props}
        >
            <LuBedSingle size={size} color={color} />
            <MdBed size={size * 1.4} color={color} />
            <LuBedSingle size={size} color={color} />
        </Box>
    );
};
