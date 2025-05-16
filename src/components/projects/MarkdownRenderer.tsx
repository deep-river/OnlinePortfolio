'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent } from '@/components/ui/card';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <Card className={className}>
      <CardContent className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert mt-4 max-w-none">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            // 自定义标题样式
            h1: ({ node, ...props }) => <h3 className="text-xl font-semibold underline mb-2" {...props} />,
            h2: ({ node, ...props }) => <h4 className="text-lg font-semibold mb-2" {...props} />,
            h3: ({ node, ...props }) => <h5 className="text-md font-semibold mb-2" {...props} />,
            
            // 自定义列表样式
            ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-2 mb-4" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-2 mb-4" {...props} />,
            
            // 自定义段落样式
            p: ({ node, ...props }) => <p className="mb-3" {...props} />,
            
            // 自定义代码块样式
            code: ({ node, className, children, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || '');
              const isInline = !match && (props as any).inline;
              
              if (isInline) {
                return <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded" {...props}>{children}</code>;
              }
              
              return (
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm mb-4">
                  <code className={className} {...props}>{children}</code>
                </pre>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </CardContent>
    </Card>
  );
} 