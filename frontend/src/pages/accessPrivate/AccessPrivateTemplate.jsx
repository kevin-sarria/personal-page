import { useState } from "react"
import { IconMenu, Sidebar } from "./components"
import { Alert } from "../../components";

export const AccessPrivateTemplate = ({children}) => {

  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen( prev => !prev );    
  }

  return (
    <div className="accessPrivate">
      <Alert type='dashboard' />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="main-content">
        <IconMenu toggleSidebar={toggleSidebar} />
        <div className="main-content__section">
          {children}
        </div>
      </main>
    </div>
  )
}
