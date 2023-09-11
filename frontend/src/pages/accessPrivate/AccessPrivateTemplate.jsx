import { Sidebar } from "./components"


export const AccessPrivateTemplate = ({children}) => {
  return (
    <div className="accessPrivate">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}
