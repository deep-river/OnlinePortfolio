'use client';

import { useState } from 'react';
import { getProjectByLocaleAndId } from '@/lib/data/projectsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon, ExternalLink, Gamepad2, X } from "lucide-react";
import MediaDisplay from '@/components/projects/MediaDisplay';
import ProjectSectionRenderer from '@/components/projects/ProjectSectionRenderer';
import { useTranslations, useLocale } from 'next-intl';

interface ProjectDetailPageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const locale = useLocale();
  const project = getProjectByLocaleAndId(locale, params.id);
  const t = useTranslations('ProjectDetails');

  if (!project) {
    notFound();
  }

  // 格式化多行描述
  const formatDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <span key={index}>{line}<br /></span>
    ));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-8 md:px-24 lg:px-32 xl:px-48 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">{project.title}</h1>

        {/* 英雄图像/视频 */}
        {project.heroMedia && (
          <section className="mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <MediaDisplay item={project.heroMedia} setSelectedImage={setSelectedImage} fullWidth={true} />
              </div>
              <div className="md:w-1/2">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('aboutProject')}</CardTitle>
                    {project.overviewDescription && (
                      <CardDescription className="whitespace-pre-wrap">
                        {formatDescription(project.overviewDescription)}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {project.projectInfo.technology && <p><span className="font-semibold">{t('technology')}:</span> {project.projectInfo.technology}</p>}
                      {project.projectInfo.genre && <p><span className="font-semibold">{t('genre')}:</span> {project.projectInfo.genre}</p>}
                      {project.projectInfo.engine && <p><span className="font-semibold">{t('engine')}:</span> {project.projectInfo.engine}</p>}
                      {project.projectInfo.language && <p><span className="font-semibold">{t('language')}:</span> {project.projectInfo.language}</p>}
                      {project.projectInfo.platform && <p><span className="font-semibold">{t('platform')}:</span> {project.projectInfo.platform}</p>}
                      {project.projectInfo.teamsize && <p><span className="font-semibold">{t('teamsize')}:</span> {project.projectInfo.teamsize}</p>}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.links?.liveDemo && (
                        <Button asChild variant="outline">
                          <Link href={project.links.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />{t('liveDemo')}
                          </Link>
                        </Button>
                      )}
                      {project.links?.github && (
                        <Button asChild variant="outline">
                          <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <GithubIcon className="mr-2 h-4 w-4" />{t('viewCode')}
                          </Link>
                        </Button>
                      )}
                      {project.links?.itchio && (
                        <Button asChild variant="outline">
                          <Link href={project.links.itchio} target="_blank" rel="noopener noreferrer">
                            <Gamepad2 className="mr-2 h-4 w-4" />Itch.io
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* 渲染详细章节 */}
        {project.detailedSections
          .filter(section => !section.hideInDetailPage)
          .map(section => (
            <ProjectSectionRenderer key={section.id} section={section} setSelectedImage={setSelectedImage} />
          ))
        }

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href={`/${locale}`}>{t('backToPortfolio')}</Link>
          </Button>
        </div>
      </main>

      {/* 图片模态框 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" 
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={selectedImage} 
              alt="放大图片" 
              width={1920} 
              height={1080} 
              className="max-h-[85vh] object-contain"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/75" 
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 