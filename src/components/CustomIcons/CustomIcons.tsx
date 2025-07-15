import { Box, BoxProps, useTheme } from '@mui/material';
import { LuBedSingle } from "react-icons/lu";
import { MdBed } from "react-icons/md";
import { WiSunrise } from 'react-icons/wi';
import { BiChair } from "react-icons/bi";
import Image from 'next/image';
import balconyIcon from '@/../public/images/svg/balcony.svg'
import FirepitImage from '@/../public/images/png/FirepitPNG.png';
import ConferencePNG from '@/../public/images/png/ConferencePNG.png';

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


export const SunriseIcon = ({ sx = {}, size = 24, color = 'currentColor', ...props }) => {
    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...sx
            }}
            {...props}
        >
            <WiSunrise size={size * 1.4} color={color} />
        </Box>
    );
};
export const Chair = ({ sx = {}, size = 24, color = 'currentColor', ...props }) => {
    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...sx
            }}
            {...props}
        >
            <BiChair size={size * 1.4} color={color} />
        </Box>
    );
};


interface BalconyIconProps extends Omit<BoxProps, 'color'> {
    size?: number;
    color?: string;
    fontSize?: 'small' | 'medium' | 'large';
}

export const BalconyIcon: React.FC<BalconyIconProps> = ({
    sx = {},
    size = 24,
    color = 'currentColor',
    fontSize,
    ...props
}) => {
    // Handle MUI's fontSize prop (small, medium, large)
    const getSizeFromFontSize = (fontSize: 'small' | 'medium' | 'large'): number => {
        switch (fontSize) {
            case 'small': return 20;
            case 'medium': return 24;
            case 'large': return 28;
        }
    };

    const iconSize = fontSize ? getSizeFromFontSize(fontSize) : size;

    // Function to convert hex color to CSS filter
    const goldenColorFilter = 'brightness(0) saturate(60%) invert(75%) sepia(58%) saturate(348%) hue-rotate(4deg) brightness(103%) contrast(92%)';

    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...sx
            }}
            {...props}
        >
            <Image
                src={balconyIcon}
                alt="Balcony"
                width={iconSize * 1.6}
                height={iconSize * 1.6}
                style={{
                    filter: goldenColorFilter
                }}
            />
        </Box>
    );
};

interface FirepitIconProps extends Omit<BoxProps, 'children'> {
    size?: number;
    color?: string | 'primary' | 'secondary' | 'primary.dark' | 'secondary.dark' | 'primary.light' | 'secondary.light';
    sx?: BoxProps['sx'];
}

export const FirepitIcon: React.FC<FirepitIconProps> = ({
    sx = {},
    size = 24,
    color = 'currentColor',
    ...props
}) => {
    const theme = useTheme();

    // Function to resolve theme colors
    const getResolvedColor = (colorProp: string): string => {
        if (colorProp === 'currentColor') return colorProp;

        // Handle theme color paths
        const colorMap: { [key: string]: string } = {
            'primary': theme.palette.primary.main,
            'primary.main': theme.palette.primary.main,
            'primary.dark': theme.palette.primary.dark,
            'primary.light': theme.palette.primary.light,
            'secondary': theme.palette.secondary.main,
            'secondary.main': theme.palette.secondary.main,
            'secondary.dark': theme.palette.secondary.dark,
            'secondary.light': theme.palette.secondary.light,
        };

        return colorMap[colorProp] || colorProp;
    };

    const resolvedColor = getResolvedColor(color);
    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...sx
            }}
            {...props}
        >
            <Box
                sx={{
                    width: size,
                    height: size,
                    ...(resolvedColor !== 'currentColor' && {
                        backgroundColor: resolvedColor,
                        WebkitMask: `url(${FirepitImage.src || FirepitImage}) no-repeat center / contain`,
                        mask: `url(${FirepitImage.src || FirepitImage}) no-repeat center / contain`,
                        '& img': {
                            opacity: 0,
                        }
                    })
                }}
            >
                <Image
                    src={FirepitImage}
                    alt="Firepit"
                    width={size}
                    height={size}
                    style={{
                        ...(resolvedColor === 'currentColor' && {
                            display: 'block'
                        })
                    }}
                />
            </Box>
        </Box>
    );
};


export const ConferenceIcon: React.FC<FirepitIconProps> = ({
    sx = {},
    size = 24,
    color = 'currentColor',
    ...props
}) => {
    const theme = useTheme();

    // Function to resolve theme colors
    const getResolvedColor = (colorProp: string): string => {
        if (colorProp === 'currentColor') return colorProp;

        // Handle theme color paths
        const colorMap: { [key: string]: string } = {
            'primary': theme.palette.primary.main,
            'primary.main': theme.palette.primary.main,
            'primary.dark': theme.palette.primary.dark,
            'primary.light': theme.palette.primary.light,
            'secondary': theme.palette.secondary.main,
            'secondary.main': theme.palette.secondary.main,
            'secondary.dark': theme.palette.secondary.dark,
            'secondary.light': theme.palette.secondary.light,
        };

        return colorMap[colorProp] || colorProp;
    };

    const resolvedColor = getResolvedColor(color);
    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...sx
            }}
            {...props}
        >
            <Box
                sx={{
                    width: size,
                    height: size,
                    ...(resolvedColor !== 'currentColor' && {
                        backgroundColor: resolvedColor,
                        WebkitMask: `url(${ConferencePNG.src || ConferencePNG}) no-repeat center / contain`,
                        mask: `url(${ConferencePNG.src || ConferencePNG}) no-repeat center / contain`,
                        '& img': {
                            opacity: 0,
                        }
                    })
                }}
            >
                <Image
                    src={ConferencePNG}
                    alt="Conference"
                    width={size}
                    height={size}

                />
            </Box>
        </Box>
    );
};
