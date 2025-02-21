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
    title: "Phantom Flash",
    description: "Embark on a unique horror puzzle adventure. In this game, you will follow the clues in your investigation note and use your camera to explore the mist-covered house. Encounter eerie events and face terrifying spirits in your quest to uncover the truth. Can you survive the mystery and defeat the evil forces lurking within?\n\nA submission to the NUGDS Winter Jam 2025, hosted by the Newcastle University Game Dev Society. Ranked 1st among 8 entries.",
    itchioLink: "https://oguri-ridge.itch.io/phantomflash",
    videoSrc: "https://www.youtube.com/embed/MMQU5rFLW-M",
    images: [
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-Entrance.jpg",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-DarkHallway.jpg",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-Hallway.jpg",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-Kitchen.jpg",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-RankPage.jpg"
    ],
    genre: "3D, Indie, Horror, Puzzle",
    engine: "Unity",
    platform: "PC",
    teamsize: 5,
    roles: [
      {
        title: "Gameplay Programmer",
        responsibilities: [
          "Implemented multiple puzzle mechanics.",
          "Developed UI system including Start Screen, Pause Menu, and HUD interfaces with UGUI."
        ]
      },
      {
        title: "System Designer",
        responsibilities: [
          "Designed core gameplay loop and interactive experience balancing exploration/puzzle pacing.",
          "Crafted all in-game puzzles with progression balancing and contextual feedback.",
          "Designed UI components for pause menu and HUD."
        ]
      }
    ],
    gameDesign: {
      genre: "3D first-person exploration puzzle game with horror/thriller elements.",
      platforms: "PC/Web",
      controlScheme: [
        "WASD: Character movement",
        "Mouse: Camera control",
        "E Key: Interact with environmental props",
        "F Key: Toggle camera mode",
        "Left Click (Camera Mode): Capture photo",
        "Left Click (Combat Mode): Fire weapon"
      ],
      coreGameplayLoop: [
        "Player enters game scene",
        "Environmental exploration",
        "Discover and solve puzzles",
        "Collect critical items",
        "Use camera to detect hidden entities",
        "Engage in evasion/combat",
        "Achieve level objectives"
      ],
      levelDesign: {
        environment: "Confined indoor/nighttime settings (e.g., derelict mansions, isolated structures) with Western architectural motifs.",
        pacing: "Linear exploration paths guided by dynamic lighting, ambient audio cues, and object placement (e.g., flickering corridor lights directing attention).",
        interactivity: "Contextual UI prompts (e.g., \"Requires Key\" near locked doors) and strategically placed monster triggers in open areas.",
        reference: "Resident Evil 7 atmosphere."
      },
      narrativeAndProgression: {
        synopsis: "Players assume the role of a paranormal investigator using a spectral camera to reconstruct occult events, ultimately summoning and defeating a demonic entity.",
        keyProgression: [
          "Phase 1: Collect clues → Solve puzzles → Reconstruct ritual site.",
          "Phase 2: Utilize camera to expose and combat manifestations."
        ]
      },
      systemArchitecture: [
        {
          title: "5.1 Base Character Controller",
          description: "First-person controller with smooth movement/camera rotation."
        },
        {
          title: "5.2 Interactable Objects",
          items: [
            "Boolean Toggle Switches: Binary state changes (e.g., light switches, drawers).",
            "Single-Use Items: Disabled post-interaction.",
            "Multi-State Objects: Cycle through predefined states (e.g., ritual artifacts).",
            "Lore Fragments: Non-functional items delivering narrative via UI text."
          ]
        },
        {
          title: "5.3 Collectibles",
          description: "Passive items tracked via UI (e.g., \"0/3 Keys Collected\"). Full collection unlocks progression."
        },
        {
          title: "5.4 Entity System (Ghosts/Monsters)",
          items: [
            "Spawn Logic: Triggered post-ritual completion; hinted via pulsating aura/outlines.",
            "Combat Behavior:",
            "Visibility: Entity outlines shift color based on health (Green → Yellow → Red).",
            "Defeat: Three shots required; audio/visual feedback for positional tracking."
          ]
        },
        {
          title: "5.5 Camera Mechanics",
          items: [
            "Mode: Immobilizes player; viewfinder UI simulates real-time exposure.",
            "Function: Flashlight illuminates targets; detects spectral entities (WIP: Battery system)."
          ]
        },
        {
          title: "5.6 Combat System",
          items: [
            "Weapon Unlock: Assemble firearm parts scattered pre-boss arena.",
            "Combat Design: Burst-fire mechanics with cooldown constraints."
          ]
        },
        {
          title: "5.7 Quest System",
          items: [
            "Investigation Journal: Diegetic UI displaying objectives, photos, and lore.",
            "Task Types:",
            "1. Photo-Matching: Recreate reference images to spawn critical items.",
            "2. Item-Chain Puzzles: Sequential interactions (e.g., fuse → breaker box).",
            "3. Multi-State Challenges: Adjust objects to predefined configurations.",
            "Progress Manager: Tracks collectibles/puzzle states; updates UI dynamically."
          ]
        },
        {
          title: "5.8 UI Framework",
          items: [
            "Main Menu: Start/Load/Settings/Quit.",
            "Pause Menu: Resume/Restart/Quit.",
            "HUD: Real-time tracking (e.g., \"Entities Found: 0/3\").",
            "Investigation Journal: Toggleable via hotkey; scrollable text/image panels.",
            "Contextual Prompts: \"Press F\" indicators near interactables."
          ]
        }
      ],
      artAssetRequirements: {
        core: [
          "Modular indoor environments (walls, furniture).",
          "Entity models (specters, mutants)."
        ],
        advanced: "Dynamic lighting rigs, VFX for spectral detection."
      },
      playerExperienceDesign: {
        emotionalArc: [
          "Early Game: Gradual puzzle escalation to sustain engagement.",
          "Mid-Game: Timed challenges to induce tension.",
          "Finale: Low-skill-ceiling boss fights for cathartic payoff."
        ],
        flowTheoryIntegration: [
          "Per-level cycles of relaxation → tension → accomplishment.",
          "At least one stress → climax → resolution sequence per session."
        ],
        reference: "Flow Theory in Game Design - https://gameinstitute.qq.com/knowledge/100023"
      }
    }
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

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Game Design Highlights</h2>
          <Card>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">System Design Document For Horror-Themed Exploration Puzzle Game</h3>
                <p><strong>Genre:</strong> {project.gameDesign.genre}</p>
                <p><strong>Platforms:</strong> {project.gameDesign.platforms}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">1. Control Scheme</h3>
                <ul className="list-disc list-inside">
                  {project.gameDesign.controlScheme.map((control, index) => (
                    <li key={index}>{control}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2. Core Gameplay Loop</h3>
                <ol className="list-decimal list-inside">
                  {project.gameDesign.coreGameplayLoop.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3. Level Design Framework</h3>
                <p><strong>Environment:</strong> {project.gameDesign.levelDesign.environment}</p>
                <p><strong>Pacing:</strong> {project.gameDesign.levelDesign.pacing}</p>
                <p><strong>Interactivity:</strong> {project.gameDesign.levelDesign.interactivity}</p>
                <p><strong>Reference:</strong> {project.gameDesign.levelDesign.reference}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">4. Narrative & Progression</h3>
                <p><strong>Synopsis:</strong> {project.gameDesign.narrativeAndProgression.synopsis}</p>
                <p><strong>Key Progression:</strong></p>
                <ul className="list-disc list-inside">
                  {project.gameDesign.narrativeAndProgression.keyProgression.map((phase, index) => (
                    <li key={index}>{phase}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">5. System Architecture</h3>
                {project.gameDesign.systemArchitecture.map((system, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-lg font-medium">{system.title}</h4>
                    {system.description && <p>{system.description}</p>}
                    {system.items && (
                      <ul className="list-disc list-inside">
                        {system.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">6. Art Asset Requirements</h3>
                <p><strong>Core:</strong></p>
                <ul className="list-disc list-inside">
                  {project.gameDesign.artAssetRequirements.core.map((asset, index) => (
                    <li key={index}>{asset}</li>
                  ))}
                </ul>
                <p><strong>Advanced:</strong> {project.gameDesign.artAssetRequirements.advanced}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">7. Player Experience Design</h3>
                <p><strong>Emotional Arc:</strong></p>
                <ul className="list-disc list-inside">
                  {project.gameDesign.playerExperienceDesign.emotionalArc.map((phase, index) => (
                    <li key={index}>{phase}</li>
                  ))}
                </ul>
                <p><strong>Flow Theory Integration:</strong></p>
                <ul className="list-disc list-inside">
                  {project.gameDesign.playerExperienceDesign.flowTheoryIntegration.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p><strong>Reference:</strong> {project.gameDesign.playerExperienceDesign.reference}</p>
              </div>
            </CardContent>
          </Card>
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