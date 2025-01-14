'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface RecentAppsMenuProps {
  recentApps: { name: string; content: React.ReactNode }[]
  onAppClick: (app: string) => void
}

export default function RecentAppsMenu({ recentApps, onAppClick }: RecentAppsMenuProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < recentApps.length - 1 ? prev + 1 : prev))
  }

  if (recentApps.length === 0) return null

  return (
    <div className="absolute inset-0 backdrop-blur-md bg-black/40 z-10">
      <div className="relative h-full flex flex-col">
        <div className="p-4">
          <p className="text-white text-sm">{recentApps.length} active in background</p>
        </div>
        
        <div className="flex-1 flex items-center relative px-4 pb-16">
          <button
            onClick={handlePrevious}
            className="absolute left-2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors disabled:opacity-50"
            disabled={currentIndex === recentApps.length - 1}
          >
            <ChevronRight size={24} />
          </button>

          <div className="w-full px-8 overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {recentApps.map((app, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div 
                    className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
                    style={{ height: 'calc(100vh - 250px)' }}
                    onClick={() => onAppClick(app.name)}
                  >
                    <div className="p-3 border-b border-gray-200">
                      <h3 className="text-lg font-semibold">{app.name}</h3>
                    </div>
                    <div className="overflow-hidden pointer-events-none">
                      <div className="h-full overflow-auto">
                        {app.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

