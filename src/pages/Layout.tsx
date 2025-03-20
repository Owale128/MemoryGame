import { useState } from "react"
import { Outlet} from "react-router-dom"
import { ITheme, ThemeContext, themes } from "../context/ThemeContext"

const Layout = () => {
  const [theme, setTheme] = useState<ITheme>(themes.light)

    const toggleTheme = () => {
      setTheme(theme.name === themes.dark.name ? themes.light : themes.dark)
    }
    
  return (
    <ThemeContext.Provider value={theme}>
      <div className="body ease-in duration-150" style={{backgroundColor: theme.background}}>
      <header className="flex justify-end p-6">

        <button 
        className="flex flex-col items-center px-6 text-lg cursor-pointer"
        style={{color: theme.border}}
        onClick={toggleTheme}>
         Theme
        {theme === themes.light ? (
          <img 
          src="/public/MoonIcon.png" 
          alt="Moon Icon" width={25} />
        ) : (
          <img 
          src="/public/BulbIcon.png" 
          alt="BulbIcon" width={25} 
          className="filter invert brightness-100" />
        )}
        </button>

      </header>
        <main>
            <Outlet />
        </main>
        <footer></footer>
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
