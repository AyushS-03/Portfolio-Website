import AppIcon from './AppIcon'

const apps = [
  { name: 'About Me', icon: '👤' },
  { name: 'Projects', icon: '💼' },
  { name: 'Skills', icon: '🛠️' },
  { name: 'Education', icon: '🎓' },
  { name: 'Certificates', icon: '🏆' },
  { name: 'Contact', icon: '📧' },
  { name: 'Resume', icon: '📄' },
]

export default function AppGrid({ onAppClick }: { onAppClick: (appName: string) => void }) {
  return (
    <div className="flex-grow p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {apps.map((app) => (
          <AppIcon 
            key={app.name} 
            name={app.name} 
            icon={app.icon} 
            onClick={() => onAppClick(app.name)}
          />
        ))}
      </div>
    </div>
  )
}

