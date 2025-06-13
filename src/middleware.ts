import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'ro'],
    defaultLocale: 'ro',
    localePrefix: 'always',
    localeDetection: true
});

export const config = {

    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
        '/([\\w-]+)?/users/(.+)'
    ]
};