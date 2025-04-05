import { useState } from "react"
import { Outlet } from "react-router-dom"
import { ThemeContext, themes } from "../context/ThemeContext"
import { ITheme } from "../model/ITheme"

const Layout = () => {
    const savedTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState<ITheme>(savedTheme ? JSON.parse(savedTheme) : themes.light)
  
    const toggleTheme = () => {
    const newTheme = theme.name === themes.dark.name ? themes.light : themes.dark
      setTheme(newTheme)
      localStorage.setItem('theme', JSON.stringify(newTheme))
    }
    
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="body ease-in duration-150 flex flex-col justify-center items-center relative" style={{backgroundColor: theme.background}}>
          <Outlet />
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
