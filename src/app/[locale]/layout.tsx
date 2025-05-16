import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from "next-intl/server";
import SharedHeader from '@/components/layout/SharedHeader';

// 设置默认的元数据
export const metadata: Metadata = {
  title: "李邦宇 | 游戏开发/设计师作品集",
  description: "李邦宇的在线作品集，展示游戏开发和设计项目。",
};

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