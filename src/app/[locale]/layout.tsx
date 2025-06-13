import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ClientThemeProvider from '@/components/poviders/ThemeProvider'
import Navbar from "@/components/Navbar/Navbar";

const locales = ['en', 'ro'];

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound();
    }

    console.log('🔍 Debug - Layout locale:', locale);

    const messages = await getMessages({ locale });

    console.log('🔍 Debug - Layout messages keys:', Object.keys(messages || {}));

    return (
        <html lang={locale}>
            <body>
                <ClientThemeProvider>
                    <NextIntlClientProvider messages={messages} locale={locale}>
                        <Navbar />
                        {children}
                    </NextIntlClientProvider>
                </ClientThemeProvider>
            </body>
        </html>
    );
}