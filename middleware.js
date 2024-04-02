// import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
// import { NextResponse } from "next/server";

// const defaultLocale = "en";
// const locales = ["bn", "en"];

// const getLocale = (request) => {
//   const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
//   let headers = { "accept-language": acceptedLanguage };
//   let languages = new Negotiator({ headers }).languages();
//   return match(languages, locales, defaultLocale);
// };

// export const middleware = (request) => {
//   const pathName = request.nextUrl.pathname;

//   const pathNameIsMissingLocale = locales.every(
//     (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
//   );

//   if (pathNameIsMissingLocale) {
//     const locale = getLocale(request);

//     return NextResponse.redirect(
//       new URL(`/${locale}/${pathName}`, request.url)
//     );
//   }
// };

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     // "/((?!_next).*)",
//     "/((?!api|assets|.*\\..*|_next).*)",
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// };

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next, assets, api)
//     "/((?!api|assets|.*\\..*|_next).*)",
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// };

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let defaultLocale = "en";
let locales = ["bn", "en"];

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale); // -> 'en-US'
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
