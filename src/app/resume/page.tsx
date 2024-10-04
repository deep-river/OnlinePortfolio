'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, MailIcon, PhoneIcon } from "lucide-react"

export default function Resume() {
  useEffect(() => {
    document.title = "Bangyu Li | Game Developer/Designer Portfolio"
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/" className="hover:underline font-semibold text-lg">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:underline font-semibold text-lg">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-8 md:px-24 lg:px-32 xl:px-48 py-8">
        <h1 className="text-5xl font-bold mb-4 text-center">Bangyu Li</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
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

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Newcastle University</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">MSc Computer Game Engineering</p>
              <p className="text-sm text-muted-foreground">Expected: Sep 2025</p>
              <p className="text-sm">Newcastle upon Tyne, U.K.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">University at Buffalo, SUNY</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">BS in Computer Science</p>
              <p className="text-sm text-muted-foreground">Jan 2018 – Aug 2021</p>
              <p className="text-sm">Buffalo, NY, U.S.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <Card className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">Breaker Games, Shanghai</CardTitle>
              <Badge variant="secondary">Oct 2023 – Apr 2024</Badge>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">UE5 Technical Designer</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Designed and Implemented DLC content for Project Zero 2: Apocalypse Party using Blueprints, including weapons and character talents. The DLC increased player retention by 24% on Steam and received mostly positive reviews.</li>
                <li>Collaborated closely with external translation team and led the localization of the project for English and Korean.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">Treelab, Shanghai</CardTitle>
              <Badge variant="secondary">Jun 2022 – Apr 2023</Badge>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">Golang Back-end Engineer</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Developed the workflow execution service using a Temporal + RabbitMQ architecture, improving reliability for specific business scenarios by over 50%.</li>
                <li>Maintained infrastructure functions under a Docker microservice architecture, including logging, I18n (Internationalization) and data synchronization, ensuring stable infrastructure performance.</li>
                <li>Built CI/CD pipelines for automated testing and deployment in Development environment, significantly accelerating project deployment speed.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">Lilith Games, Shanghai</CardTitle>
              <Badge variant="secondary">Jun 2021 – Jun 2022</Badge>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">Technical Designer</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Collaborated with cross-functional teams and oversaw acceptance testing for physics, terrain, and matchmaking systems in the Avatar game engine.</li>
                <li>Developed plugin tools that provided versatile technical solutions for the game design and art teams, significantly improving the production pipeline efficiency.</li>
                <li>Designed and implemented multiple gameplay features for Project Party, including collecting mechanics and inventory systems, contributing to a more engaging player experience.</li>
                <li>Reconstructed the cutscene editor and designed the quest system for a narrative-driven game framework (Revolver Editor), enhancing the storytelling mechanics and the usability of the Avatar game engine.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
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
                    Demo Video
                  </Link>
                </Button>
              </div>
              <p className="mb-2">A multiplayer RPG demo showcasing my expertise in designing and implementing complex gameplay systems.</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Networking: Implemented a C# network messaging framework using Protobuf for real-time, event-driven state synchronization of character movement, ensuring smooth and reliable multiplayer interactions.</li>
                <li>Game Systems: Developed core gameplay systems, including inventory, shop, friend list, team-up, and multi-channel chat to enrich multiplayer gameplay experience.</li>
                <li>User Interface: Built an intuitive UI framework with UGUI for managing menus, item displays, and inventory interactions, improving the overall user experience and interface responsiveness.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-4">
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
              <p>Implemented the Tic-Tac-Toe game with AI opponents of varying difficulty, utilizing algorithms like minimax for unbeatable difficulty level.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Grappling Hook Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" asChild className="mb-2">
                <Link href="https://github.com/deep-river/UnityGrapplingDemoLite" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  Github
                </Link>
              </Button>
              <p>Recreated the grappling hook mechanics from Sekiro: Shadows Die Twice using Unity. Implemented dynamic rope physics and hook detection to create realistic grappling behavior.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <Card>
            <CardContent className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-xl mb-2">Programming Languages</h3>
                  <ul className="list-disc list-inside">
                    <li>Python</li>
                    <li>Go</li>
                    <li>C#</li>
                    <li>Javascript</li>
                    <li>Lua</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Unity Engine</h3>
                  <p className="font-medium">Proficient in:</p>
                  <ul className="list-disc list-inside mb-2">
                    <li>UGUI</li>
                    <li>Unity plugins</li>
                    <li>Prototyping</li>
                  </ul>
                  <p className="font-medium">Experienced with:</p>
                  <ul className="list-disc list-inside">
                    <li>Animator</li>
                    <li>Rigging</li>
                    <li>Shader</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Version Control Tools</h3>
                  <ul className="list-disc list-inside">
                    <li>Git</li>
                    <li>Perforce(P4V)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Unreal 5 Engine</h3>
                  <p className="font-medium">Proficient in:</p>
                  <ul className="list-disc list-inside mb-2">
                    <li>Blueprint scripting</li>
                    <li>Prototyping</li>
                  </ul>
                  <p className="font-medium">Experienced with:</p>
                  <ul className="list-disc list-inside">
                    <li>Able Ability System</li>
                    <li>Behavior tree</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="text-center">
          <Button asChild>
            <Link href="/">Back to Portfolio</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}