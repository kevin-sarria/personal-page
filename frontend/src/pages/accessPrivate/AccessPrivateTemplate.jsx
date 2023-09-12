import { useState } from "react"
import { Sidebar } from "./components"


export const AccessPrivateTemplate = ({children}) => {

  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen( prev => !prev );    
  }

  return (
    <div className="accessPrivate">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="main-content">
        <button onClick={toggleSidebar}>abrir menu</button>
        <div className="main-content__section">
          {children}
        </div>
      </main>
    </div>
  )
}
