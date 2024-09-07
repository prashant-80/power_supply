import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-4xl font-bold text-white mb-8">Programmable Power Supply</h1>
      <Link href="/set">
        <Button variant="secondary" size="lg">
          Go to Set Page
        </Button>
      </Link>
      <p className="text-white mt-4">Welcome to the ESP Client App!</p>
      <p className="text-white mt-2">This app allows you to control your programmable power supply remotely.</p>
    </div>
  )
}