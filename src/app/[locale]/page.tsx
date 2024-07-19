import { useTranslation } from "@/app/i18n";
import SomeClientComponent from "@/components/some-client-component";
import I18NProvider from "@/components/app/i18n/translations-provider";

type Props = {
  params: { locale: string };
};

const i18nPageNamespaces = ["home"];

export default async function Home({ params: { locale } }: Props) {
  const { t, resources } = await useTranslation(locale, i18nPageNamespaces, {
    keyPrefix: "hero",
  });

  return (
    <I18NProvider
      namespaces={i18nPageNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h3 className="text-2xl">{t("heading")}</h3>

        <SomeClientComponent />
      </main>
    </I18NProvider>
  );
}
