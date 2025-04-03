'use client'
import { FormEvent, useContext, useState } from "react"
import DisplayHomeForm from "../components/DisplayHomeForm"
import { ThemeContext, themes } from "../context/ThemeContext"
import useNavigation from "../hooks/useNavigation"

const Home = () => {
    const [username, setUsername] = useState('')
    const {theme, toggleTheme} = useContext(ThemeContext)
    const { goTo } = useNavigation()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        sessionStorage.setItem('username', username)
        if(username.trim() === '') return alert('Please enter username')
        setUsername('')
        goTo('/categories')
    }

  return (
    <div>
      <button 
      className="flex flex-col items-center justify-end text-lg absolute right-10 top-10 cursor-pointer"
      style={{color: theme.border}}
      onClick={toggleTheme}
      aria-label="Toggle theme (light/dark mode)"
      >
        Theme
      {theme === themes.light ? (
        <img 
        src="/MoonIcon.png" 
        alt="Moon icon, dark mode theme" width={25} />
      ) : (
        <img 
        src="/BulbIcon.png" 
        alt="Light bulb icon, light mode theme" width={25} 
        className="filter invert brightness-100" />
      )}
      </button>
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="font-mono text-center text-3xl mb-6 ease-in duration-100" style={{color: theme.color}}> Memory Game</h1>
      <DisplayHomeForm 
      username={username}
      setUsername={setUsername} 
      handleSubmit={handleSubmit} />
    </div>
    </div>
  )
}

export default Home
