import { getMetaData } from '@/utils/seo';
import type { Metadata } from 'next';
import RoomsPageComponent from './RoomsPageComponent';

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const meta = getMetaData('rooms', locale);

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        openGraph: {
            ...meta.openGraph,
            locale: locale,
            type: 'website',
            siteName: 'Cazare Brașov Bunloc'
        },
        twitter: meta.twitter,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: meta.openGraph.url,
            languages: {
                'ro': 'https://cazare-brasov-bunloc.ro/ro/rooms',
                'en': 'https://cazare-brasov-bunloc.ro/en/rooms',
                'fr': 'https://cazare-brasov-bunloc.ro/fr/rooms',
            }
        }
    };
}

export default async function RoomsPage({ params }: Props) {
    const { locale } = await params;
    return <RoomsPageComponent locale={locale} />;
}