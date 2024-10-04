'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkedinIcon, MailIcon, GithubIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GameDevPortfolio() {
  useEffect(() => {
    document.title = "Bangyu Li | Game Developer/Designer Portfolio"
  }, [])

  const gameProjects = [
    {
      id: 1,
      title: "Apocalypse Party on Steam",
      description: "Apocalypse Party is a 3D top-down action Roguelike game. In this game, you will embark on a new mission to traverse through the Middle Ages and gradually master abilities, and arm yourself to become the strongest survivor through numerous choices.",
      role: "UE5 Technical Designer",
      technologies: ["Unreal", "Blueprint", "Able Ability System"],
      image: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/apocalypse-party-pc-game-steam-cover.jpg"
    },
    {
      id: 2,
      title: "Project Party by Lilith Games",
      description: "Project Party(a.k.a. Boom! Party) is the new life simulation just announced by Lilith Games promising a mix of familiar life sim and in-game socialising, it'll also come with a packaged game editor. You'll be able to enjoy experiences ranging from shooter to horror and even more, Lilith promises.",
      role: "Technical Designer",
      technologies: ["Python", "Javascript", "Lua", "Network Programming"],
      image: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/project-party-cover.jpg"
    },
    {
      id: 3,
      title: "Fantasy RPG Demo",
      description: "A multiplayer RPG demo showcasing complex gameplay systems, including networking, inventory management, and user interface design.",
      role: "Game Developer & Designer",
      technologies: ["Unity", "C#", "UGUI", "Protobuf"],
      image: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png"
    },
    {
      id: 4,
      title: "Grappling Hook Demo",
      description: "A recreation of the grappling hook mechanics from Sekiro: Shadows Die Twice, featuring dynamic rope physics and realistic hook detection.",
      role: "Technical Designer",
      technologies: ["Unity", "C#", "Physics Simulation"],
      image: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png"
    },
    {
      id: 5,
      title: "Tic-Tac-Toe AI",
      description: "An implementation of the classic Tic-Tac-Toe game with AI opponents of varying difficulty, utilizing algorithms like minimax for unbeatable gameplay.",
      role: "AI Programmer",
      technologies: ["Python", "Minimax Algorithm", "Game AI"],
      image: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png"
    },
  ]

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
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Bangyu Li</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl mb-6 text-left">
              Game developer and designer passionate about creating immersive experiences. With a strong background in both development and design, I strive to craft engaging and innovative games that push the boundaries of interactive entertainment.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button asChild variant="outline">
              <Link href="https://www.linkedin.com/in/bangyu-li/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="mailto:by.brad.li@gmail.com">
                <MailIcon className="mr-2 h-4 w-4" />
                Email
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://github.com/deep-river" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">Game Projects</h2>
          <div className="space-y-6">
            {gameProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <Image 
                      src={project.image} 
                      alt={`${project.title} thumbnail`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
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
                          More Details
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