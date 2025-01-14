import Image from 'next/image';

const education = [
  {
    institution: 'Sikkim Manipal Institute of Technology',
    degree: 'Bachelor of Technology (Computer Science and Engineering)',
    year: '2021 - 2025 (Pursuing)',
    courses: 'Data Structures and Algorithms, Operating Systems, Database Management Systems, Machine Learning, Object-Oriented Programming',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmU1ehrixx7OPbvkoLO-GPtKuxMmSQUlFaGw&s'
  },
  {
    institution: 'Prelude Public School',
    degree: 'Class XII (CBSE)',
    year: '2021',
    percentage: '77%',
    subjects: 'Mathematics, Physics, Computer Science, Science',
    image: 'https://skoodos.com/public/uploads/optimized/1651725889.png'
  },
  {
    institution: 'Narayana Olympiad School',
    degree: 'Class X (CBSE)',
    year: '2019',
    percentage: '77.2%',
    image: 'https://www.yayskool.com/images/school/narayana-olympiad-school-bangalore-233115609.png'
  }
];

export default function EducationSection() {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="flex gap-4 bg-white rounded-lg p-4 shadow">
          <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 relative overflow-hidden">
            <Image
              src={edu.image}
              alt={edu.institution}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold">{edu.institution}</h3>
            <p className="text-sm text-gray-600">{edu.degree}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
            {edu.percentage && (
              <p className="text-sm text-gray-500">Percentage: {edu.percentage}</p>
            )}
            {edu.courses && (
              <p className="text-sm text-gray-500 mt-1">
                <span className="font-medium">Key Courses:</span> {edu.courses}
              </p>
            )}
            {edu.subjects && (
              <p className="text-sm text-gray-500 mt-1">
                <span className="font-medium">Subjects:</span> {edu.subjects}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

