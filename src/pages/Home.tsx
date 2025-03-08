'use client'
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import DisplayHomeForm from "../components/DisplayHomeForm"


const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(inputValue.trim() === '') return alert('Please enter username')
        setInputValue('')
        navigate('/difficulty')
    }

  return (
    <div>
      <DisplayHomeForm 
      inputValue={inputValue}
      setInputValue={setInputValue} 
      handleSubmit={handleSubmit} />
    </div>
  )
}

export default Home
