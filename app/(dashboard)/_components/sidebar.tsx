import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"

export const Sidebar = () => {
  return (
    <div style={{ backgroundColor: '#E8145B' }} className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="flex items-center justify-center p-1">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  )
}