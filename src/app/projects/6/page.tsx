'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, X } from 'lucide-react'

export default function ProjectDetail() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    document.title = "Bangyu Li | Game Developer/Designer Portfolio"
  }, [])

  const project = {
    title: "Light CatRun",
    description: "Guide your team of adorable cats through a maze of danger! In this laser-guided escape adventure, you'll help the cats dodge patrolling enemies, hide, and even fight back. Use unique items, explore new areas, and strategize for the purr-fect getaway!\n\nAn entry for the 2024 TapTap Spotlight GameJam, nominated for 'Best Game', 'Best Theme & Narrative', and 'Best Visual & Audio', and proudly awarded 'Best Visual & Audio'.",
    taptapLink: "https://www.taptap.cn/app/727882",
    itchioLink: "https://oguri-ridge.itch.io/light-catrun",
    videoSrc: "https://www.youtube.com/embed/Di3FPUJvcQ4",
    images: [
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-MainMenu.jpg",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-PauseMenu.jpg",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-GameScene.jpg",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-LightPole.jpg",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-Monster.jpg"
    ],
    genre: "2D, Indie, Casual, Puzzle",
    engine: "Unity",
    platform: "PC",
    teamsize: 5,
    roles: [
      {
        title: "Gameplay Programmer",
        responsibilities: [
          "Developed functionalities for interactive objects, including light poles, platforms, and character spawn points.",
          "Implemented 2D character animation controller using an animation state machine.",
          "Implemented post-processing effects."
        ]
      },
      {
        title: "UI Programmer",
        responsibilities: [
          "Implemented UI features for the start screen, pause menu, and HUD."
        ]
      }
    ]
  }

  const formatDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

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
        <h1 className="text-4xl font-bold mb-8 text-center">{project.title}</h1>
        
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="max-w-screen-md mx-auto">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={project.videoSrc} 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Card>
                <CardHeader>
                  <CardTitle>About the game</CardTitle>
                  <CardDescription className="whitespace-pre-wrap">
                    {formatDescription(project.description)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p><span className="font-semibold">GENRE:</span> {project.genre}</p>
                    <p><span className="font-semibold">Engine:</span> {project.engine}</p>
                    <p><span className="font-semibold">Platform:</span> {project.platform}</p>
                    <p><span className="font-semibold">Team size:</span> {project.teamsize}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline">
                      <Link href={project.taptapLink} target="_blank" rel="noopener noreferrer">
                        <Gamepad2 className="mr-2 h-4 w-4" />
                        View on TapTap
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={project.itchioLink} target="_blank" rel="noopener noreferrer">
                        <Gamepad2 className="mr-2 h-4 w-4" />
                        View on Itch.io
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, index) => (
              <div key={index} className="relative aspect-w-16 aspect-h-9">
                <Image 
                  src={img || "/placeholder.svg"} 
                  alt={`Project screenshot ${index + 1}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg object-cover cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Role(s) and Responsibilities</h2>
          {project.roles.map((role, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold underline mb-2">{role.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {role.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/">Back to Portfolio</Link>
          </Button>
        </div>
      </main>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-full max-h-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Full resolution image"
              width={1920}
              height={1080}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}