'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaNpm } from 'react-icons/fa'
import { HiArrowLongRight } from 'react-icons/hi2'
import Link from 'next/link'

export default function HeroSection() {
  const [text, setText] = useState('')
  const fullText = "Building exceptional web experiences with React and modern technologies"
  
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="max-w-4xl">
        <div className="space-y-4 mb-8">
          <h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            AJEY N
          </h1>
          <p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-semibold"
          >
            Senior Frontend Developer
          </p>
        </div>

        <p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
        >
          {text }
          <span className="animate-blink">|</span>
        </p>

        <div className="flex space-x-6">
          <Link href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View Projects
          </Link>
          <a 
            href="/projects/Ajey_N_Resume.pdf"
            download="Ajey_N_Resume.pdf"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center"
          >
            Download Resume
            <HiArrowLongRight className="ml-2 w-5 h-5" />
          </a>
        </div>
        
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <div className="flex items-center space-x-2 mb-6">
              <FaNpm className="w-6 h-6 text-red-500" />
              <span className="text-lg font-medium text-gray-600 dark:text-gray-400">Published NPM Package</span>
            </div>

            <motion.div 
              className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-t-2xl" />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                    useDbState
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0 md:mr-8">
                    A powerful React hook combining useState simplicity with IndexedDB persistence and global state management.
                  </p>
                </div>
                
                <motion.a
                  href="https://www.npmjs.com/package/use-db-state"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium">View on NPM </span>
                  <HiArrowLongRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              </div>

              <div className="mt-6 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  Latest Version
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                  MIT License
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
