"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Users, Radio, Headphones, Mic2, PlayCircle } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"
import Appbar from "./Appbar";
import { Redirect } from "./Redirect";

export default function LandingPage() {
const session = useSession();
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
       <Appbar />
       <Redirect />
      <main className="flex-1 w-full text-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  Let Your Fans Choose the Music
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  FanTune revolutionizes music streaming by putting the power in your fans hands. Create unforgettable streams with music chosen by your audience.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
                <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-purple-400">
              Features That Empower
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-800 text-center">
                <Users className="h-8 w-8 mb-2 text-cyan-400" />
                <h3 className="text-xl font-bold text-purple-400">Fan Interaction</h3>
                <p className="text-sm text-gray-300">
                  Engage your audience by letting them choose the music for your stream.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-800 text-center">
                <Radio className="h-8 w-8 mb-2 text-cyan-400" />
                <h3 className="text-xl font-bold text-purple-400">Live Streaming</h3>
                <p className="text-sm text-gray-300">
                  Broadcast your music sessions live with high-quality audio streaming.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-800 text-center">
                <Headphones className="h-8 w-8 mb-2 text-cyan-400" />
                <h3 className="text-xl font-bold text-purple-400">Vast Music Library</h3>
                <p className="text-sm text-gray-300">
                  Access millions of tracks from various genres and artists.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-400">For Creators</h2>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take your music streams to the next level. Engage with your audience like never before and create unique, interactive experiences.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2 text-cyan-400 justify-center">
                    <Mic2 className="h-4 w-4" /> Host interactive music sessions
                  </li>
                  <li className="flex items-center gap-2 text-cyan-400 justify-center">
                    <Users className="h-4 w-4" /> Grow your fan base
                  </li>
                  <li className="flex items-center gap-2 text-cyan-400 justify-center">
                    <PlayCircle className="h-4 w-4" /> Monetize your streams
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-400">For Fans</h2>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of the music. Vote for your favorite tracks and influence the playlist of your favorite creators in real-time.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2 text-cyan-400 justify-center">
                    <Headphones className="h-4 w-4" /> Discover new music
                  </li>
                  <li className="flex items-center gap-2 text-cyan-400 justify-center">
                    <Radio className="h-4 w-4" /> Participate in live streams
                  </li>
                  <li className="flex items-center gap-2 text-cyan-400 justify-center">
                    <Music className="h-4 w-4" /> Shape the playlist
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800 bg-gradient-to-t from-gray-900 to-gray-950 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-400">
                  Ready to Revolutionize Your Music Streams?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Join FanTune today and start creating unforgettable music experiences with your fans.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2 justify-center">
                  <Input className="max-w-lg flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-purple-400" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2023 FanTune. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 justify-center">
          <Link className="text-xs hover:text-purple-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-purple-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}