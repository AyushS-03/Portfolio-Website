'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import StatusBar from './StatusBar'
import AppGrid from './AppGrid'
import Dock from './Dock'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'
import EducationSection from './EducationSection'
import CertificatesSection from './CertificatesSection'
import ContactSection from './ContactSection'
import ResumeSection from './ResumeSection'
import RecentAppsMenu from './RecentAppsMenu'

const mobileBackgroundUrl = 'https://i.ibb.co/Ss0T4kT/astronaut-cat-moon-digital-art-phone-wallpaper-hd-uhdpaper-com-261-0-j.jpg'
const desktopBackgroundUrl = 'https://i.ibb.co/rdM7CKz/astronaut-cat-moon-digital-art-hd-wallpaper-uhdpaper-com-261-0-j.jpg'

export default function AndroidScreen() {
  const [currentApp, setCurrentApp] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDesktop, setIsDesktop] = useState(false)
  const [recentApps, setRecentApps] = useState<{ name: string; content: React.ReactNode }[]>([])
  const [showRecentApps, setShowRecentApps] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth >= 1024
      setIsDesktop(newIsDesktop)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const renderApp = () => {
    let content: React.ReactNode
    switch (currentApp) {
      case 'About Me':
        content = <AboutSection />
        break
      case 'Projects':
        content = <ProjectsSection />
        break
      case 'Skills':
        content = <SkillsSection />
        break
      case 'Education':
        content = <EducationSection />
        break
      case 'Certificates':
        content = <CertificatesSection />
        break
      case 'Contact':
        content = <ContactSection />
        break
      case 'Resume':
        content = <ResumeSection />
        break
      default:
        content = <AppGrid onAppClick={handleAppClick} />
    }

    if (currentApp && !recentApps.find(app => app.name === currentApp)) {
      setRecentApps(prev => [{ name: currentApp, content }, ...prev.slice(0, 4)])
    }

    return content
  }

  const handleAppClick = (appName: string) => {
    setCurrentApp(appName)
    setShowRecentApps(false)
    
    // Move the clicked app to the front of recent apps if it exists
    setRecentApps(prev => {
      const appIndex = prev.findIndex(app => app.name === appName)
      if (appIndex > -1) {
        const newRecentApps = [...prev]
        const [movedApp] = newRecentApps.splice(appIndex, 1)
        return [movedApp, ...newRecentApps]
      }
      return prev
    })
  }

  const handleRecentApps = () => {
    setShowRecentApps(true)
  }

  const handleHomeClick = () => {
    setCurrentApp(null)
    setShowRecentApps(false)
  }

  const handleBackClick = () => {
    if (showRecentApps) {
      setShowRecentApps(false)
    } else {
      setCurrentApp(null)
    }
  }

  return (
    <div className="relative w-full max-w-md lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl h-[100svh] lg:h-[90vh] rounded-3xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0">
        <Image
          src={isDesktop ? desktopBackgroundUrl : mobileBackgroundUrl}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-50"
        />
      </div>
      <div className="relative h-full flex flex-col">
        <StatusBar />
        <div className="flex-grow min-h-0 overflow-hidden relative">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <div className="h-full overflow-auto">
                {currentApp ? (
                  <div className="bg-white/90 h-full overflow-auto transition-opacity duration-300 ease-in-out">
                    {renderApp()}
                  </div>
                ) : (
                  renderApp()
                )}
              </div>
              {showRecentApps && recentApps.length > 0 && (
                <RecentAppsMenu
                  recentApps={recentApps}
                  onAppClick={handleAppClick}
                />
              )}
            </>
          )}
        </div>
        <Dock
          onHome={handleHomeClick}
          onBack={handleBackClick}
          onRecentApps={handleRecentApps}
        />
      </div>
    </div>
  )
}

