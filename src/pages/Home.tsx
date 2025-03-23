'use client'
import { FormEvent, useContext, useState } from "react"
import DisplayHomeForm from "../components/DisplayHomeForm"
import { ThemeContext } from "../context/ThemeContext"
import useNavigation from "../hooks/useNavigation"

const Home = () => {
    const [username, setUsername] = useState('')
    const theme = useContext(ThemeContext)
    const { goTo } = useNavigation()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        sessionStorage.setItem('username', username)
        if(username.trim() === '') return alert('Please enter username')
        setUsername('')
        goTo('/categories')
    }

  return (
    <>
      <h1 className="text-center text-4xl mt-4 ease-in duration-100" style={{color: theme.color}}>Welcome to Memory Game!</h1>
    <div className="flex justify-center items-center place-items-center my-28">
      <DisplayHomeForm 
      username={username}
      setUsername={setUsername} 
      handleSubmit={handleSubmit} />
    </div>
    </>
  )
}

export default Home
