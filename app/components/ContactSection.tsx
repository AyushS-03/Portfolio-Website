import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Contact</h2>
      <div className="space-y-3">
        <a href="mailto:ayushsingh2009ddm@gmail.com" className="flex items-center gap-3 text-gray-700">
          <Mail size={20} />
          <span>ayushsingh2009ddm@gmail.com</span>
        </a>
        <a href="tel:+919997206079" className="flex items-center gap-3 text-gray-700">
          <Phone size={20} />
          <span>+91 9997206079</span>
        </a>
        <div className="flex items-center gap-3 text-gray-700">
          <MapPin size={20} />
          <span>Patna, Bihar, India</span>
        </div>
        <a href="https://linkedin.com/in/ayush-singh2009" className="flex items-center gap-3 text-gray-700">
          <Linkedin size={20} />
          <span>linkedin.com/in/ayush-singh2009</span>
        </a>
        <a href="https://github.com/AyushS-03" className="flex items-center gap-3 text-gray-700">
          <Github size={20} />
          <span>github.com/AyushS-03</span>
        </a>
      </div>
    </div>
  )
}

