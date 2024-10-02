import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkedinIcon, MailIcon, GithubIcon } from "lucide-react"
import Link from "next/link"

export default function GameDevPortfolio() {
  const gameProjects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of the game project.",
      role: "Game Designer",
      technologies: ["Unity", "C#", "Blender"],
    },
    {
      id: 2,
      title: "Project 2",
      description: "Another game project description.",
      role: "Game Developer",
      technologies: ["Unreal Engine", "C++", "Maya"],
    },
    {
      id: 3,
      title: "Project 3",
      description: "A third game project description.",
      role: "Game Developer & Designer",
      technologies: ["Godot", "GDScript", "Aseprite"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/" className="hover:underline font-medium">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:underline font-medium">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Bangyu Li</h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Game developer and designer passionate about creating immersive experiences. With a strong background in both development and design, I strive to craft engaging and innovative games that push the boundaries of interactive entertainment.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="https://www.linkedin.com/in/bangyu-li/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button asChild>
              <Link href="mailto:by.brad.li@gmail.com">
                <MailIcon className="mr-2 h-4 w-4" />
                Email
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://github.com/deep-river" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Game Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gameProjects.map((project) => (
              <Card key={project.id}>
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
                        className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/projects/${project.id}`}>
                      More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}