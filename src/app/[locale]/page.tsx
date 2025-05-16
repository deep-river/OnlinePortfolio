'use client'

import { useTranslations, useLocale } from 'next-intl';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkedinIcon, MailIcon, GithubIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getProjectsByLocale } from '@/lib/data/projectsData'
import { useRouter } from 'next/navigation';

export default function GameDevPortfolio() {
  const t = useTranslations();
  const tPortfolio = useTranslations('PortfolioPage');
  const tSocial = useTranslations('SocialLinks');
  const tCommon = useTranslations('Common');
  const locale = useLocale();
  const router = useRouter();
  
  // 使用新的数据获取函数
  const gameProjects = getProjectsByLocale(locale);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-8 md:px-24 lg:px-32 xl:px-48 py-8">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 font-display">{tCommon('fullName')}</h1>
          
          <div className="max-w-4xl mx-auto bg-black/5 dark:bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-lg mb-4 text-left font-gametext font-bold leading-snug tracking-wide whitespace-pre-wrap px-0 md:px-2">
              {tPortfolio('personalStatement')}
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mt-6">
            <Button asChild variant="outline" className="hover:scale-105 transition-transform">
              <Link href="https://www.linkedin.com/in/bangyu-li/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="mr-2 h-4 w-4" />
                {tSocial('linkedin')}
              </Link>
            </Button>
            <Button asChild variant="outline" className="hover:scale-105 transition-transform">
              <Link href="mailto:by.brad.li@gmail.com">
                <MailIcon className="mr-2 h-4 w-4" />
                {tSocial('email')}
              </Link>
            </Button>
            <Button asChild variant="outline" className="hover:scale-105 transition-transform">
              <Link href="https://github.com/deep-river" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                {tSocial('github')}
              </Link>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">{tPortfolio('myProjects')}</h2>
          <div className="space-y-6">
            {gameProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <Image 
                      src={project.thumbnailImage} 
                      alt={`${project.title} 缩略图`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader>
                      <Link href={`/${locale}/projects/${project.id}`} className="cursor-pointer">
                        <CardTitle className="text-2xl hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </Link>
                      <CardDescription>
                        {project.roles && project.roles.length > 0 ? project.roles[0].title : ''}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{project.shortDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.detailedSections.find(s => s.id === "technologies")?.content[0]?.type === "list" && 
                          project.detailedSections.find(s => s.id === "technologies")?.content[0]?.items?.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-secondary text-secondary-foreground text-sm px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full md:w-auto">
                        <Link href={`/${locale}/projects/${project.id}`}>
                          {tPortfolio('moreDetails')}
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
} 