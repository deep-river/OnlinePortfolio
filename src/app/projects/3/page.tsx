'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubIcon } from "lucide-react"

export default function ProjectDetail() {

  const project = {
    title: "MMORPG Demo Template",
    description: "A multiplayer RPG demo showcasing my expertise in designing and implementing complex gameplay systems.",
    steamLink: "https://store.steampowered.com/app/2351560/Apocalypse_Party/",
    videoSrc: "https://www.youtube.com/embed/5L6_39IG5XI",
    images: [
      "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png",
      "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo03.png"
    ],
    features: [
      "Networking: Implemented a C# network messaging framework using Protobuf for real-time, event-driven state synchronization of character movement, ensuring smooth and reliable multiplayer interactions.",
      "Game Systems: Developed core gameplay systems, including inventory, shop, friend list, team-up, and multi-channel chat to enrich multiplayer gameplay experience.",
      "User Interface: Built an intuitive UI framework with UGUI for managing menus, item displays, and inventory interactions, improving the overall user experience and interface responsiveness."
    ]
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

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">{project.title}</h1>
        
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <Link href={project.steamLink} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  View on Github
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Demo Video</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src={project.videoSrc} 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
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
                  className="rounded-lg object-cover"
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

        <div className="text-center">
          <Button asChild>
            <Link href="/">Back to Portfolio</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}