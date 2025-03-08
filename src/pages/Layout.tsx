import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <header>

        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            All rights reserved. @2024
        </footer>
    </div>
  )
}

export default Layout
