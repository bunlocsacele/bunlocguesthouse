
import { getTranslations } from 'next-intl/server';
import HomeCarousel from '@/components/HomeCarousel/HomeCarousel';

export default async function HomePage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'HomePage' });

    console.log('🔍 Debug - Server locale:', locale);
    console.log('🔍 Debug - Server translation:', t('title'));

    return (
        <div>
            <HomeCarousel />
        </div>
    );
}