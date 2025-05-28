import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'zh',
  localePrefix: 'always'
});

export const config = {
  // Match all routes except for api, _next, and files with extensions
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 