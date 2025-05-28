import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, BookOpen } from "lucide-react";
import { useLocale } from 'next-intl';

interface ExternalLinkCardProps {
  url: string;
  title: string;
  description?: string;
  platform?: string;
}

const getPlatformIcon = (platform?: string) => {
  switch (platform?.toLowerCase()) {
    case 'feishu':
      return <FileText className="h-5 w-5" />;
    case 'notion':
      return <BookOpen className="h-5 w-5" />;
    default:
      return <ExternalLink className="h-5 w-5" />;
  }
};

const getPlatformName = (platform?: string, locale?: string) => {
  switch (platform?.toLowerCase()) {
    case 'feishu':
      return locale === 'zh' ? '飞书文档' : 'Feishu Document';
    case 'notion':
      return 'Notion';
    default:
      return locale === 'zh' ? '外部链接' : 'External Link';
  }
};

export default function ExternalLinkCard({ url, title, description, platform }: ExternalLinkCardProps) {
  const locale = useLocale();
  
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          {getPlatformIcon(platform)}
          <span>{getPlatformName(platform, locale)}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        {description && (
          <CardDescription className="text-base">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <Button asChild className="w-full" variant="outline">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            {locale === 'zh' ? '查看文档' : 'View Document'}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
} 