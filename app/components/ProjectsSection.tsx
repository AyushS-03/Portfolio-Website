import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Anomaly Detection System',
    description: 'Developed an anomaly detection system using machine learning algorithms like Isolation Forest and Local Outlier Factor (LOF) to detect outliers in large datasets.',
    github: 'https://github.com/AyushS-03/anomaly-detection-project',
    image: 'https://i.ibb.co/kHdfMLT/ads.jpg'
  },
  {
    title: 'Customer Segmentation with K-Means Clustering',
    description: 'Implemented customer segmentation using K-Means clustering on a retail dataset. The project clusters customers based on their purchase behavior and visualizes segments through Dash.',
    github: 'https://customer-segmentation-project-e6zrhci8yffhlwmvdemx7b.streamlit.app/',
    image: 'https://i.ibb.co/ngLQHqR/csd.png'
  },
  {
    title: 'AI-Powered Q&A System',
    description: 'Built an AI-driven Q&A system leveraging OpenAI\'s GPT-3.5 for generating accurate answers. Integrated FAISS for efficient document retrieval.',
    github: 'https://github.com/AyushS-03/AI-Powered-Question-Answering-System',
    image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lkk1rDktFjd1xNoJjLZbVg.png'
  },
  {
    title: 'AR-Powered Remote Diagnostic Platform',
    description: 'Developed an augmented reality (AR) platform that allows remote vehicle diagnostics. Using YOLOv8 for real-time object detection.',
    github: 'https://github.com/AyushS-03/vw-2024-dyor',
    image: 'https://vsight.io/wp-content/uploads/2024/12/herofinal2-2.webp'
  }
]

export default function ProjectsSection() {
  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col bg-white rounded-lg p-4 shadow transition-all duration-200 ease-in-out transform hover:scale-105">
            <div className="w-full h-40 bg-gray-200 rounded-lg relative overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="rounded-lg object-cover"
                unoptimized
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{project.description}</p>
              {project.title === 'Customer Segmentation with K-Means Clustering' ? (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  View project live
                </a>
              ) : (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <Github size={16} />
                  View project on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

