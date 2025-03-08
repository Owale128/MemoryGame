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
        navigate('/')
    }

  return (
    <div className="flex justify-center items-center place-items-center my-72 ">
      <DisplayHomeForm 
      inputValue={inputValue}
      setInputValue={setInputValue} 
      handleSubmit={handleSubmit} />
    </div>
  )
}

export default Home
