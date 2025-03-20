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
        className="border rounded-xl px-2 text-lg cursor-pointer"
        style={{color: theme.border}}
        onClick={toggleTheme}
        >
          Byt tema
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
