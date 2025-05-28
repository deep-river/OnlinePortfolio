'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function SharedHeader() {
  const pathname = usePathname();
  const t = useTranslations('Navigation');
  const locale = useLocale();

  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1"></div>
        <ul className="flex justify-center space-x-4 flex-1">
          <li>
            <Link 
              href={`/${locale}`} 
              className={`hover:underline font-semibold text-lg ${pathname === `/${locale}` ? 'text-white font-bold' : ''}`}
            >
              {t('portfolio')}
            </Link>
          </li>
          <li>
            <Link 
              href={`/${locale}/resume`} 
              className={`hover:underline font-semibold text-lg ${pathname === `/${locale}/resume` ? 'text-white font-bold' : ''}`}
            >
              {t('resume')}
            </Link>
          </li>
        </ul>
        <div className="flex-1 flex justify-end">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
} 