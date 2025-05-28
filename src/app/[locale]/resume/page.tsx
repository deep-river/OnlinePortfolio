'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, MailIcon, PhoneIcon, DownloadIcon } from "lucide-react"
import { useTranslations, useLocale } from 'next-intl'

export default function Resume() {
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
            {locale === 'zh' ? '+86 17600977500' : '+44-7777 939 789'}
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
              <p className="text-sm text-muted-foreground">{locale === 'zh' ? '预计毕业日期: 2025年9月' : 'Expected: Sep 2025'}</p>
              <p className="text-sm">{locale === 'zh' ? '英国，纽卡斯尔' : 'Newcastle upon Tyne, U.K.'}</p>
              {locale === 'en' && (
                <div className="mt-4">
                  <p className="font-semibold mb-2">Relevant Coursework:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Advanced Graphics for Games:</strong> Explored OpenGL based real time scene rendering with a focus on the rendering pipeline, mesh and texture, shader programming, and real time lighting models.</li>
                    <li><strong>Advanced Game Technologies:</strong> Investigated core game engine architecture by implementing robust collision detection, physics constraints, spatial acceleration via quadtree/octree, finite state machine, NavMesh driven pathfinding, and networking.</li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">{locale === 'zh' ? '纽约州立大学布法罗分校' : 'University at Buffalo, SUNY'}</CardTitle>
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
              <CardTitle className="text-2xl font-bold">{locale === 'zh' ? '上海破荒者游戏' : 'Breaker Games, Shanghai'}</CardTitle>
              <Badge variant="secondary">{locale === 'zh' ? '2023年10月 – 2024年4月' : 'Oct 2023 – Apr 2024'}</Badge>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">{locale === 'zh' ? 'UE5技术策划' : 'UE5 Technical Designer'}</h3>
              <ul className="list-disc list-inside space-y-2">
                {locale === 'zh' ? (
                  <>
                    <li>负责肉鸽游戏《清零计划2: 天启派对》DLC内容的开发，包括武器、角色天赋的设计与数值平衡，并使用UE5蓝图与AbleAbilitySystem 插件实现相关功能与新的游戏机制；DLC的发布提升了用户留存，并在Steam上收获多数好评。 </li>
                    <li>与外部翻译团队紧密合作，负责项目中多语言本地化技术方案的实施与内容维护。</li>
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
              <CardTitle className="text-2xl font-bold">{locale === 'zh' ? '上海Treelab' : 'Treelab, Shanghai'}</CardTitle>
              <Badge variant="secondary">{locale === 'zh' ? '2022年6月 – 2023年6月' : 'Jun 2022 – Jun 2023'}</Badge>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">{locale === 'zh' ? 'Golang后端工程师' : 'Golang Back-end Engineer'}</h3>
              <ul className="list-disc list-inside space-y-2">
                {locale === 'zh' ? (
                  <>
                    <li>负责供应链管理系统SCM-SaaS低代码平台的后端业务功能开发。</li>
                    <li>针对业务场景搭建并完善Temporal + RabbitMQ架构的节点式业务工作流服务。</li>
                    <li>负责I18n(国际化)、跨服务数据同步等Docker微服务架构下的基础设施功能维护与开发。</li>
                    <li>负责微服务项目的部署，搭建并维护Dev环境下的CI/CD管线，实现自动化测试与部署。</li>
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
              <CardTitle className="text-2xl font-bold">{locale === 'zh' ? '上海莉莉丝游戏' : 'Lilith Games, Shanghai'}</CardTitle>
              <Badge variant="secondary">{locale === 'zh' ? '2021年6月 – 2022年6月' : 'Jun 2021 – Jun 2022'}</Badge>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">{locale === 'zh' ? '技术策划' : 'Technical Designer'}</h3>
              <ul className="list-disc list-inside space-y-2">
                {locale === 'zh' ? (
                  <>
                    <li>与跨职能团队合作，负责物理、地形、组队匹配等自研引擎功能验收，及转表工具等引擎插件工具的开发。</li>
                    <li>负责party game中游戏内容开发及家园系统中图鉴、背包等功能模块的开发与优化。</li>
                    <li>参与叙事性游戏框架开发，负责过场动画编辑器重构与优化，任务系统设计与开发等。</li>
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
                  ? 'Unity 2D 休闲动作游戏，2024年TapTap聚光灯Gamejam获奖作品。作为游戏程序参与项目开发，负责原型验证开发、场景交互对象开发与UI功能的实现。作品入围多个奖项提名，并最终获得"最佳视听"、"特别人气"奖项。' 
                  : 'A 2D casual puzzle game developed for the 2024 TapTap Spotlight GameJam using Unity. Nominated for \'Best Game\', \'Best Theme & Narrative\', and \'Best Visual & Audio\', and awarded \'Best Visual & Audio\'.'
                }
              </p>
              <ul className="list-disc list-inside space-y-2">
                {locale === 'zh' ? (
                  <>
                    <li>负责前期原型开发，实现核心功能快速迭代，验证游戏机制。</li>
                    <li>开发游戏核心玩法系统，包括猫咪AI行为、环境交互、怪物刷新、后处理特效管理等。</li>
                    <li>开发周边功能配置工具，辅助策划快速配置游戏内容。</li>
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
                  ? 'MMORPG游戏Demo。利用Unity及C#后端实现的网络功能演示项目。开发了基于事件的消息收发处理，角色移动状态同步，UGUI框架，背包/商店系统，任务系统，组队系统，多频道的聊天系统等功能。 '
                  : 'A multiplayer RPG demo showcasing my expertise in designing and implementing complex gameplay systems.'
                }
              </p>
              <ul className="list-disc list-inside space-y-2">
                {locale === 'zh' ? (
                  <>
                    <li>网络通信：开发可靠高效的异步网络通信框架，利用Protobuf协议进行前后端通信，实现事件驱动的状态同步。</li>
                    <li>游戏系统：开发核心游戏交互系统，包括背包、商店、好友列表、组队和多频道聊天系统。</li>
                    <li>用户界面：开发组件化的UI框架，使用栈和对象池管理UI窗口实例，实现了高效的UI组件复用与层级管理。</li>
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
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{locale === 'zh' ? '技能' : 'Skills'}</h2>
          <Card>
            <CardContent className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-xl mb-2">{locale === 'zh' ? '编程语言' : 'Programming Languages'}</h3>
                  <ul className="list-disc list-inside">
                    <li>C++</li>
                    <li>Python</li>
                    <li>Go</li>
                    <li>C#</li>
                    <li>Javascript</li>
                    <li>Lua</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Unity Engine</h3>
                  <p className="font-bold italic mb-1">{locale === 'zh' ? '熟练掌握:' : 'Proficient in:'}</p>
                  <ul className="list-disc list-inside mb-2">
                    <li>UGUI</li>
                    <li>Unity plugin development</li>
                    <li>Animator</li>
                    <li>Post-processing</li>
                  </ul>
                  <p className="font-bold italic mb-1">{locale === 'zh' ? '经验丰富:' : 'Experienced with:'}</p>
                  <ul className="list-disc list-inside">
                    <li>Rigging</li>
                    <li>Custom shader</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{locale === 'zh' ? '版本控制工具' : 'Version Control Tools'}</h3>
                  <ul className="list-disc list-inside">
                    <li>Git</li>
                    <li>Perforce(P4V)</li>
                    <li>SVN</li>
                    <li>Unity Version Control</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Unreal 5 Engine</h3>
                  <p className="font-bold italic mb-1">{locale === 'zh' ? '熟练掌握:' : 'Proficient in:'}</p>
                  <ul className="list-disc list-inside mb-2">
                    <li>Blueprint scripting</li>
                    <li>Prototyping</li>
                  </ul>
                  <p className="font-bold italic mb-1">{locale === 'zh' ? '经验丰富:' : 'Experienced with:'}</p>
                  <ul className="list-disc list-inside">
                    <li>Able Ability System</li>
                    <li>Behavior tree</li>
                  </ul>
                </div>
              </div>
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