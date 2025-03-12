'use client'
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import DisplayHomeForm from "../components/DisplayHomeForm"

const Home = () => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        sessionStorage.setItem('username', username)
        if(username.trim() === '') return alert('Please enter username')
        setUsername('')
        navigate('/difficulty')
    }

  return (
    <div className="flex justify-center items-center place-items-center my-72 ">
      <DisplayHomeForm 
      username={username}
      setUsername={setUsername} 
      handleSubmit={handleSubmit} />
    </div>
  )
}

export default Home
