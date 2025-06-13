import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'ro'],
    defaultLocale: 'ro',
    localePrefix: 'always',
    localeDetection: true
});

export const config = {
    // More comprehensive matcher that handles all routes
    matcher: [
        // Match all pathnames except for
        // - API routes
        // - _next/static (static files)
        // - _next/image (image optimization files)
        // - favicon.ico (favicon file)
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
        // However, match all pathnames within `/users`, optionally with a locale prefix
        '/([\\w-]+)?/users/(.+)'
    ]
};