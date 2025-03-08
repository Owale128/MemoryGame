import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <header className="text-center border border-black p-2 text-xl">
          <ul>
            <li>
              Welcom
            </li>
          </ul>
        </header>
        <main>
            <Outlet />
        </main>
        <footer className="absolute bottom-0 border p-1 w-full text-center">
            All rights reserved. @2024
        </footer>
    </div>
  )
}

export default Layout
