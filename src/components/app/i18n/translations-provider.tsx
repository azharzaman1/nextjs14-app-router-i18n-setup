"use client";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "@/app/i18n";
import { createInstance } from "i18next";

type Props = {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: any;
};

export default function I18NProvider({
  children,
  locale,
  namespaces,
  resources,
}: Props) {
  const i18n = createInstance();
  useTranslation(locale, namespaces, { i18nInstance: i18n, resources });
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
