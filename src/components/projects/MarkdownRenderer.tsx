'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import glsl from 'react-syntax-highlighter/dist/cjs/languages/prism/glsl';

// 注册只需要的语言以减小包体积
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('js', javascript);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('glsl', glsl);

interface MarkdownRendererProps {
  content: string;
  className?: string;
  underlineH1?: boolean;
}

export default function MarkdownRenderer({ content, className, underlineH1 = false }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-sm md:prose-base lg:prose-lg dark:prose-invert py-4 max-w-none 
      prose-pre:p-0 prose-pre:m-0 prose-pre:bg-transparent prose-pre:border-0 prose-pre:shadow-none
      ${className || ''}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          // 自定义标题样式
          h1: ({ ...props }) => <h3 className={`text-xl font-semibold mb-2 ${underlineH1 ? 'underline' : ''}`} {...props} />,
          h2: ({ ...props }) => <h4 className="text-lg font-semibold mb-2" {...props} />,
          h3: ({ ...props }) => <h5 className="text-md font-semibold mb-2" {...props} />,
          
          // 自定义列表样式
          ul: ({ ...props }) => <ul className="list-disc list-inside space-y-2 mb-4" {...props} />,
          ol: ({ ...props }) => <ol className="list-decimal list-inside space-y-2 mb-4" {...props} />,
          
          // 自定义段落样式
          p: ({ ...props }) => <p className="mb-3" {...props} />,
          
          // 自定义代码块样式
          code: ({ className, children, ...props }: React.ComponentProps<'code'>) => {
            const match = /language-(\w+)/.exec(className || '');
            const isInline = !match && 'inline' in props;
            
            if (isInline) {
              return <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded" {...props}>{children}</code>;
            }
            
            const language = match ? match[1] : '';
            return (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={language}
                PreTag="div"
                className="rounded-md my-4 overflow-auto border-none"
                customStyle={{
                  borderRadius: '6px',
                  margin: '16px 0',
                  padding: '16px',
                  border: 'none',
                  boxShadow: 'none'
                }}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 