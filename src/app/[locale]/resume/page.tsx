'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, MailIcon, PhoneIcon, DownloadIcon } from "lucide-react"
import { useTranslations, useLocale } from 'next-intl'

export default function Resume() {
  const t = useTranslations('Resume');
  const tCommon = useTranslations('Common');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-8 md:px-24 lg:px-32 xl:px-48 py-8">
        <h1 className="text-5xl font-bold mb-4 text-center">{tCommon('fullName')}</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Button variant="outline" size="sm">
            <MailIcon className="mr-2 h-4 w-4" />
            by.brad.li@gmail.com
          </Button>
          <Button variant="outline" size="sm">
            <PhoneIcon className="mr-2 h-4 w-4" />
            +44-7777 939 789
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="https://github.com/deep-river" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              Github
            </Link>
          </Button>
        </div>
        <div className="flex justify-center mb-8">
          <Button asChild>
            <Link href={locale === 'zh' ? 
              "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/resume/CV-Bangyu%20Li-CN.pdf" : 
              "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/resume/CV-Bangyu%20Li.pdf"} 
              target="_blank" rel="noopener noreferrer" download>
              <DownloadIcon className="mr-2 h-4 w-4" />
              {locale === 'zh' ? '下载简历PDF' : 'Download Resume PDF'}
            </Link>
          </Button>
        </div>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{locale === 'zh' ? '教育背景' : 'Education'}</h2>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">{locale === 'zh' ? '纽卡斯尔大学' : 'Newcastle University'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{locale === 'zh' ? '计算机游戏工程 理学硕士' : 'MSc Computer Game Engineering'}</p>
              <p className="text-sm text-muted-foreground">{locale === 'zh' ? '预计完成: 2025年9月' : 'Expected: Sep 2025'}</p>
              <p className="text-sm">{locale === 'zh' ? '英国，纽卡斯尔' : 'Newcastle upon Tyne, U.K.'}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">{locale === 'zh' ? '纽约州立大学水牛城分校' : 'University at Buffalo, SUNY'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{locale === 'zh' ? '计算机科学 理学学士' : 'BS in Computer Science'}</p>
              <p className="text-sm text-muted-foreground">{locale === 'zh' ? '2018年1月 – 2021年8月' : 'Jan 2018 – Aug 2021'}</p>
              <p className="text-sm">{locale === 'zh' ? '美国，纽约州，布法罗' : 'Buffalo, NY, U.S.'}</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{locale === 'zh' ? '工作经历' : 'Professional Experience'}</h2>
          <Card className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">{locale === 'zh' ? '风破游戏，上海' : 'Breaker Games, Shanghai'}</CardTitle>
              <Badge variant="secondary">{locale === 'zh' ? '2023年10月 – 2024年4月' : 'Oct 2023 – Apr 2024'}</Badge>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">{locale === 'zh' ? 'UE5技术设计师' : 'UE5 Technical Designer'}</h3>
              <ul className="list-disc list-inside space-y-2">
                {locale === 'zh' ? (
                  <>
                    <li>使用蓝图设计和实现《Project Zero 2: Apocalypse Party》的DLC内容，包括武器和角色天赋。该DLC使Steam上的玩家留存率提高了24%，并获得了大多数好评。</li>
                    <li>与外部翻译团队紧密合作，领导项目的英语和韩语本地化工作。</li>
                  </>
                ) : (
                  <>
                    <li>Designed and Implemented DLC content for Project Zero 2: Apocalypse Party using Blueprints, including weapons and character talents. The DLC increased player retention by 24% on Steam and received mostly positive reviews.</li>
                    <li>Collaborated closely with external translation team and led the localization of the project for English and Korean.</li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">{locale === 'zh' ? 'Treelab，上海' : 'Treelab, Shanghai'}</CardTitle>
              <Badge variant="secondary">{locale === 'zh' ? '2022年6月 – 2023年4月' : 'Jun 2022 – Apr 2023'}</Badge>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">{locale === 'zh' ? 'Golang后端工程师' : 'Golang Back-end Engineer'}</h3>
              <ul className="list-disc list-inside space-y-2">
                {locale === 'zh' ? (
                  <>
                    <li>使用Temporal + RabbitMQ架构开发工作流执行服务，将特定业务场景的可靠性提高了50%以上。</li>
                    <li>维护Docker微服务架构下的基础设施功能，包括日志记录、国际化(I18n)和数据同步，确保基础设施性能稳定。</li>
                    <li>构建开发环境的CI/CD管道，用于自动化测试和部署，显著加快了项目部署速度。</li>
                  </>
                ) : (
                  <>
                    <li>Developed the workflow execution service using a Temporal + RabbitMQ architecture, improving reliability for specific business scenarios by over 50%.</li>
                    <li>Maintained infrastructure functions under a Docker microservice architecture, including logging, I18n (Internationalization) and data synchronization, ensuring stable infrastructure performance.</li>
                    <li>Built CI/CD pipelines for automated testing and deployment in Development environment, significantly accelerating project deployment speed.</li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">{locale === 'zh' ? '莉莉丝游戏，上海' : 'Lilith Games, Shanghai'}</CardTitle>
              <Badge variant="secondary">{locale === 'zh' ? '2021年6月 – 2022年6月' : 'Jun 2021 – Jun 2022'}</Badge>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">{locale === 'zh' ? '技术设计师' : 'Technical Designer'}</h3>
              <ul className="list-disc list-inside space-y-2">
                {locale === 'zh' ? (
                  <>
                    <li>与跨职能团队合作，负责Avatar游戏引擎中物理、地形和匹配系统的验收测试。</li>
                    <li>开发插件工具，为游戏设计和美术团队提供多功能技术解决方案，显著提高了生产流程效率。</li>
                    <li>为Project Party设计和实现了多项游戏玩法功能，包括收集机制和背包系统，为玩家提供更具吸引力的游戏体验。</li>
                    <li>重构了过场动画编辑器，并为叙事驱动的游戏框架（Revolver Editor）设计了任务系统，增强了叙事机制和Avatar游戏引擎的可用性。</li>
                  </>
                ) : (
                  <>
                    <li>Collaborated with cross-functional teams and oversaw acceptance testing for physics, terrain, and matchmaking systems in the Avatar game engine.</li>
                    <li>Developed plugin tools that provided versatile technical solutions for the game design and art teams, significantly improving the production pipeline efficiency.</li>
                    <li>Designed and implemented multiple gameplay features for Project Party, including collecting mechanics and inventory systems, contributing to a more engaging player experience.</li>
                    <li>Reconstructed the cutscene editor and designed the quest system for a narrative-driven game framework (Revolver Editor), enhancing the storytelling mechanics and the usability of the Avatar game engine.</li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{locale === 'zh' ? '项目经历' : 'Projects'}</h2>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-2xl">Light CatRun</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://www.taptap.cn/app/727882" target="_blank" rel="noopener noreferrer">
                    {locale === 'zh' ? '在TapTap查看' : 'View on TapTap'}
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://oguri-ridge.itch.io/light-catrun" target="_blank" rel="noopener noreferrer">
                    {locale === 'zh' ? '在Itch.io查看' : 'View on Itch.io'}
                  </Link>
                </Button>
              </div>
              <p className="mb-2">
                {locale === 'zh' 
                  ? '使用Unity为2024年TapTap聚光灯游戏开发大赛开发的2D休闲解谜游戏。获得"最佳游戏"、"最佳主题与叙事"和"最佳视觉与音效"的提名，并获得"最佳视觉与音效"奖。' 
                  : 'A 2D casual puzzle game developed for the 2024 TapTap Spotlight GameJam using Unity. Nominated for \'Best Game\', \'Best Theme & Narrative\', and \'Best Visual & Audio\', and awarded \'Best Visual & Audio\'.'
                }
              </p>
              <ul className="list-disc list-inside space-y-2">
                {locale === 'zh' ? (
                  <>
                    <li>开发交互式物体的功能，包括灯柱、平台和角色生成点。</li>
                    <li>使用动画状态机实现2D角色动画控制器。</li>
                    <li>实现后期处理效果。</li>
                    <li>实现开始界面、暂停菜单和HUD的UI功能。</li>
                  </>
                ) : (
                  <>
                    <li>Developed functionalities for interactive objects, including light poles, platforms, and character spawn points.</li>
                    <li>Implemented 2D character animation controller using an animation state machine.</li>
                    <li>Implemented post-processing effects.</li>
                    <li>Implemented UI features for the start screen, pause menu, and HUD.</li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-2xl">Fantasy RPG Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/deep-river/mmorpg-demo-template" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Github
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://www.bilibili.com/video/BV1aV4y1673Y" target="_blank" rel="noopener noreferrer">
                    {locale === 'zh' ? '演示视频' : 'Demo Video'}
                  </Link>
                </Button>
              </div>
              <p className="mb-2">
                {locale === 'zh'
                  ? '展示我在设计和实现复杂游戏系统方面的专业知识的多人RPG演示。'
                  : 'A multiplayer RPG demo showcasing my expertise in designing and implementing complex gameplay systems.'
                }
              </p>
              <ul className="list-disc list-inside space-y-2">
                {locale === 'zh' ? (
                  <>
                    <li>网络：使用Protobuf实现C#网络消息框架，用于角色移动的实时、事件驱动的状态同步，确保流畅可靠的多人交互。</li>
                    <li>游戏系统：开发核心游戏系统，包括物品栏、商店、好友列表、组队和多频道聊天，丰富多人游戏体验。</li>
                    <li>用户界面：使用UGUI构建直观的UI框架，用于管理菜单、物品显示和物品栏交互，提升整体用户体验和界面响应性。</li>
                  </>
                ) : (
                  <>
                    <li>Networking: Implemented a C# network messaging framework using Protobuf for real-time, event-driven state synchronization of character movement, ensuring smooth and reliable multiplayer interactions.</li>
                    <li>Game Systems: Developed core gameplay systems, including inventory, shop, friend list, team-up, and multi-channel chat to enrich multiplayer gameplay experience.</li>
                    <li>User Interface: Built an intuitive UI framework with UGUI for managing menus, item displays, and inventory interactions, improving the overall user experience and interface responsiveness.</li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Tic-Tac-Toe</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" asChild className="mb-2">
                <Link href="https://github.com/deep-river/TicTacToePlayableDemo" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  Github
                </Link>
              </Button>
              <p>
                {locale === 'zh'
                  ? '实现了具有不同难度AI对手的井字棋游戏，利用minimax等算法实现无法击败的难度级别。'
                  : 'Implemented the Tic-Tac-Toe game with AI opponents of varying difficulty, utilizing algorithms like minimax for unbeatable difficulty level.'
                }
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href={`/${locale}`}>{locale === 'zh' ? '返回作品集' : 'Back to Portfolio'}</Link>
          </Button>
        </div>
      </main>
    </div>
  );
} 