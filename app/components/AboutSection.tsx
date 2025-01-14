import Image from 'next/image'

export default function AboutSection() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-center">
        <Image
          src="https://i.ibb.co/6wXQ62B/DSC-5539-Copy.jpg"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Ayush Singh</h1>
        <p className="text-gray-600">Patna, Bihar, India</p>
        <p className="text-blue-600">ayushsingh2009ddm@gmail.com</p>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Objective</h2>
        <p className="text-gray-700">
          Aspiring software engineer with a strong foundation in software development, machine learning, and web technologies.
          Seeking opportunities to apply skills in real-world projects while expanding expertise in emerging technologies.
        </p>
      </div>
    </div>
  )
}

