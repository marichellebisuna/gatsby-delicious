import React, { useState } from "react"

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false)
  const showSidebar = () => {
    setIsSidebarOpen(true)
  }
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }
  const showSearchbar = () => {
    setIsSearchbarOpen(true)
  }
  const hideSearchbar = () => {
    setIsSearchbarOpen(false)
  }
  return (
    <GatsbyContext.Provider
      value={{
        isSidebarOpen,
        showSidebar,
        isSearchbarOpen,
        showSearchbar,
        hideSidebar,
        hideSearchbar,
        setIsSearchbarOpen,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
