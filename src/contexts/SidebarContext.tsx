"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface SidebarContextValue {
  isOpen: boolean
  isCollapsed: boolean
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  setCollapsed: (collapsed: boolean) => void
  toggleCollapsed: () => void
}

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined)

const STORAGE_KEY_COLLAPSED = "ph-sidebar-collapsed"

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY_COLLAPSED)
    if (stored === "true") {
      setIsCollapsed(true)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem(STORAGE_KEY_COLLAPSED, String(isCollapsed))
  }, [isCollapsed, mounted])

  const toggleSidebar = () => setIsOpen((prev) => !prev)
  const setSidebarOpen = (open: boolean) => setIsOpen(open)
  const setCollapsed = (collapsed: boolean) => setIsCollapsed(collapsed)
  const toggleCollapsed = () => setIsCollapsed((prev) => !prev)

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        isCollapsed,
        toggleSidebar,
        setSidebarOpen,
        setCollapsed,
        toggleCollapsed,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
