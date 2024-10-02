import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Resume() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Bangyu Li - Resume</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          {/* Add your education details here */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          {/* Add your work experience details here */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          {/* Add your skills here */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Awards and Achievements</h2>
          {/* Add your awards and achievements here */}
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