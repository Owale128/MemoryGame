import { useState } from "react"
import { Outlet} from "react-router-dom"
import { ITheme, ThemeContext, themes } from "../context/ThemeContext"

const Layout = () => {
  const savedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState<ITheme>(savedTheme ? JSON.parse(savedTheme) : themes.light)

    const toggleTheme = () => {
    const newTheme = theme.name === themes.dark.name ? themes.light : themes.dark
      setTheme(newTheme)
      localStorage.setItem('theme', JSON.stringify(newTheme))
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
          src="/MoonIcon.png" 
          alt="Moon Icon" width={25} />
        ) : (
          <img 
          src="/BulbIcon.png" 
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
