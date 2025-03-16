import { Outlet, useLocation, useNavigate } from "react-router-dom"
import QuitBtn from "../components/QuitBtn"

const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'
  const isGamePage = location.pathname === '/gamePage'
  const isDifficulty = location.pathname === '/difficulty'

  const backBtn = () => {
    navigate('/difficulty')
  }

  return (
    <div >
        <header className="text-center p-6 text-xl mt-3">
          {isDifficulty && <QuitBtn />}
          {isGamePage && <button onClick={backBtn} className="cursor-pointer border border-black px-1 text-2xl rounded-xl">Back</button>}
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
