import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from "next-intl/server";
import SharedHeader from '@/components/layout/SharedHeader';

// 动态生成元数据
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Common' });
  
  return {
    title: t('pageTitle'),
    description: locale === 'en' 
      ? "Bangyu Li's online portfolio showcasing game development and design projects."
      : "李邦宇的在线作品集，展示游戏开发和设计项目。",
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ 
  children,
  params: { locale }
}: RootLayoutProps) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SharedHeader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 