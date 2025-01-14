const skills = {
  'Languages': ['Python', 'Java', 'C++'],
  'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'REST API', 'React', 'Three.Js'],
  'Mobile App Dev': ['Android', 'Firebase'],
  'Machine Learning': ['TensorFlow', 'Deep Learning', 'Neural Network', 'Hyperparameter Tuning'],
  'Soft Skills': ['Leadership', 'Teamwork', 'Adaptability']
}

export default function SkillsSection() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="space-y-2">
          <h3 className="font-medium text-gray-700">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillList.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

