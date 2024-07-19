import { allowedLocales, defaultLocale } from "@/lib/i18n/localizations";

const i18nConfig: I18NConfig = {
  locales: allowedLocales,
  defaultLocale: defaultLocale,
  prefixDefault: false,
};

export { i18nConfig };
