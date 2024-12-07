'use client'

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "WorkOnGrid, Bangalore",
    period: "Feb 2024 - Present",
    highlights: [
      "Led frontend modernization initiative, migrating from CRA to Vite",
      "Optimized application by removing 23 libraries and implementing custom solutions",
      "Modernized codebase by converting 48 class components to functional components",
      "Developed automation scripts for migrating 1700+ JavaScript files",
      "Rewrote core worksheet data entry module"
    ]
  },
  {
    title: "Senior Developer",
    company: "MathCo, Bangalore",
    period: "Aug 2020 - Jan 2024",
    highlights: [
      "Led development of enterprise R&D applications for Fortune 500 CPG companies",
      "Architected universal A/B testing platform for major beverage company",
      "Built interactive dashboards using PlotlyJS and AMCharts",
      "Developed internal web scraping tool with Node.js",
      "Managed client relationships and technical requirements"
    ]
  }
]

export default function ExperienceSection() {
  return (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Professional journey and key achievements
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2" />

        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-16">
            <div className={`flex flex-col md:flex-row gap-8 items-start ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 mt-2">
                <div className="absolute w-8 h-8 bg-blue-100 rounded-full -m-2 animate-ping" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 whitespace-nowrap">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-blue-600">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
