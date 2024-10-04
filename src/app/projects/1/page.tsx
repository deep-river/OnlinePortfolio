'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, X } from "lucide-react"

export default function ProjectDetail() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    document.title = "Bangyu Li | Game Developer/Designer Portfolio"
  }, [])

  const project = {
    title: "Apocalypse Party",
    description: "Apocalypse Party is a 3D top-down action Roguelike game. In this game, you will embark on a new mission to traverse through the Middle Ages and gradually master abilities, and arm yourself to become the strongest survivor through numerous choices.",
    steamLink: "https://store.steampowered.com/app/2351560/Apocalypse_Party/",
    videoSrc: "https://www.youtube.com/embed/ALRJ2hy0kwo",
    images: [
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Apocalypse-party-screenshot-01.jpg",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Apocalypse-party-screenshot-02.jpg",
      "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Apocalypse-party-screenshot-03.jpg"
    ],
    genre: "Action, Casual, Indie, Strategy",
    engine: "Unreal 5",
    platform: "PC",
    teamsize: 10,
    roles: [
      {
        title: "Technical Designer",
        responsibilities: [
          "Designed new weapons and character talents for Chinese New Year DLC and The Dark Moon DLC.",
          "Designed and implemented new gameplay mechanics and systems using Blueprints in Unreal Engine.",
          "Collaborated closely with external translation team and led the localization for English and Korean versions."
        ]
      },
      {
        title: "UI/UX Designer",
        responsibilities: [
          "Designed and implemented user interfaces for menus, inventory, and in-game HUD.",
          "Created intuitive and responsive UI layouts to enhance player experience."
        ]
      }
    ],
    developmentProcess: {
      sections: [
        {
          title: "System Design Example: Precision Strike Combo System",
          content: [
            "In the development of Project Zero 2: Apocalypse Party, I was tasked with designing and implementing the Precision Strike Combo System, a key addition to the combat system aimed at enhancing player engagement through timing-based attacks. This section outlines the process I followed from conceptualization to final implementation and optimization."
          ]
        },
        {
          title: "1. Conceptualization",
          content:[
            "The Precision Strike Combo System was introduced to add depth to the game's combat mechanics, allowing players to execute complex attack chains based on timing and directional inputs."
          ],
          subsections: [
            {
              title: "Design Goals:",
              bullets: [
                "Provide players with a high-risk, but powerful combat mechanic to deal with large group of enemies.",
                "Enhance the overall player experience by introducing a skill-based combat system that integrates seamlessly with existing gameplay mechanics.",
                "Ensure the system is intuitive to use, even in fast-paced combat scenarios, while offering depth for advanced players."
              ]
            }
          ]
        },
        {
          title: "2. System Architecture and Design",
          content: [
            "The Precision Strike Combo System was built using the Able Ability System Plugin, a robust ability editor that facilitates various Tasks such as ability transition trigger, Play Animation, Apply Damage, and invoking Blueprint functions. The system is designed to bind specific combos to particular weapons or character talents, and is executed independently from normal attacks when the character possesses the required items. Each attack within the combo can use the normal attack's damage calculator, allowing buffs like damage amplification to stack, while applying an additional combo damage multiplier."
          ],
          subsections: [
            {
              title: "Core Mechanics:",
              bullets: [
                "Versatile Combo Transitions: The system supports diverse attack transitions based on player inputs. For instance, different directional inputs combined with precise attack timing will trigger different combo sequences, providing the player with a variety of attack options.",
                "Stamina System: Each combo attack consumes stamina, limiting how frequently the player can perform combos. Stamina regenerates only when the player is not actively attacking, adding a strategic element to when and how combos are used.",
                "Dynamic UI System: For player guidance, a dynamic UI indicator located at the bottom center of the screen signals the timing to execute a perfect combo strike. It will also display a corresponding animation if the player fails to do so, offering immediate feedback on the player's performance.",
                "Damage Scaling: The damage output for each combo is calculated based on the player's input timing. Successful combo chains result in increased damage, with each consecutive hit amplifying the total damage output through a combo damage multiplier."
              ]
            }
          ],
          images: [
            {
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/combo%20system%20transition.jpg",
              alt: "Precision Strike Combo System Diagram"
            }
          ]
        },
        {
          title: "3. Implementation",
          content:[
            "The combo system is initialized in Blueprints after the main game systems are fully loaded. Each combo sequence is configured in the Able Ability System. The initial combo attack is then bound to the Blueprint of a weapon or character talent.",
            "When the combo is triggered, the pre-configured Tasks are executed sequentially, including Play Animations, Play Sound Effects, Play Visual Effects, Execute Ability Transitions, and Invoke Blueprint events to play UI animations."
          ],
          subsections: [
            {
              title: "Implementation example of weapon - Jeetkunedo:",
              bullets: [
                "Provide players with a high-risk, but powerful combat mechanic to deal with large group of enemies.",
                "Enhance the overall player experience by introducing a skill-based combat system that integrates seamlessly with existing gameplay mechanics.",
                "Ensure the system is intuitive to use, even in fast-paced combat scenarios, while offering depth for advanced players."
              ]
            }
          ],
          images: [
            {
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Jeetkunedo-Able-Tasks-01.png",
              alt: "Implementation of tasks 01"
            },
            {
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Jeetkunedo-Able-Tasks-02.png",
              alt: "Implementation of tasks 02"
            },
            {
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Jeetkunedo-UI-Init-01.png",
              alt: "Implementation of dynamic UI 01"
            },
            {
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Jeetkunedo-UI-Init-02.png",
              alt: "Implementation of dynamic UI 02"
            }
          ]
        },
        {
          title: "4. Testing and Iteration",
          content:[
            "After the initial implementation, I conducted multiple rounds of internal testing to fine-tune the system and ensure it met both gameplay and performance requirements."
          ],
          subsections: [
            {
              title: "Key Iterations:",
              bullets: [
                "Timing Window Adjustments: Based on player feedback, the timing window for executing perfect combos was slightly expanded to make the system more accessible without compromising the challenge.",
                "Damage Balancing: Adjusted damage scaling to ensure the system was rewarding but not overpowered, particularly against elite enemies.",
                "Hitbox Optimization: Refined hitbox detection to improve the accuracy of combo attacks and ensure fair interactions with environmental obstacles."
              ]
            }
          ]
        },
        {
          title: "5. Final Outcome",
          content:[
            "The Precision Strike Combo System was successfully integrated into the final release of Project Zero 2: Apocalypse Party. It provided players with a more engaging combat experience, introducing a layer of skill-based gameplay that was both challenging and rewarding."
          ],
          video: "https://www.youtube.com/embed/lU-khMAAQpk"
        }
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
                  <CardTitle>About the game</CardTitle>
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
                    <Link href={project.steamLink} target="_blank" rel="noopener noreferrer">
                      <Gamepad2 className="mr-2 h-4 w-4" />
                      View on Steam
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
            <CardContent>
              {project.developmentProcess.sections.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  {section.content && (
                    <div className="mb-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-2">{paragraph}</p>
                      ))}
                    </div>
                  )}
                  {section.subsections && section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="mb-4">
                      <h4 className="text-lg font-medium mb-2">{subsection.title}</h4>
                      <ul className="list-disc list-inside">
                        {subsection.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {section.images && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="relative aspect-w-16 aspect-h-9">
                          <Image 
                            src={img.src} 
                            alt={img.alt} 
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="rounded-lg object-cover cursor-pointer"
                            onClick={() => setSelectedImage(img.src)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {section.video && (
                    <div className="mt-4 aspect-w-16 aspect-h-9">
                      <iframe 
                        src={section.video} 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                  )}
                </div>
              ))}
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