import { Outlet, useLocation, useNavigate } from "react-router-dom"

const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'
  const isGamePage = location.pathname === '/gamePage'
  const isDifficulty = location.pathname === '/difficulty'

  const quit = () => {
   const isConfirmed = confirm('Are you sure?')
   sessionStorage.removeItem('username')
   sessionStorage.removeItem('difficulty')
   if(isConfirmed) navigate('/')
  }

  const backBtn = () => {
    navigate('/difficulty')
  }

  return (
    <div >
        <header className="text-center p-1 text-xl">
          {isDifficulty && <button onClick={quit} className="cursor-pointer border border-black px-1 mt-5 rounded-xl">Quit</button>}
          {isGamePage && <button onClick={backBtn} className="cursor-pointer border border-black px-1 mt-5 rounded-xl">Back</button>}
          {isHomePage && <p>Welcome</p>}
        </header>
        <main>
            <Outlet />
        </main>
        <footer className="absolute bottom-0 p-1 w-full text-center">
{/*             All rights reserved. @2024
 */}        </footer>
    </div>
  )
}

export default Layout
