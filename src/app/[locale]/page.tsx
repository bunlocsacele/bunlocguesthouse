import { getMetaData } from '@/utils/seo';
import type { Metadata } from 'next';
import HomePage from './HomePage'; // Your existing component

type Props = {
    params: Promise<{ locale: string }>
}

// Generate metadata for the homepage
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const meta = getMetaData('home', locale);

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
                'ro': 'https://cazare-brasov-bunloc.ro/ro',
                'en': 'https://cazare-brasov-bunloc.ro/en',
                'fr': 'https://cazare-brasov-bunloc.ro/fr',
            }
        }
    };
}

// This is your page component that uses the HomePage component
export default async function Page({ params }: Props) {
    const { locale } = await params;
    return <HomePage locale={locale} />;
}