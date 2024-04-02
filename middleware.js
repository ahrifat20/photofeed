import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

const defaultLocale = "en";
const locales = ["bn", "en"];

const getLocale = (request) => {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
};

export const middleware = (request) => {
  const pathName = request.nextUrl.pathname;

  const pathNameIsMissingLocale = locales.every(
    (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
  );

  if (pathNameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathName}`, request.url)
    );
  }
};

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // "/((?!_next).*)",
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
