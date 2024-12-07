import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ajey N - Senior Frontend Developer',
  description: 'Portfolio of Ajey N - Senior Frontend Developer specializing in React and MERN stack development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="md:pl-[25%] min-h-screen bg-gray-50 dark:bg-gray-900 snap-y snap-proximity overflow-y-scroll">
          {children}
        </main>
      </body>
    </html>
  )
}
