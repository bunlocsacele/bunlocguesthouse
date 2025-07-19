
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ClientThemeProvider from '@/components/providers/ThemeProvider'
import Navbar from "@/components/Navbar/Navbar";
import Footer from '@/components/Footer/Footer';
import CustomFloatButton from '@/components/CustomFloatButton/CustomFloatButton';
import DevelopmentMessage from '@/components/DevelopmentMessage/DevelopmentMessage';

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

    // console.log('🔍 Debug - Layout locale:', locale);

    const messages = await getMessages({ locale });

    // console.log('🔍 Debug - Layout messages keys:', Object.keys(messages || {}));

    return (
        <html lang={locale}>
            <body>
                <ClientThemeProvider>
                    <NextIntlClientProvider messages={messages} locale={locale}>
                        <Navbar />
                        {children}

                        <Footer />
                        <CustomFloatButton />
                        <DevelopmentMessage />
                    </NextIntlClientProvider>
                </ClientThemeProvider>
            </body>
        </html>
    );
}