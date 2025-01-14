'use client'

import { Battery, Wifi, Signal } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function StatusBar() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black bg-opacity-50 text-white px-4 py-2 flex justify-between items-center">
      <span className="text-sm">{time}</span>
      <div className="flex items-center space-x-2">
        <Signal size={16} />
        <Wifi size={16} />
        <div className="relative">
          <Battery size={16} className="text-green-500 fill-green-500" />
        </div>
      </div>
    </div>
  )
}

