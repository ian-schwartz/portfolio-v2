"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-16">
      <section className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-start gap-6 mb-10">
          <Image
            src="/avatar.jpg" // replace with your actual avatar
            alt="Avatar"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold">Ian Schwartz</h1>
            <p className="text-xl text-neutral-400">Full Stack Web Developer</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xl text-neutral-400 max-w-xl mb-6">
          A professional one-page resume portfolio. Built to showcase recent work and experience as a developer.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-16">
          <Button variant="outline">Email</Button>
          <Button variant="outline">LinkedIn</Button>
        </div>

        {/* Projects Section Placeholder */}
        <h2 className="text-lg font-semibold mb-2">Recent Projects</h2>
        <p className="text-sm text-neutral-500 mb-4">2023–2024</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Project cards will go here */}
          <div className="bg-neutral-900 rounded-lg p-4 h-64 flex items-center justify-center text-neutral-500">
            Project 1
          </div>
          <div className="bg-neutral-900 rounded-lg p-4 h-64 flex items-center justify-center text-neutral-500">
            Project 2
          </div>
          <div className="bg-neutral-900 rounded-lg p-4 h-64 flex items-center justify-center text-neutral-500">
            Project 3
          </div>
        </div>
      </section>
    </main>
  )
}
