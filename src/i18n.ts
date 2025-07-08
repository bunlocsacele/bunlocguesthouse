import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
    // Ensure locale is always defined and valid
    const validLocales = ['en', 'ro'];
    const resolvedLocale = locale && validLocales.includes(locale) ? locale : 'ro';

    // console.log('🔍 Debug - Requested locale:', locale);
    // console.log('🔍 Debug - Resolved locale:', resolvedLocale);

    try {
        const messages = (await import(`../messages/${resolvedLocale}.json`)).default;
        // console.log('🔍 Debug - Loaded messages for', resolvedLocale, ':', Object.keys(messages || {}));

        return {
            messages: messages || {},
            locale: resolvedLocale
        };
    } catch (error) {
        // console.error('❌ Error loading messages for locale:', resolvedLocale, error);

        // Fallback to default locale if current fails
        if (resolvedLocale !== 'ro') {
            try {
                const fallbackMessages = (await import(`../messages/ro.json`)).default;
                // console.log('🔄 Using fallback messages for ro');
                return {
                    messages: fallbackMessages || {},
                    locale: 'ro'
                };
            } catch (fallbackError) {
                // console.error('❌ Fallback also failed:', fallbackError);
            }
        }

        // Return empty messages as last resort
        return {
            messages: {},
            locale: resolvedLocale
        };
    }
});