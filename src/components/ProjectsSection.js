'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

const projects = [
  {
    title: "useDbState",
    category: "NPM Package",
    description: "A React hook combining useState simplicity with IndexedDB persistence and global state management.",
    features: [
      "Persistent State",
      "Global State Management",
      "Type Safe",
      "Optimized Performance"
    ],
    tech: ["React", "IndexedDB", "JavaScript"],
    link: "https://www.npmjs.com/package/use-db-state",
    github: "https://github.com/ajejey/use-db-state-hook",
    image: "/projects/usedbstate.PNG",
    featured: true
  },
  {
    title: "Tambola Game",
    category: "Full Stack Game App",
    description: "Real-time multiplayer game built with MERN stack and Socket.IO.",
    features: [
      "Private Rooms",
      "Real-time Updates",
      "Game State Management",
      "Interactive UI"
    ],
    tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
    link: "https://tambolaonline.vercel.app/",
    image: "/projects/tambola.gif",
    github: "https://github.com/ajejey/tambola-frontend",
    featured: true
  },
  {
    title: "Herd Mentality Game",
    category: "Full Stack Game App",
    description: "Multiplayer game built with MERN stack and Socket.IO.",
    features: [
      "Private Rooms",
      "Real-time Updates",
      "Game State Management",
      "Interactive UI"
    ],
    tech: ["React", "Express", "Socket.IO", "MongoDB"],
    link: "https://herd-game-react.vercel.app/",
    github: "https://github.com/ajejey/herd-game-react",
    image: "/projects/herdgame.PNG",
    featured: true
  },
  {
    title: "Rupee For Humanity",
    category: "NGO Platform",
    description: "Full stack MERN application for NGO with donation management and blog system.",
    features: [
      "Donation System",
      "Blog Management",
      "Admin Dashboard",
      "Payment Integration"
    ],
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    link: "https://www.rupeeforhumanity.org/",
    github: "https://github.com/ajejey/rfh-react",
    image: "/projects/rupeeforhumanity.jpg",
    featured: true
  },
  {
    title: "Keyword Research Tool",
    category: "Web Scraping Tool",
    description: "Automated keyword research tool with PayPal integration.",
    features: [
      "Web Scraping",
      "Payment Integration",
      "Data Analysis",
      "PDF Reports"
    ],
    tech: ["Next.js", "PayPal API", "AI Image Generator", "IndexedDB"],
    link: "https://www.thebubbletrends.com/",
    github: "https://github.com/ajejey/bubbleTrendsNextjs",
    image: "/projects/keywordresearchtool.PNG",
    featured: true
  },
  {
    title: "Mighty Grains",
    category: "Product web app",
    description: "A Next.js 14 app for a brand called Mighty Grains.",
    features: [
      "Next.js 14",
      "Tailwind CSS",
    ],
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://mightygrains.in/",
    github: "https://github.com/ajejey/mightygrains",
    image: "/projects/mightygrains.PNG",
    featured: true
  },
  {
    title: "E-commerce Platform",
    category: "Next.js App",
    description: "Modern Next.js 14 application with MongoDB and appwrite authentication and storage.",
    features: [
      "Next.js 14",
      "MongoDB",
      "Authentication",
      "Storage"
    ],
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Appwrite"],
    link: "https://knitkart.in/",
    github: "https://github.com/ajejey/crochet-ecommerce",
    image: "/projects/ecommerce.PNG",
    featured: true
  },
  {
    title: "Nutrition Label Maker",
    category: "Next.js 14 App",
    description: "Professional nutrition label generator supporting multiple international standards with USDA database integration.",
    features: [
      "USDA Database Integration",
      "Multiple Label Formats",
      "High-res Exports",
      "Regulatory Compliance"
    ],
    tech: ["Next.js 14", "USDA API", "Tailwind CSS", "TypeScript"],
    link: "https://nutrition-label-maker.vercel.app/",
    github: "https://github.com/ajejey/nutritional-label-maker",
    image: "/projects/nutritionlabelmaker.PNG",
    featured: true
  },
  {
    title: "Financial Calculator",
    category: "Next.js App",
    description: "Comprehensive financial planning tool featuring SIP/SWP calculators, home loan calculator, and retirement planning with interactive wealth growth visualization.",
    features: [
      "SIP/SWP Calculator",
      "Home Loan Calculator",
      "Retirement Planning",
      "Interactive Charts"
    ],
    tech: ["Next.js", "Chart.js", "Tailwind CSS", "JavaScript"],
    link: "https://financial-calculator-one.vercel.app/", 
    github: "https://github.com/ajejey/financial-calculator",
    image: "/projects/financialcalculator.PNG",
    featured: true
  }
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="container mx-auto px-4">
      {/* <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2> */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Projects and Publications</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Showcasing my latest web development work and open-source contributions
        </p>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-75" />
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <HiArrowTopRightOnSquare className="w-5 h-5 text-white" />
              </a>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project <HiArrowTopRightOnSquare className="ml-2 w-4 h-4" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Code <HiArrowTopRightOnSquare className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Preview Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-w-4xl w-full h-auto">
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={1200}
              height={675}
              className="rounded-lg"
              onClick={(e) => e.stopPropagation()}
              priority={true}
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
