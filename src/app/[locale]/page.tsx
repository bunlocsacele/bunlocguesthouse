import { getTranslations } from 'next-intl/server';

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
            <h1>{t('title')}</h1>
            <p>Server locale: {locale}</p>
        </div>
    );
}