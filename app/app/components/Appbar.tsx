"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Users, Radio, Headphones, Mic2, PlayCircle } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"

export default function Appbar() {
    const session = useSession();
    return <div>
         <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-gray-800">
        <Link className="flex items-center" href="#">
            <Music className="h-6 w-6 mr-2 text-purple-500" />
            <span className="font-bold text-purple-500">Streamic</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6 items-center">
            <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#">
            Features
            </Link>
            <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#">
            Pricing
            </Link>
            <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#">
            About
            </Link>
            <div>
            {session.data?.user && (
                <button 
                type="button" 
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-700 hover:to-cyan-600 focus:outline-none focus:ring-4 focus:ring-purple-500/50" 
                onClick={() => signOut()}
                >
                Logout
                </button>
            )}
            {!session.data?.user && (
                <button 
                type="button" 
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-700 hover:to-cyan-600 focus:outline-none focus:ring-4 focus:ring-purple-500/50" 
                onClick={() => signIn()}
                >
                Sign In
                </button>
            )}
            </div>
        </nav>
        </header>
      </div>
  }