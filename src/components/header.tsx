import Link from "next/link";
import React from "react";
import { useTranslation } from "@/app/i18n";
import LanguageChanger from "./language-changer";
import I18NProvider from "./app/i18n/translations-provider";

type Props = {
  locale: string;
};

async function Header({ locale }: Props) {
  const { t, resources } = await useTranslation(locale, ["header"]);
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center justify-start space-x-2 rtl:space-x-reverse">
        <Link href={"/"}>{t("nav.home")}</Link>
        <Link href={"/about"}>{t("nav.about")}</Link>
      </div>

      <div>
        {/* Forwarding the resources (relevant translations), and i18n instance to the client side LanguageChanger component */}
        <I18NProvider
          namespaces={["header"]}
          locale={locale}
          resources={resources}
        >
          <LanguageChanger />
        </I18NProvider>
      </div>
    </nav>
  );
}

export default Header;
