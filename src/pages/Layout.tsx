import { useState } from "react"
import { Outlet, useLocation} from "react-router-dom"
import { ThemeContext, themes } from "../context/ThemeContext"
import { motion } from "framer-motion"
import { ITheme } from "../model/ITheme"

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
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="body ease-in duration-150 flex flex-col justify-center items-center min-h-screen relative" style={{backgroundColor: theme.background}}>
           
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
