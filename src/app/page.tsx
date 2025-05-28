'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkedinIcon, MailIcon, GithubIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getProjectsByLocale } from '@/lib/data/projectsData' // 引入项目数据函数

export default function GameDevPortfolio() {
  // 使用getProjectsByLocale获取项目数据，默认获取中文项目
  const gameProjects = getProjectsByLocale('zh');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/" className="hover:underline font-semibold text-lg">
                作品集
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:underline font-semibold text-lg">
                简历
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-8 md:px-24 lg:px-32 xl:px-48 py-8">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 font-display">李邦宇</h1>
          
          <div className="max-w-4xl mx-auto bg-black/5 dark:bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-lg mb-4 text-left font-gametext font-bold leading-snug tracking-wide whitespace-pre-wrap px-0 md:px-2">
              {`游戏不仅是我的工作，更是我的热爱。如果你正在寻找一位充满激情的技术设计师/游戏玩法程序员，那么你就是在寻找我。

我目前正在纽卡斯尔大学完成计算机游戏工程硕士学位，并有两年的行业经验担任技术设计师。我在系统设计、关卡设计、OpenGL渲染、物理模拟、游戏引擎技术、工具编程、游戏玩法开发等方面都有丰富经验。

我正在寻找技术设计师和游戏玩法程序员的机会—让我们一起合作吧。`}
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mt-6">
            <Button asChild variant="outline" className="hover:scale-105 transition-transform">
              <Link href="https://www.linkedin.com/in/bangyu-li/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="mr-2 h-4 w-4" />
                领英
              </Link>
            </Button>
            <Button asChild variant="outline" className="hover:scale-105 transition-transform">
              <Link href="mailto:by.brad.li@gmail.com">
                <MailIcon className="mr-2 h-4 w-4" />
                邮箱
              </Link>
            </Button>
            <Button asChild variant="outline" className="hover:scale-105 transition-transform">
              <Link href="https://github.com/deep-river" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">游戏项目</h2>
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
                      <Link href={`/projects/${project.id}`} className="cursor-pointer">
                        <CardTitle className="text-2xl hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </Link>
                      <CardDescription>
                        {project.mainRole || ''}
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
                        <Link href={`/projects/${project.id}`}>
                          更多详情
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