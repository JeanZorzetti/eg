'use client'

import { useState } from 'react'
import Sidebar from '@/components/plataforma/Sidebar'
import PlataformaHeader from '@/components/plataforma/PlataformaHeader'

export default function PlataformaShell({ name, children }: { name: string; children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <PlataformaHeader name={name} onToggleSidebar={() => setSidebarOpen((o) => !o)} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
