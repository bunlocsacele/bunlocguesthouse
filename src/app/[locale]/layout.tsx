import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navbar from "@/components/Navbar/Navbar";

const locales = ['en', 'ro'];

// Generate static params for both locales
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

    // Validate locale early
    if (!locales.includes(locale)) {
        console.log('❌ Invalid locale in layout:', locale);
        notFound();
    }

    console.log('🔍 Debug - Layout locale:', locale);

    // Pass the locale explicitly to getMessages
    const messages = await getMessages({ locale });

    console.log('🔍 Debug - Layout messages keys:', Object.keys(messages || {}));

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <Navbar />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}