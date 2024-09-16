"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ChevronUp, ChevronDown, Play, SkipForward } from "lucide-react"

// Mock function to extract video ID from YouTube URL
const getYouTubeId = (url: string) => {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/)
  return match ? match[1] : null
}

export default function Component() {
  const [videoUrl, setVideoUrl] = useState('')
  const [queue, setQueue] = useState([
    { id: '1', title: 'Song 1', votes: 5, thumbnail: '/placeholder.svg' },
    { id: '2', title: 'Song 2', votes: 3, thumbnail: '/placeholder.svg' },
    { id: '3', title: 'Song 3', votes: 1, thumbnail: '/placeholder.svg' },
  ])
  const [currentVideo, setCurrentVideo] = useState({ id: 'dQw4w9WgXcQ', title: 'Current Song' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const videoId = getYouTubeId(videoUrl)
    if (videoId) {
      setQueue([...queue, { id: videoId, title: `New Song (${videoId})`, votes: 0, thumbnail: `https://img.youtube.com/vi/${videoId}/0.jpg` }])
      setVideoUrl('')
    }
  }

  const handleVote = (id: string, increment: number) => {
    setQueue(queue.map(item => 
      item.id === id ? { ...item, votes: item.votes + increment } : item
    ).sort((a, b) => b.votes - a.votes))
  }

  const playNext = () => {
    if (queue.length > 0) {
      setCurrentVideo(queue[0])
      setQueue(queue.slice(1))
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-4xl font-bold mb-6 text-white">Song Voting Queue</h1>
        
        {/* Current video player */}
        <Card className="mb-8 bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Now Playing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-800 relative rounded-lg overflow-hidden">
              <img 
                src={`https://img.youtube.com/vi/${currentVideo.id}/0.jpg`}
                alt={currentVideo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <Play className="w-16 h-16 text-white opacity-75" />
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{currentVideo.title}</h3>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={playNext} 
              variant="secondary" 
              className="w-full text-lg font-semibold"
            >
              <SkipForward className="mr-2 h-5 w-5" />
              Play Next
            </Button>
          </CardFooter>
        </Card>
        
        {/* Video submission form */}
        <Card className="mb-8 bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Add a Song</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="Paste YouTube URL here"
                  className="flex-grow bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button type="submit" variant="secondary" className="text-black">Add to Queue</Button>
              </div>
              {videoUrl && getYouTubeId(videoUrl) && (
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-white">Preview:</h3>
                  <img 
                    src={`https://img.youtube.com/vi/${getYouTubeId(videoUrl)}/0.jpg`} 
                    alt="Video thumbnail" 
                    className="w-full max-w-xs rounded-lg"
                  />
                </div>
              )}
            </form>
          </CardContent>
        </Card>
        
        {/* Video queue */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Up Next</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {queue.map((video) => (
                <li key={video.id} className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
                  <img src={video.thumbnail} alt={video.title} className="w-24 h-18 object-cover rounded-lg" />
                  <div className="flex-grow">
                    <h3 className="font-medium text-lg text-white">{video.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      onClick={() => handleVote(video.id, 1)}
                      className="text-white hover:text-green-400 hover:bg-green-400/10"
                    >
                      <ChevronUp className="h-6 w-6" />
                      <span className="sr-only">Upvote</span>
                    </Button>
                    <span className="text-xl font-bold text-white">{video.votes}</span>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      onClick={() => handleVote(video.id, -1)}
                      className="text-white hover:text-red-400 hover:bg-red-400/10"
                    >
                      <ChevronDown className="h-6 w-6" />
                      <span className="sr-only">Downvote</span>
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}