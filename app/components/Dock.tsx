import { Home, Clock3, ArrowLeft } from 'lucide-react'

interface DockProps {
  onHome: () => void
  onBack: () => void
  onRecentApps: () => void
  className?: string
}

export default function Dock({ onHome, onBack, onRecentApps, className }: DockProps) {
  return (
    <div className={`bg-black bg-opacity-50 text-white px-4 py-2 flex justify-around items-center ${className}`}>
      <button className="p-2 rounded-full hover:bg-white/10" onClick={onBack}>
        <ArrowLeft size={24} />
      </button>
      <button className="p-2 rounded-full hover:bg-white/10" onClick={onHome}>
        <Home size={24} />
      </button>
      <button className="p-2 rounded-full hover:bg-white/10" onClick={onRecentApps}>
        <Clock3 size={24} />
      </button>
    </div>
  )
}

