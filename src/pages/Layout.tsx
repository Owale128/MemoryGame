import { Outlet, useLocation, useNavigate } from "react-router-dom"

const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  const logOut = () => {
   const isConfirmed = confirm('Are you sure?')
   if(isConfirmed) navigate('/')
  }
  return (
    <div>
        <header className="text-center border-b border-black p-1 text-xl">
          {!isHomePage && (
            <button onClick={logOut} className="cursor-pointer">Logout</button>
          )}
          {isHomePage && <p>Welcome</p>}
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
