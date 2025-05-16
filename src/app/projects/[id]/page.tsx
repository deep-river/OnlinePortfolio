'use client';

import { useState, useEffect } from 'react';
import { allProjects } from '@/lib/data/projects';
import type { ProjectData } from '@/lib/types/project';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon, ExternalLink, Gamepad2, X } from "lucide-react";
import MediaDisplay from '@/components/projects/MediaDisplay';
import ProjectSectionRenderer from '@/components/projects/ProjectSectionRenderer';

interface ProjectDetailPageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = allProjects.find(p => p.id === params.id);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Bangyu Li Portfolio`;
    }
  }, [project]);

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
      <header className="bg-primary text-primary-foreground">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-4">
            <li><Link href="/" className="hover:underline font-semibold text-lg">作品集</Link></li>
            <li><Link href="/resume" className="hover:underline font-semibold text-lg">简历</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-8 md:px-24 lg:px-32 xl:px-48 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">{project.title}</h1>

        {/* 英雄图像/视频 */}
        {project.heroMedia && (
          <section className="mb-8">
            <MediaDisplay item={project.heroMedia} setSelectedImage={setSelectedImage} />
          </section>
        )}
        
        {/* 项目信息卡片 */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>关于项目</CardTitle>
              {project.overviewDescription && (
                <CardDescription className="whitespace-pre-wrap">
                  {formatDescription(project.overviewDescription)}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                {project.projectInfo.genre && <p><span className="font-semibold">类型:</span> {project.projectInfo.genre}</p>}
                {project.projectInfo.engine && <p><span className="font-semibold">引擎:</span> {project.projectInfo.engine}</p>}
                {project.projectInfo.platform && <p><span className="font-semibold">平台:</span> {project.projectInfo.platform}</p>}
                {project.projectInfo.teamsize && <p><span className="font-semibold">团队规模:</span> {project.projectInfo.teamsize}</p>}
                {project.projectInfo.releaseDate && <p><span className="font-semibold">发布日期:</span> {project.projectInfo.releaseDate}</p>}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.links?.liveDemo && (
                  <Button asChild variant="outline">
                    <Link href={project.links.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />演示链接
                    </Link>
                  </Button>
                )}
                {project.links?.github && (
                  <Button asChild variant="outline">
                    <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" />GitHub
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
                {/* 其他链接类型 */}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 角色和职责 */}
        {project.roles && project.roles.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">角色与职责</h2>
            {project.roles.map((role, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                <ul className="list-disc list-inside space-y-1">
                  {role.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* 渲染详细章节 */}
        {project.detailedSections.map(section => (
          <ProjectSectionRenderer key={section.id} section={section} setSelectedImage={setSelectedImage} />
        ))}

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/">返回作品集</Link>
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