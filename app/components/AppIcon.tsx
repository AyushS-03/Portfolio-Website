'use client'

interface AppIconProps {
  name: string
  icon: string
  onClick?: () => void
}

export default function AppIcon({ name, icon, onClick }: AppIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center focus:outline-none group transition-transform duration-200 ease-in-out transform hover:scale-105"
    >
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-md group-hover:shadow-lg transition-all duration-200 group-active:scale-95">
        {icon}
      </div>
      <span className="mt-2 text-sm font-medium text-white text-center text-shadow">{name}</span>
    </button>
  )
}

