'use client'

import './globals.css'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Navbar from '@/components/shared/navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      setIsAuthenticated(true)
    } else if (pathname !== '/auth') {
      router.push('/auth')
    }
  }, [pathname, router])

  return (
    <html lang="es">
      <body>
        {isAuthenticated && <Navbar />}
        {children}
      </body>
    </html>
  )
}