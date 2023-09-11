import { useState } from "react"
import { Sidebar } from "./components"


export const AccessPrivateTemplate = ({children}) => {

  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

  return (
    <div className="accessPrivate">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}
