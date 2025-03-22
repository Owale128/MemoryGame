import { useState } from "react"
import { Outlet, useLocation} from "react-router-dom"
import { ITheme, ThemeContext, themes } from "../context/ThemeContext"
import { motion } from "framer-motion"

const Layout = () => {
  const savedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState<ITheme>(savedTheme ? JSON.parse(savedTheme) : themes.light)
  const location = useLocation()
  
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
      
        <motion.main
        key={location.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        >
            <Outlet />
        </motion.main>
        <footer></footer>
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
