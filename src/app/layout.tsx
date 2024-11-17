import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/shared/navbar'

export const metadata: Metadata = {
  title: 'GymFit',
  description: 'Tu gimnasio virtual',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}