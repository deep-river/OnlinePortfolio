'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubIcon, X } from "lucide-react"

export default function ProjectDetail() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    document.title = "Bangyu Li | Game Developer/Designer Portfolio"
  }, [])

  const project = {
    title: "Fantasy RPG",
    description: "A multiplayer RPG demo showcasing my expertise in designing and implementing complex gameplay systems.",
    githubLink: "https://github.com/deep-river/mmorpg-demo-template",
    videoSrc: "https://player.bilibili.com/player.html?isOutside=true&aid=868888473&bvid=BV1aV4y1673Y&cid=1139805795&p=1",
    images: [
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-01.png",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-03.png",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-05.png",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-06.png",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-08.png",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-09.png",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-10.png"
    ],
    genre: "MMORPG",
    engine: "Unity Engine",
    platform: "PC",
    teamsize: "1",
    features: [
      "Networking: Implemented a C# network messaging framework using Protobuf for real-time, event-driven state synchronization of character movement, ensuring smooth and reliable multiplayer interactions.",
      "Game Systems: Developed core gameplay systems, including inventory, shop, friend list, team-up, and multi-channel chat to enrich multiplayer gameplay experience.",
      "User Interface: Built an intuitive UI framework with UGUI for managing menus, item displays, and inventory interactions, improving the overall user experience and interface responsiveness."
    ],
    mainModules: {
      common: [
        "Packet processing & message dispatching module"
      ],
      server: [
        "Network module",
        "Database management service",
        "User management service",
        "Scene management service",
        "Item management service",
        "Quest management service",
        "Friend management service",
        "Team management service",
        "Chat management service"
      ],
      client: [
        "Protocol communication module",
        "DataManager - Local data loading module",
        "UserService - User management module (handling login, registration, etc.)",
        "SceneManager & MapService - Scene management module (handling character entry, exit, etc.)",
        "BagManager - Inventory management module",
        "ShopManager - Shop management module",
        "ItemService & ItemManager - Item system",
        "NpcManager - NPC management module",
        "QuestService & QuestManager - Quest system",
        "FriendService & FriendManager - Friend system",
        "TeamService & TeamManager - Team system",
        "ChatService & ChatManager - Chat system",
        "UIManager, UIWindow, UIMessageBox, UIInputBox - UGUI framework and extended components"
      ]
    }
  }

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
                  <CardTitle>Project Overview</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p><span className="font-semibold">GENRE:</span> {project.genre}</p>
                    <p><span className="font-semibold">Engine:</span> {project.engine}</p>
                    <p><span className="font-semibold">Platform:</span> {project.platform}</p>
                    <p><span className="font-semibold">Team size:</span> {project.teamsize}</p>
                  </div>
                  <Button asChild variant="outline">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      Github
                    </Link>
                  </Button>
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
                  src={img} 
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
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Main Modules</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Common</h3>
              <ul className="list-disc list-inside">
                {project.mainModules.common.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Server</h3>
              <ul className="list-disc list-inside">
                {project.mainModules.server.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Client</h3>
              <ul className="list-disc list-inside">
                {project.mainModules.client.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
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
              src={selectedImage}
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