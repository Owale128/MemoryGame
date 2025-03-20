'use client'
import { FormEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import DisplayHomeForm from "../components/DisplayHomeForm"
import { ThemeContext } from "../context/ThemeContext"

const Home = () => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    const theme = useContext(ThemeContext)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        sessionStorage.setItem('username', username)
        if(username.trim() === '') return alert('Please enter username')
        setUsername('')
        navigate('/difficulty')
    }

  return (
    <>
      <h1 className="text-center text-4xl mt-14 ease-in duration-100" style={{color: theme.color}}>Välkommen till Memory!</h1>
    <div className="flex justify-center items-center place-items-center my-44">
      <DisplayHomeForm 
      username={username}
      setUsername={setUsername} 
      handleSubmit={handleSubmit} />
    </div>
    </>
  )
}

export default Home
