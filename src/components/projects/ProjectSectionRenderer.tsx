import type { ProjectSection, ProjectSectionContent } from '@/lib/types/project';
import MediaDisplay from './MediaDisplay';
import MarkdownRenderer from './MarkdownRenderer';
import ExternalLinkCard from './ExternalLinkCard';

interface ProjectSectionRendererProps {
  section: ProjectSection;
  setSelectedImage: (src: string) => void;
}

const renderContent = (contentItem: ProjectSectionContent, index: number, setSelectedImage: (src: string) => void) => {
  switch (contentItem.type) {
    case 'heading':
      const HeadingTag = `h${(contentItem.level || 2) + 1}` as keyof JSX.IntrinsicElements; // h3, h4, h5
      return <HeadingTag key={index} className="text-xl font-semibold mt-6 mb-3">{contentItem.text}</HeadingTag>;
    case 'paragraph':
      return <p key={index} className="mb-3 whitespace-pre-wrap">{contentItem.text}</p>;
    case 'list':
      return (
        <ul key={index} className="list-disc list-inside space-y-1 mb-3">
          {contentItem.items?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case 'mediaGroup':
      return (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          {contentItem.media?.map((media, i) => (
            <MediaDisplay key={i} item={media} setSelectedImage={setSelectedImage} />
          ))}
        </div>
      );
    case 'markdown':
      return (
        <div key={index} className="my-4">
          <MarkdownRenderer content={contentItem.markdown || contentItem.text || ''} />
        </div>
      );
    case 'video':
      return (
        <div key={index} className="my-6 flex justify-center">
          <div className="w-full max-w-4xl">
            {contentItem.video && (
              <MediaDisplay 
                item={contentItem.video} 
                setSelectedImage={setSelectedImage} 
                fullWidth={true}
                className="w-full"
              />
            )}
          </div>
        </div>
      );
    case 'externalLink':
      return (
        <div key={index} className="my-6">
          {contentItem.link && (
            <ExternalLinkCard
              url={contentItem.link.url}
              title={contentItem.link.title}
              description={contentItem.link.description}
              platform={contentItem.link.platform}
            />
          )}
        </div>
      );
    default:
      return null;
  }
};

export default function ProjectSectionRenderer({ section, setSelectedImage }: ProjectSectionRendererProps) {
  // 特殊处理 "screenshots" 部分，确保显示多张图片
  if (section.id === 'screenshots') {
    return (
      <section className="mb-8" id={section.id}>
        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.content.map((content) => {
            if (content.type === 'mediaGroup' && content.media) {
              return content.media.map((media, mediaIndex) => (
                <MediaDisplay 
                  key={mediaIndex} 
                  item={media} 
                  setSelectedImage={setSelectedImage} 
                />
              ));
            }
            return null;
          })}
        </div>
      </section>
    );
  }

  // 特殊处理 "roles" 部分，为角色标题添加下划线样式
  if (section.id === 'roles') {
    // 检查是否有markdown内容
    const markdownContent = section.content.find(content => content.type === 'markdown');
    if (markdownContent) {
      return (
        <section className="mb-8" id={section.id}>
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <MarkdownRenderer 
            content={markdownContent.markdown || markdownContent.text || ''} 
            underlineH1={true}  // 为roles部分的h1添加下划线
          />
        </section>
      );
    }
    
    // 如果没有markdown，使用原来的渲染方式
    return (
      <section className="mb-8" id={section.id}>
        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
        <div className="space-y-4">
          {section.content.map((content, contentIndex) => {
            if (content.type === 'heading') {
              return (
                <div key={contentIndex}>
                  <h3 className="text-xl font-semibold underline mb-2">{content.text}</h3>
                  {section.content[contentIndex + 1]?.type === 'list' && (
                    <ul className="list-disc list-inside space-y-2">
                      {section.content[contentIndex + 1].items?.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>
    );
  }

  // 特殊处理 "design-highlights" 部分
  if (section.id === 'design-highlights') {
    // 检查是否有markdown内容
    const markdownContent = section.content.find(content => content.type === 'markdown');
    if (markdownContent) {
      return (
        <section className="mb-8" id={section.id}>
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <MarkdownRenderer content={markdownContent.markdown || markdownContent.text || ''} />
        </section>
      );
    }
  }

  return (
    <section className="mb-8" id={section.id}>
      {section.title && <h2 className="text-2xl font-bold mb-4">{section.title}</h2>}
      <div className={section.layout === 'two-column-image-left' || section.layout === 'two-column-image-right' 
        ? 'md:grid md:grid-cols-2 md:gap-6' 
        : ''}>
        {section.content.map((contentItem, index) => renderContent(contentItem, index, setSelectedImage))}
      </div>
    </section>
  );
} 